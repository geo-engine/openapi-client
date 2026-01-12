#!/bin/python3

"""
Generator for the OpenAPI client.
"""

from __future__ import annotations
import argparse
from dataclasses import dataclass
from pathlib import Path
from urllib import request
from urllib.parse import urlsplit
import configparser
import os
import shutil
import subprocess
from typing import Literal
import logging


CWD = Path(".generation/")


class ProgramArgs(argparse.Namespace):
    """Typed command line arguments."""

    language: Literal["python", "rust", "typescript"]
    fetch_spec: bool
    build_container: bool

    @staticmethod
    def parse_arguments() -> ProgramArgs:
        """Parse command line arguments."""
        parser = argparse.ArgumentParser(
            description="Create a client for the Geo Engine API."
        )
        parser.add_argument(
            "--no-spec-fetch",
            dest="fetch_spec",
            action="store_false",
            required=False,
            default=True,
        )
        parser.add_argument(
            "--no-container-build",
            dest="build_container",
            action="store_false",
            required=False,
            default=True,
        )
        parser.add_argument(
            "language", choices=["python", "rust", "typescript"], type=str
        )

        parsed_args: ProgramArgs = parser.parse_args()  # type: ignore[assignment]
        return parsed_args


@dataclass
class ConfigArgs:
    """Typed config.ini arguments."""

    # Backend version
    ge_backend_commit: str

    # General
    github_repository: GitHubRepository
    homepage_url: str
    package_version: str

    # Python package name
    python_package_name: str

    # TypeScript package name
    typescript_package_name: str

    @staticmethod
    def parse_config() -> ConfigArgs:
        """Parse config.ini arguments."""
        parsed = configparser.ConfigParser()
        # do not convert keys to lowercase
        parsed.optionxform = lambda optionstr: optionstr  # type: ignore[method-assign]
        parsed.read(CWD / "config.ini")

        return ConfigArgs(
            ge_backend_commit=parsed["input"]["backendCommit"],
            github_repository=GitHubRepository(parsed["general"]["githubUrl"]),
            homepage_url=parsed["general"]["homepageUrl"],
            package_version=parsed["general"]["version"],
            python_package_name=parsed["python"]["name"],
            typescript_package_name=parsed["typescript"]["name"],
        )


def fetch_spec(*, ge_backend_commit: str) -> None:
    """
    Copy the openapi.json file from the backend repo.
    """

    request_url = f"https://raw.githubusercontent.com/geo-engine/geoengine/{ge_backend_commit}/openapi.json"

    logging.info("Requesting `openapi.json` at `%s`….", request_url)
    with (
        request.urlopen(request_url, timeout=10) as w,
        open(CWD / "input/openapi.json", "w", encoding="utf-8") as f,
    ):
        f.write(w.read().decode("utf-8"))

    logging.info("Stored `openapi.json`.")


def build_container():
    """Build the patched generator image"""
    logging.info("Building patched generator image…")
    subprocess.run(
        [
            "podman",
            "build",
            "-t",
            "openapi-generator-cli:patched",
            CWD,
        ],
        check=True,
    )
    logging.info("Patched generator image built.")


def clean_dirs(*, language: Literal["python", "typescript"]):
    """Remove some directories because they are not be overwritten by the generator."""

    dirs_to_remove: list[Path] = [
        Path("node_modules"),
        Path(".mypy_cache"),
        Path(language) / "test",
    ]

    match language:
        case "typescript":
            dirs_to_remove.extend(
                [
                    Path(language) / "src",
                    Path(language) / "dist",
                    Path(language) / "node_modules",
                ]
            )
        case "python":
            dirs_to_remove.extend(
                [
                    Path(language) / "geoengine_openapi_client",
                ]
            )

    logging.info("Removing directories:")

    for the_dir in dirs_to_remove:
        if not os.path.isdir(the_dir):
            continue
        logging.info("  - %s", the_dir)
        shutil.rmtree(the_dir)


def generate_python_code(*, package_name: str, package_version: str, package_url: str):
    """Run the generator."""

    subprocess.run(
        [
            "podman",
            "run",
            "--rm",  # remove the container after running
            "-v",
            f"{os.getcwd()}:/local",
            f"--env-file={CWD / 'override.env'}",
            # "docker.io/openapitools/openapi-generator-cli:v7.0.1",
            "openapi-generator-cli:patched",
            "generate",
            "-i",
            f"{'/local' / CWD / 'input/openapi.json'}",
            "-g",
            "python",
            "--additional-properties="
            + ",".join(
                [
                    "useOneOfDiscriminatorLookup=true",
                    # "generateSourceCodeOnly=true",
                    f"packageName={package_name}",
                    f"packageVersion={package_version}",
                    f"packageUrl={package_url}",
                ]
            ),
            "--enable-post-process-file",
            "-o",
            "/local/python/",
            "--openapi-normalizer",
            "REF_AS_PARENT_IN_ALLOF=true",
        ],
        check=True,
    )
    shutil.rmtree(Path("python") / "docs")


