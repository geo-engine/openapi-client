# OGCWFSApi

All URIs are relative to *http://127.0.0.1:3030/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wfsHandler**](OGCWFSApi.md#wfshandler) | **GET** /wfs/{workflow} | OGC WFS endpoint |



## wfsHandler

> GeoJson wfsHandler(workflow, bbox, request, service, typeNames, count, filter, namespaces, propertyName, queryResolution, resultType, sortBy, srsName, time, version)

OGC WFS endpoint

### Example

```ts
import {
  Configuration,
  OGCWFSApi,
} from '@geoengine/openapi-client';
import type { WfsHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCWFSApi(config);

  const body = {
    // string | Workflow id
    workflow: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    bbox: -90,-180,90,180,
    // 'GetCapabilities' | 'GetFeature' | type of WFS request
    request: request_example,
    // WfsService
    service: ...,
    // string
    typeNames: <Workflow Id>,
    // number (optional)
    count: 789,
    // string (optional)
    filter: filter_example,
    // string (optional)
    namespaces: namespaces_example,
    // string (optional)
    propertyName: propertyName_example,
    // string | Vendor parameter for specifying a spatial query resolution (optional)
    queryResolution: queryResolution_example,
    // string (optional)
    resultType: resultType_example,
    // string (optional)
    sortBy: sortBy_example,
    // string (optional)
    srsName: EPSG:4326,
    // string (optional)
    time: 2014-04-01T12:00:00.000Z,
    // WfsVersion (optional)
    version: ...,
  } satisfies WfsHandlerRequest;

  try {
    const data = await api.wfsHandler(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflow** | `string` | Workflow id | [Defaults to `undefined`] |
| **bbox** | `string` |  | [Defaults to `undefined`] |
| **request** | `GetCapabilities`, `GetFeature` | type of WFS request | [Defaults to `undefined`] [Enum: GetCapabilities, GetFeature] |
| **service** | `WfsService` |  | [Defaults to `undefined`] [Enum: WFS] |
| **typeNames** | `string` |  | [Defaults to `undefined`] |
| **count** | `number` |  | [Optional] [Defaults to `undefined`] |
| **filter** | `string` |  | [Optional] [Defaults to `undefined`] |
| **namespaces** | `string` |  | [Optional] [Defaults to `undefined`] |
| **propertyName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **queryResolution** | `string` | Vendor parameter for specifying a spatial query resolution | [Optional] [Defaults to `undefined`] |
| **resultType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **srsName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **time** | `string` |  | [Optional] [Defaults to `undefined`] |
| **version** | `WfsVersion` |  | [Optional] [Defaults to `undefined`] [Enum: 2.0.0] |

### Return type

[**GeoJson**](GeoJson.md)

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

