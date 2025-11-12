
# RasterResultDescriptor

A `ResultDescriptor` for raster queries

## Properties

Name | Type
------------ | -------------
`bands` | [Array&lt;RasterBandDescriptor&gt;](RasterBandDescriptor.md)
`bbox` | [SpatialPartition2D](SpatialPartition2D.md)
`dataType` | [RasterDataType](RasterDataType.md)
`resolution` | [SpatialResolution](SpatialResolution.md)
`spatialReference` | string
`time` | [TimeInterval](TimeInterval.md)

## Example

```typescript
import type { RasterResultDescriptor } from '@geoengine/openapi-client'

// TODO: Update the object below with actual values
const example = {
  "bands": null,
  "bbox": null,
  "dataType": null,
  "resolution": null,
  "spatialReference": null,
  "time": null,
} satisfies RasterResultDescriptor

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RasterResultDescriptor
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


