# OGCWFSApi

All URIs are relative to *https://geoengine.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wfsCapabilitiesHandler**](OGCWFSApi.md#wfscapabilitieshandler) | **GET** /wfs/{workflow}?request&#x3D;GetCapabilities | Get WFS Capabilities |
| [**wfsFeatureHandler**](OGCWFSApi.md#wfsfeaturehandler) | **GET** /wfs/{workflow}?request&#x3D;GetFeature | Get WCS Features |



## wfsCapabilitiesHandler

> string wfsCapabilitiesHandler(workflow, version, service, request)

Get WFS Capabilities

### Example

```ts
import {
  Configuration,
  OGCWFSApi,
} from '@geoengine/openapi-client';
import type { WfsCapabilitiesHandlerRequest } from '@geoengine/openapi-client';

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
    // WfsVersion
    version: ...,
    // WfsService
    service: ...,
    // GetCapabilitiesRequest
    request: ...,
  } satisfies WfsCapabilitiesHandlerRequest;

  try {
    const data = await api.wfsCapabilitiesHandler(body);
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
| **version** | `WfsVersion` |  | [Defaults to `undefined`] [Enum: 2.0.0] |
| **service** | `WfsService` |  | [Defaults to `undefined`] [Enum: WFS] |
| **request** | `GetCapabilitiesRequest` |  | [Defaults to `undefined`] [Enum: GetCapabilities] |

### Return type

**string**

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/xml`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## wfsFeatureHandler

> GeoJson wfsFeatureHandler(workflow, service, request, typeNames, bbox, version, time, srsName, namespaces, count, sortBy, resultType, filter, propertyName, queryResolution)

Get WCS Features

### Example

```ts
import {
  Configuration,
  OGCWFSApi,
} from '@geoengine/openapi-client';
import type { WfsFeatureHandlerRequest } from '@geoengine/openapi-client';

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
    // WfsService
    service: ...,
    // GetFeatureRequest
    request: ...,
    // string
    typeNames: <Workflow Id>,
    // string
    bbox: -90,-180,90,180,
    // WfsVersion (optional)
    version: ...,
    // string (optional)
    time: 2014-04-01T12:00:00.000Z,
    // string (optional)
    srsName: EPSG:4326,
    // string (optional)
    namespaces: namespaces_example,
    // number (optional)
    count: 789,
    // string (optional)
    sortBy: sortBy_example,
    // string (optional)
    resultType: resultType_example,
    // string (optional)
    filter: filter_example,
    // string (optional)
    propertyName: propertyName_example,
    // string | Vendor parameter for specifying a spatial query resolution (optional)
    queryResolution: queryResolution_example,
  } satisfies WfsFeatureHandlerRequest;

  try {
    const data = await api.wfsFeatureHandler(body);
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
| **service** | `WfsService` |  | [Defaults to `undefined`] [Enum: WFS] |
| **request** | `GetFeatureRequest` |  | [Defaults to `undefined`] [Enum: GetFeature] |
| **typeNames** | `string` |  | [Defaults to `undefined`] |
| **bbox** | `string` |  | [Defaults to `undefined`] |
| **version** | `WfsVersion` |  | [Optional] [Defaults to `undefined`] [Enum: 2.0.0] |
| **time** | `string` |  | [Optional] [Defaults to `undefined`] |
| **srsName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **namespaces** | `string` |  | [Optional] [Defaults to `undefined`] |
| **count** | `number` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **resultType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **filter** | `string` |  | [Optional] [Defaults to `undefined`] |
| **propertyName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **queryResolution** | `string` | Vendor parameter for specifying a spatial query resolution | [Optional] [Defaults to `undefined`] |

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

