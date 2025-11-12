
# StacBand


## Properties

Name | Type
------------ | -------------
`dataType` | [RasterDataType](RasterDataType.md)
`name` | string
`noDataValue` | number

## Example

```typescript
import type { StacBand } from '@geoengine/openapi-client'

// TODO: Update the object below with actual values
const example = {
  "dataType": null,
  "name": null,
  "noDataValue": null,
} satisfies StacBand

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StacBand
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