def generate_typescript_code(
    *, npm_name: str, npm_version: str, github_repository: GitHubRepository
):
    """Run the generator."""

    subprocess.run(
        [
            "podman",
            "run",
            "--rm",  # remove the container after running
            "-v",
            f"{os.getcwd()}:/local",
            f"--env-file={CWD / 'override.env'}",
            # "docker.io/openapitools/openapi-generator-cli:v7.0.1",
            "openapi-generator-cli:patched",
            "generate",
            "-i",
            f"{'/local' / CWD / 'input/openapi.json'}",
            "-g",
            "typescript-fetch",
            "--additional-properties="
            + ",".join(
                [
                    "supportsES6=true",
                    f"npmName={npm_name}",
                    f"npmVersion={npm_version}",
                ]
            ),
            "--git-host",
            github_repository.host,
            "--git-user-id",
            github_repository.user,
            "--git-repo-id",
            github_repository.repo,
            "--enable-post-process-file",
            "-o",
            "/local/typescript/",
            "--openapi-normalizer",
            "REF_AS_PARENT_IN_ALLOF=true",
        ],
        check=True,
    )
    with open(Path("typescript") / ".gitignore", "w", encoding="utf-8") as f:
        f.write("""wwwroot/*.js
node_modules
typings
""")
    shutil.rmtree(Path("typescript") / ".openapi-generator")


def generate_rust_code(
    *,
    package_name: str,
    package_version: str,
    git_repo: GitHubRepository,
    homepage_url: str,
):
    """Run the generator."""

    subprocess.run(
        [
            "podman",
            "run",
            "--rm",  # remove the container after running
            "-v",
            f"{os.getcwd()}:/local",
            f"--env-file={CWD / 'override.env'}",
            # "docker.io/openapitools/openapi-generator-cli:v7.0.1",
            "openapi-generator-cli:patched",
            "generate",
            "-i",
            f"{'/local' / CWD / 'input/openapi.json'}",
            "-g",
            "rust",
            "--additional-properties="
            + ",".join(
                [
                    f"packageName={package_name.replace('_', '-')}",
                    f"packageVersion={package_version}",
                    f"homePageUrl={homepage_url}",
                    f"repositoryUrl={git_repo.url()}",
                ]
            ),
            "--git-host",
            git_repo.host,
            "--git-user-id",
            git_repo.user,
            "--git-repo-id",
            git_repo.repo,
            "--enable-post-process-file",
            "-o",
            "/local/rust/",
            "--openapi-normalizer",
            "REF_AS_PARENT_IN_ALLOF=true",
        ],
        check=True,
    )

    # Temporary solution because `RUST_POST_PROCESS_FILE` is not used by the generator
    for rust_file in [
        "Cargo.toml",
        "src/apis/ogcwfs_api.rs",
        "src/apis/ogcwms_api.rs",
        "src/apis/projects_api.rs",
        "src/apis/tasks_api.rs",
        "src/apis/uploads_api.rs",
        "src/models/spatial_partition2_d.rs",
        "src/models/spatial_resolution.rs",
    ]:
        subprocess.run(
            [
                "podman",
                "run",
                "--rm",  # remove the container after running
                "-v",
                f"{os.getcwd()}:/local",
                f"--env-file={CWD / 'override.env'}",
                # "docker.io/openapitools/openapi-generator-cli:v7.0.1",
                "openapi-generator-cli:patched",
                "python3",
                "/local/.generation/post-process/rust.py",
                "/local/rust/" + rust_file,
            ],
            check=True,
        )


@dataclass
class GitHubRepository:
    """Git repository triplet."""

    host: str
    user: str
    repo: str

    def __init__(self, url: str) -> None:
        """Create a GitHubRepository from a URL."""
        parsed_url = urlsplit(url)
        (url_path, _url_ext) = os.path.splitext(parsed_url.path)
        (url_path, git_repo_id) = os.path.split(url_path)
        (url_path, git_user_id) = os.path.split(url_path)

        self.host = parsed_url.netloc
        self.user = git_user_id
        self.repo = git_repo_id

    def url(self) -> str:
        """Get the URL of the repository."""
        return f"https://{self.host}/{self.user}/{self.repo}"


def main():
    """The entry point of the program"""

    # Set up logging
    logging.basicConfig(level=logging.INFO, format="[%(levelname)s] %(message)s")

    args = ProgramArgs.parse_arguments()
    config = ConfigArgs.parse_config()

    if args.fetch_spec:
        fetch_spec(ge_backend_commit=config.ge_backend_commit)

    if args.build_container:
        build_container()

    clean_dirs(language=args.language)

    if args.language == "python":
        logging.info("Generating Python client…")
        generate_python_code(
            package_name=config.python_package_name,
            package_version=config.package_version,
            package_url=config.github_repository.url(),
        )
    elif args.language == "typescript":
        logging.info("Generating TypeScript client…")
        generate_typescript_code(
            npm_name=config.typescript_package_name,
            npm_version=config.package_version,
            github_repository=config.github_repository,
        )

        # Create dist files.
        # This is necessary for using the package directly from the git repo for development.
        logging.info("Creating dist files…")
        subprocess.run(
            [
                "podman",
                "run",
                "--rm",  # remove the container after running
                "-v",
                f"{os.getcwd()}/typescript:/local/typescript",
                "--workdir=/local/typescript",  # set working directory
                "docker.io/node:lts-alpine3.20",
                "npm",
                "install",
            ],
            check=True,
        )
    elif args.language == "rust":
        logging.info("Generating Rust client…")
        generate_rust_code(
            package_name=config.python_package_name,
            package_version=config.package_version,
            git_repo=config.github_repository,
            homepage_url=config.homepage_url,
        )
    else:
        raise RuntimeError(f"Unknown language {args.language}.")


if __name__ != "__main__":
    raise RuntimeError("This module should not be imported.")

main()
