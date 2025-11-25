# OGCWCSApi

All URIs are relative to *http://127.0.0.1:3030/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wcsHandler**](OGCWCSApi.md#wcshandler) | **GET** /wcs/{workflow} | OGC WCS endpoint |



## wcsHandler

> string wcsHandler(workflow, boundingbox, format, gridbasecrs, gridoffsets, gridorigin, identifier, identifiers, nodatavalue, request, resx, resy, service, time, version)

OGC WCS endpoint

### Example

```ts
import {
  Configuration,
  OGCWCSApi,
} from '@geoengine/openapi-client';
import type { WcsHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCWCSApi(config);

  const body = {
    // string | Workflow id
    workflow: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    boundingbox: -90,-180,90,180,urn:ogc:def:crs:EPSG::4326,
    // GetCoverageFormat
    format: ...,
    // string
    gridbasecrs: urn:ogc:def:crs:EPSG::4326,
    // string
    gridoffsets: -0.1,0.1,
    // string
    gridorigin: 90,-180,
    // string
    identifier: <Workflow Id>,
    // string
    identifiers: <Workflow Id>,
    // number
    nodatavalue: 1.2,
    // 'GetCapabilGetCapabilitiesities' | 'DescribeCoverage' | 'GetCoverage' | type of WMS request
    request: request_example,
    // number
    resx: 1.2,
    // number
    resy: 1.2,
    // WcsService
    service: ...,
    // string
    time: time_example,
    // WcsVersion
    version: ...,
  } satisfies WcsHandlerRequest;

  try {
    const data = await api.wcsHandler(body);
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
| **boundingbox** | `string` |  | [Defaults to `undefined`] |
| **format** | `GetCoverageFormat` |  | [Defaults to `undefined`] [Enum: image/tiff] |
| **gridbasecrs** | `string` |  | [Defaults to `undefined`] |
| **gridoffsets** | `string` |  | [Defaults to `undefined`] |
| **gridorigin** | `string` |  | [Defaults to `undefined`] |
| **identifier** | `string` |  | [Defaults to `undefined`] |
| **identifiers** | `string` |  | [Defaults to `undefined`] |
| **nodatavalue** | `number` |  | [Defaults to `undefined`] |
| **request** | `GetCapabilGetCapabilitiesities`, `DescribeCoverage`, `GetCoverage` | type of WMS request | [Defaults to `undefined`] [Enum: GetCapabilGetCapabilitiesities, DescribeCoverage, GetCoverage] |
| **resx** | `number` |  | [Defaults to `undefined`] |
| **resy** | `number` |  | [Defaults to `undefined`] |
| **service** | `WcsService` |  | [Defaults to `undefined`] [Enum: WCS] |
| **time** | `string` |  | [Defaults to `undefined`] |
| **version** | `WcsVersion` |  | [Defaults to `undefined`] [Enum: 1.1.0, 1.1.1] |

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

