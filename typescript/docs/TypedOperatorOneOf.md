
# TypedOperatorOneOf


## Properties

Name | Type
------------ | -------------
`operator` | [VectorOperator](VectorOperator.md)
`type` | string

## Example

```typescript
import type { TypedOperatorOneOf } from '@geoengine/openapi-client'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
  "type": null,
} satisfies TypedOperatorOneOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TypedOperatorOneOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


