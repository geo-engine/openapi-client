# OpenApi Client CLI

OPENAPI_GENERATOR_CLI := "npx @openapitools/openapi-generator-cli --openapitools .generation/openapitools.json"

_default:
    @just --list

# Clear the terminal before executing a command. Does not fail in a CI.
_clear:
    @-clear


# Build all API clients by executing the build steps for each language.
[group('build')]
build: _clear \
    _build-python-preprocess _build-rust-preprocess _build-typescript-preprocess \
    _build_call \
    _build-python-postprocess _build-rust-postprocess _build-typescript-postprocess

_build_call generator="":
    {{ OPENAPI_GENERATOR_CLI }} generate {{ if generator == "" { "" } else { "--generator-key " + generator } }}

# Build the API clients for Python by generating code with the OpenAPI Generator and applying post-processing steps.
[group('build')]
build-python: _clear _build-python-preprocess (_build_call "python") _build-python-postprocess

# Remove some directories because they are not be overwritten by the generator.
_build-python-preprocess:
    rm -rf \
        python/geoengine_openapi_client \
        python/.mypy_cache \
        python/test \
        python/diffs

_build-python-postprocess:
    .generation/post-process/python.py
    rm -rf \
        python/docs

# Build the API clients for TypeScript by generating code with the OpenAPI Generator and applying post-processing steps. Also install npm dependencies and set up .gitignore.
[group('build')]
build-typescript: _clear (_build_call "typescript") _build-typescript-postprocess

# Remove some directories because they are not be overwritten by the generator.
_build-typescript-preprocess:
    rm -rf \
        typescript/src \
        typescript/dist \
        typescript/node_modules \
        typescript/diffs

_build-typescript-postprocess:
    .generation/post-process/typescript.py
    echo "wwwroot/*.js" > typescript/.gitignore
    echo "node_modules" > typescript/.gitignore
    echo "typings" > typescript/.gitignore
    cd typescript && npm install
    rm \
        typescript/.openapi-generator/FILES \
        package-lock.json

# Build the API clients for Rust by generating code with the OpenAPI Generator and applying post-processing steps.
[group('build')]
build-rust: _clear _build-rust-preprocess (_build_call "rust") _build-rust-postprocess

_build-rust-preprocess:
    rm -rf \
        rust/diffs

_build-rust-postprocess:
    .generation/post-process/rust.py

[group('config')]
lint-openapi-spec: _clear
    {{ OPENAPI_GENERATOR_CLI }} validate \
        -i .generation/input/openapi.json \
        --recommend

# Generate the OpenAPI Generator configuration files from the config.ini.
[group('config'), script("python3")]
update-generator-configs:
    import configparser
    import json

    config = configparser.ConfigParser()
    config.optionxform = str  # do not convert keys to lowercase
    config.read('.generation/config.ini')

    with open('.generation/openapitools.json', 'r', encoding='utf-8') as f:
        generator_config = json.load(f)

    spaces = generator_config['spaces']

    generators = generator_config['generator-cli']['generators']
    for generator in ['typescript', 'python', 'rust']:
        generators[generator]['gitHost'] = config['git']['host']
        generators[generator]['gitUserId'] = config['git']['user']
        generators[generator]['gitRepoId'] = config['git']['repo']

    repository_url = f"https://{config['git']['host']}/{config['git']['user']}/{config['git']['repo']}"

    generators['typescript']['additionalProperties']['npmVersion'] = config['general']['version']

    generators['python']['additionalProperties']['packageVersion'] = config['general']['version']
    generators['python']['additionalProperties']['packageUrl'] = repository_url

    generators['rust']['additionalProperties']['packageVersion'] = config['general']['version']
    generators['rust']['additionalProperties']['homePageUrl'] = config['general']['homepageUrl']
    generators['rust']['additionalProperties']['repositoryUrl'] = repository_url

    with open('.generation/openapitools.json', 'w', encoding='utf-8') as f:
        json.dump(generator_config, f, indent=spaces)

    print("Generated OpenAPI Generator configuration for TypeScript, Python, and Rust.")

# Update the backend commit in the config.ini and increment the version.
[group('config')]
[arg("backendCommit", long="backendCommit", help="The commit hash of the backend for which to fetch the OpenAPI specification.")]
update-config backendCommit: _clear (_update-config backendCommit) update-generator-configs (fetch-openapi-spec backendCommit) lint-openapi-spec

[script("python3")]
_update-config backendCommit:
    import configparser

    INI_FILE = '.generation/config.ini'

    config = configparser.ConfigParser()
    config.optionxform = str  # do not convert keys to lowercase
    config.read(INI_FILE)

    config['input']['backendCommit'] = "{{ backendCommit }}"

    # retrieve version
    version_digits: list[int] = [
        int(digit) for digit in config['general']['version'].split('.')]
    # increment last version digit
    version_digits[-1] += 1
    # write back
    config['general']['version'] = '.'.join(
        str(digit) for digit in version_digits)

    with open(INI_FILE, 'w', encoding='utf-8') as f:
        config.write(f)

    print(f"Updated {INI_FILE} with backendCommit={config['input']['backendCommit']} and version={config['general']['version']}.")

# Fetch the OpenAPI specification for the given backend commit from the Geo Engine repository and save it to the input directory.
[group('config')]
[arg("backendCommit", long="backendCommit", help="The commit hash of the backend for which to fetch the OpenAPI specification.")]
fetch-openapi-spec backendCommit:
    @echo "Fetching OpenAPI specification for backend commit {{ backendCommit }}…"
    curl \
        -o .generation/input/openapi.json \
        https://raw.githubusercontent.com/geo-engine/geoengine/{{ backendCommit }}/openapi.json

# Check if there are uncommitted changes in the git repository. If there are, print an error message and exit with a non-zero status code. Otherwise, print a success message.
[group('CI')]
check-no-changes-in-git-repo:
    #!/usr/bin/env bash
    if [ -n "$(git status --porcelain)" ]; then
      echo "Error: Uncommitted changes found in git repository."
      git status --porcelain
      exit 1
    else
      echo "No uncommitted changes found in git repository."
    fi

# [group('test')]
# [working-directory("python")]
# test-python:
#     python3 -m venv .venv && source .venv/bin/activate || source .venv/bin/activate
#     pip install -e .[dev]
#     pytest

[group('test')]
[working-directory("rust")]
test-rust:
    cargo build
    cargo test

[group('test')]
[working-directory("typescript")]
test-typescript:
    npm install
    npm run build