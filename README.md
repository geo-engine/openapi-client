# Geo Engine OpenAPI Client

This project contains two packages:

- a Python package located in the [`python`](python) directory,
- and a TypeScript package located in the [`typescript`](typescript) directory.

## Code Generation

For information on how to generate the packages out of an OpenAPI spec, please refer to the [README](.generation/README.md) file in the [`.generation`](.generation) directory.

## Usage during Development

Create a branch (`<BRANCH>`) with the changes you want to test and push it to the repository.

### Python

Update `setup.cfg` in the root directory of the repository to point to the branch you want to test.

```ini
…

install_requires =
    geoengine-openapi-client @ git+https://github.com/geo-engine/openapi-client@<BRANCH>#subdirectory=python # TODO: update before merging

…
```

### TypeScript

Update `package.json` in the root directory of the repository to point to the branch you want to test.

```json
…

{
  "dependencies": {
    "@geoengine/openapi-client": "git://github.com/geo-engine/openapi-client.git#<BRANCH>",
    …
  }
}

…
```


## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details
