
# DatasetTile


## Properties

Name | Type
------------ | -------------
`band` | number
`id` | string
`params` | [GdalDatasetParameters](GdalDatasetParameters.md)
`spatialPartition` | [SpatialPartition2D](SpatialPartition2D.md)
`time` | [TimeInterval](TimeInterval.md)
`zIndex` | number

## Example

```typescript
import type { DatasetTile } from '@geoengine/openapi-client'

// TODO: Update the object below with actual values
const example = {
  "band": null,
  "id": null,
  "params": null,
  "spatialPartition": null,
  "time": null,
  "zIndex": null,
} satisfies DatasetTile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DatasetTile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


