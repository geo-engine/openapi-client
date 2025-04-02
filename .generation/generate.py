#!/bin/python3

'''
Generator for the OpenAPI client.
'''

from __future__ import annotations
import argparse
from dataclasses import dataclass
from pathlib import Path
from urllib import request
from urllib.error import URLError
from urllib.parse import urlsplit
import configparser
import json
import os
import shutil
import subprocess
import sys
import time
from typing import Literal


CWD = Path('.generation/')


def eprint(*args, **kwargs):
    '''Print to stderr.'''
    print(*args, file=sys.stderr, **kwargs)


class ProgramArgs(argparse.Namespace):
    '''Typed command line arguments.'''
    language: Literal['python', 'typescript']
    fetch_spec: bool
    build_container: bool

    @staticmethod
    def parse_arguments() -> ProgramArgs:
        '''Parse command line arguments.'''
        parser = argparse.ArgumentParser(
            description='Create a client for the Geo Engine API.')
        parser.add_argument('--no-spec-fetch', dest='fetch_spec', action='store_false',
                            required=False, default=True)
        parser.add_argument('--no-container-build', dest='build_container', action='store_false',
                            required=False, default=True)
        parser.add_argument('language', choices=['python', 'typescript'],
                            type=str)

        parsed_args: ProgramArgs = parser.parse_args()
        return parsed_args


@dataclass
class ConfigArgs():
    '''Typed config.ini arguments.'''
    # Backend version
    ge_backend_commit: str

    # General
    github_url: str
    package_version: str

    # Python package name
    python_package_name: str

    # TypeScript package name
    typescript_package_name: str

    @staticmethod
    def parse_config() -> ConfigArgs:
        '''Parse config.ini arguments.'''
        parsed = configparser.ConfigParser()
        parsed.optionxform = str  # do not convert keys to lowercase
        parsed.read(CWD / 'config.ini')

        return ConfigArgs(
            ge_backend_commit=parsed['input']['backendCommit'],
            github_url=parsed['general']['githubUrl'],
            package_version=parsed['general']['version'],
            python_package_name=parsed['python']['name'],
            typescript_package_name=parsed['typescript']['name'],
        )


def fetch_spec(*, ge_backend_commit: str) -> None:
    '''
    Copy the openapi.json file from the backend repo.
    '''

    request_url = f"https://raw.githubusercontent.com/geo-engine/geoengine/{ge_backend_commit}/openapi.json"

    eprint(f"Requesting `openapi.json` at `{request_url}`….")
    with request.urlopen(request_url, timeout=10) as w, \
        open(CWD / "input/openapi.json", "w", encoding='utf-8') as f:
        f.write(w.read().decode('utf-8'))

    eprint("Stored `openapi.json`.")


def build_container():
    '''Build the patched generator image'''
    subprocess.run(
        [
            "podman", "build",
            "-t", "openapi-generator-cli:patched",
            CWD,
        ],
        check=True,
    )


def clean_dirs(*, language: Literal['python', 'typescript']):
    '''Remove some directories because they are not be overwritten by the generator.'''

    dirs_to_remove = [
        'node_modules',
        Path(language) / 'test'
    ]

    match language:
        case 'typescript':
            dirs_to_remove.extend([
                Path(language) / 'src',
                Path(language) / 'dist',
            ])
        case 'python':
            dirs_to_remove.extend([
                Path(language) / 'geoengine_openapi_client',
            ])

    for the_dir in dirs_to_remove:
        if not os.path.isdir(the_dir):
            continue
        shutil.rmtree(the_dir)


def generate_python_code(*, package_name: str, package_version: str, package_url: str):
    '''Run the generator.'''
    subprocess.run(
        [
            "podman", "run",
            "--rm",  # remove the container after running
            "-v", f"{os.getcwd()}:/local",
            f"--env-file={CWD / 'override.env'}",
            # "docker.io/openapitools/openapi-generator-cli:v7.0.1",
            "openapi-generator-cli:patched",
            "generate",
            "-i", f"{'/local' / CWD / 'input/openapi.json'}",
            "-g", "python",
            "--additional-properties=" + ",".join([
                "useOneOfDiscriminatorLookup=true",
                # "generateSourceCodeOnly=true",
                f"packageName={package_name}",
                f"packageVersion={package_version}",
                f"packageUrl={package_url}",
            ]),
            "--enable-post-process-file",
            "-o", "/local/python/",
            "--openapi-normalizer", "REF_AS_PARENT_IN_ALLOF=true",
        ],
        check=True,
    )
    shutil.rmtree(Path("python") / "docs")


def generate_typescript_code(*, npm_name: str, npm_version: str, repository_url: str):
    '''Run the generator.'''

    parsed_url = urlsplit(repository_url)
    (url_path, _url_ext) = os.path.splitext(parsed_url.path)
    (url_path, git_repo_id) = os.path.split(url_path)
    (url_path, git_user_id) = os.path.split(url_path)

    subprocess.run(
        [
            "podman", "run",
            "--rm",  # remove the container after running
            "-v", f"{os.getcwd()}:/local",
            f"--env-file={CWD / 'override.env'}",
            # "docker.io/openapitools/openapi-generator-cli:v7.0.1",
            "openapi-generator-cli:patched",
            "generate",
            "-i", f"{'/local' / CWD / 'input/openapi.json'}",
            "-g", "typescript-fetch",
            "--additional-properties=" + ",".join([
                "supportsES6=true",
                f"npmName={npm_name}",
                f"npmVersion={npm_version}",
            ]),
            "--git-host", parsed_url.netloc,
            "--git-user-id", git_user_id,
            "--git-repo-id", git_repo_id,
            "--enable-post-process-file",
            "-o", "/local/typescript/",
            "--openapi-normalizer", "REF_AS_PARENT_IN_ALLOF=true",
        ],
        check=True,
    )
    with open(Path("typescript") / ".gitignore", 'w', encoding='utf-8') as f:
        f.write('''wwwroot/*.js
node_modules
typings
''')
    shutil.rmtree(Path("typescript") / ".openapi-generator")


def main():
    '''The entry point of the program'''
    args = ProgramArgs.parse_arguments()
    config = ConfigArgs.parse_config()

    if args.fetch_spec:
        fetch_spec(ge_backend_commit=config.ge_backend_commit)

    if args.build_container:
        build_container()

    clean_dirs(language=args.language)

    if args.language == 'python':
        generate_python_code(
            package_name=config.python_package_name,
            package_version=config.package_version,
            package_url=config.github_url,
        )
    elif args.language == 'typescript':
        generate_typescript_code(
            npm_name=config.typescript_package_name,
            npm_version=config.package_version,
            repository_url=config.github_url,
        )

        # Create dist files.
        # This is necessary for using the package directly from the git repo for development.
        subprocess.run(
        [
            "podman", "run",
            "--rm",  # remove the container after running
            "-v", f"{os.getcwd()}:/local",
            "--workdir=/local/typescript", # set working directory
            "docker.io/node:lts-alpine3.20",
            "npm", "install",
        ],
        check=True,
    )
    else:
        raise RuntimeError(f'Unknown language {args.language}.')


if __name__ != '__main__':
    raise RuntimeError('This module should not be imported.')

main()
