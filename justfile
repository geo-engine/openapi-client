# OpenApi Client CLI

OPENAPI_GENERATOR_PACKAGE := "@openapitools/openapi-generator-cli@2.28.3"

_default:
    @just --list

# Clear the terminal before executing a command. Does not fail in a CI.
_clear:
    @-clear

# Build all API clients by executing the build steps for each language.
[group('build')]
build: _clear _build-python _build-typescript

# Build the API clients for Python by generating code with the OpenAPI Generator and applying post-processing steps.
[group('build')]
build-python: _clear _build-python

_build-python: _clean_dirs_python
    npx {{ OPENAPI_GENERATOR_PACKAGE }} batch .generation/config/python.yaml
    .generation/post-process/python.py
    rm -rf \
        python/docs \
        openapitools.json

# Build the API clients for TypeScript by generating code with the OpenAPI Generator and applying post-processing steps. Also install npm dependencies and set up .gitignore.
[group('build')]
build-typescript: _clear _build-typescript

_build-typescript: _clean_dirs_typescript
    npx {{ OPENAPI_GENERATOR_PACKAGE }} batch .generation/config/typescript.yaml
    .generation/post-process/typescript.py
    echo "wwwroot/*.js" > typescript/.gitignore
    echo "node_modules" > typescript/.gitignore
    echo "typings" > typescript/.gitignore
    cd typescript && npm install
    rm \
        typescript/.openapi-generator/FILES \
        openapitools.json \
        package-lock.json

[group('config')]
lint-openapi-spec: _clear
    npx {{ OPENAPI_GENERATOR_PACKAGE }} validate -i .generation/input/openapi.json --recommend

# Remove some directories because they are not be overwritten by the generator.
[arg('language', pattern='python|typescript')]
_clean_dirs language:
    @echo "Cleaning {{ language }} directory…"

    @just _clean_dirs_{{ language }}

# Remove some directories because they are not be overwritten by the generator.
_clean_dirs_python:
    rm -rf \
        python/geoengine_openapi_client \
        python/.mypy_cache \
        python/test

# Remove some directories because they are not be overwritten by the generator.
_clean_dirs_typescript:
    rm -rf \
        typescript/src \
        typescript/dist \
        typescript/node_modules

# Generate the OpenAPI Generator configuration files from the config.ini.
[group('config'), script("python3")]
generate-configs:
    from textwrap import dedent
    import configparser

    config = configparser.ConfigParser()
    config.optionxform = str  # do not convert keys to lowercase
    config.read('.generation/config.ini')

    typescript_config = dedent(f"""
        inputSpec: .generation/input/openapi.json
        outputDir: typescript
        generatorName: typescript-fetch
        gitHost: {config['git']['host']}
        gitUserId: {config['git']['user']}
        gitRepoId: {config['git']['repo']}
        additionalProperties:
            supportsES6: true
            npmName: "{config['typescript']['name']}"
            npmVersion: {config['general']['version']}
        openapiNormalizer:
            REF_AS_PARENT_IN_ALLOF: true
    """).strip()

    python_config = dedent(f"""
        inputSpec: .generation/input/openapi.json
        outputDir: python
        generatorName: python
        gitHost: {config['git']['host']}
        gitUserId: {config['git']['user']}
        gitRepoId: {config['git']['repo']}
        additionalProperties:
            useOneOfDiscriminatorLookup: true
            packageName: "{config['python']['name']}"
            packageVersion: {config['general']['version']}
            packageUrl: "https://{config['git']['host']}/{config['git']['user']}/{config['git']['repo']}"
        openapiNormalizer:
            REF_AS_PARENT_IN_ALLOF: true
    """).strip()

    with open(".generation/config/typescript.yaml", "w") as f:
        f.write(typescript_config)
    
    with open(".generation/config/python.yaml", "w") as f:
        f.write(python_config)

    print("Generated OpenAPI Generator configuration files for TypeScript and Python.")

# Update the backend commit in the config.ini and increment the version.
[group('config')]
update-config backendCommit: _clear (_update-config backendCommit) generate-configs (fetch-openapi-spec backendCommit) lint-openapi-spec

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