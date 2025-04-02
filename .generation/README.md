# geoengine-openapi-client - Code Generation

Auto-generated Python Client API for Geo Engine

# Dependencies

- Python
- Podman

# Generation

From the root of the repository run:

```bash
.generation/generate.py python
```

## Dev-Mode

To fetch the OpenAPI spec from the backend, run:

```bash
wget -O .generation/input/openapi.json \
  https://raw.githubusercontent.com/geo-engine/geoengine/refs/heads/main/openapi.json
```

To run the generation in dev mode, run:

```bash
.generation/generate.py --no-spec-fetch --no-container-build python
```

This will skip the running of the container and instead use the local files.
It will also stop building the customized generator container.

## Update config.ini

To update the config.ini file, run:

```bash
.generation/update_config.py --backendCommit 1076a616369dcc33e86b422a9364ac99553a18f8
```

This will set a new backend commit hash and increment the version number.
