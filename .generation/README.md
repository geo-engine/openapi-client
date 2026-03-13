# geoengine-openapi-client - Code Generation

Auto-generated Python Client API for Geo Engine

## Dependencies

- Python
- Java Runtime

## Generation

From the root of the repository run:

```bash
just build
```

For specific languages, run:

```bash
just build-python
just build-typescript
```

## Dev-Mode

To fetch the OpenAPI spec from the backend, run:

```bash
just fetch-openapi-spec --backendCommit=1076a616369dcc33e86b422a9364ac99553a18f8
```

You can verify the OpenAPI spec with:

```bash
just lint-openapi-spec
```

## Update config.ini

To update the config.ini file, run:

```bash
just update-config --backendCommit=1076a616369dcc33e86b422a9364ac99553a18f8
```

This will set a new backend commit hash and increment the version number.

Note, that you still need to build the clients after updating the config.ini file, otherwise the generated code will not be updated. You can do this with:

```bash
just build
```
