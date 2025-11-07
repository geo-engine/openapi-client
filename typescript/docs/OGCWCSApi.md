# OGCWCSApi

All URIs are relative to *https://geoengine.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wcsCapabilitiesHandler**](OGCWCSApi.md#wcscapabilitieshandler) | **GET** /wcs/{workflow}?request&#x3D;GetCapabilities | Get WCS Capabilities |
| [**wcsDescribeCoverageHandler**](OGCWCSApi.md#wcsdescribecoveragehandler) | **GET** /wcs/{workflow}?request&#x3D;DescribeCoverage | Get WCS Coverage Description |
| [**wcsGetCoverageHandler**](OGCWCSApi.md#wcsgetcoveragehandler) | **GET** /wcs/{workflow}?request&#x3D;GetCoverage | Get WCS Coverage |



## wcsCapabilitiesHandler

> string wcsCapabilitiesHandler(workflow, service, request, version)

Get WCS Capabilities

### Example

```ts
import {
  Configuration,
  OGCWCSApi,
} from '@geoengine/openapi-client';
import type { WcsCapabilitiesHandlerRequest } from '@geoengine/openapi-client';

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
    // WcsService
    service: ...,
    // GetCapabilitiesRequest
    request: ...,
    // WcsVersion (optional)
    version: ...,
  } satisfies WcsCapabilitiesHandlerRequest;

  try {
    const data = await api.wcsCapabilitiesHandler(body);
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
| **service** | `WcsService` |  | [Defaults to `undefined`] [Enum: WCS] |
| **request** | `GetCapabilitiesRequest` |  | [Defaults to `undefined`] [Enum: GetCapabilities] |
| **version** | `WcsVersion` |  | [Optional] [Defaults to `undefined`] [Enum: 1.1.0, 1.1.1] |

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


## wcsDescribeCoverageHandler

> string wcsDescribeCoverageHandler(workflow, version, service, request, identifiers)

Get WCS Coverage Description

### Example

```ts
import {
  Configuration,
  OGCWCSApi,
} from '@geoengine/openapi-client';
import type { WcsDescribeCoverageHandlerRequest } from '@geoengine/openapi-client';

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
    // WcsVersion
    version: ...,
    // WcsService
    service: ...,
    // DescribeCoverageRequest
    request: ...,
    // string
    identifiers: <Workflow Id>,
  } satisfies WcsDescribeCoverageHandlerRequest;

  try {
    const data = await api.wcsDescribeCoverageHandler(body);
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
| **version** | `WcsVersion` |  | [Defaults to `undefined`] [Enum: 1.1.0, 1.1.1] |
| **service** | `WcsService` |  | [Defaults to `undefined`] [Enum: WCS] |
| **request** | `DescribeCoverageRequest` |  | [Defaults to `undefined`] [Enum: DescribeCoverage] |
| **identifiers** | `string` |  | [Defaults to `undefined`] |

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


## wcsGetCoverageHandler

> Blob wcsGetCoverageHandler(workflow, version, service, request, format, identifier, boundingbox, gridbasecrs, gridorigin, gridoffsets, time, resx, resy, nodatavalue)

Get WCS Coverage

### Example

```ts
import {
  Configuration,
  OGCWCSApi,
} from '@geoengine/openapi-client';
import type { WcsGetCoverageHandlerRequest } from '@geoengine/openapi-client';

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
    // WcsVersion
    version: ...,
    // WcsService
    service: ...,
    // GetCoverageRequest
    request: ...,
    // GetCoverageFormat
    format: ...,
    // string
    identifier: <Workflow Id>,
    // string
    boundingbox: -90,-180,90,180,urn:ogc:def:crs:EPSG::4326,
    // string
    gridbasecrs: urn:ogc:def:crs:EPSG::4326,
    // string (optional)
    gridorigin: 90,-180,
    // string (optional)
    gridoffsets: -0.1,0.1,
    // string (optional)
    time: time_example,
    // number (optional)
    resx: 1.2,
    // number (optional)
    resy: 1.2,
    // number (optional)
    nodatavalue: 1.2,
  } satisfies WcsGetCoverageHandlerRequest;

  try {
    const data = await api.wcsGetCoverageHandler(body);
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
| **version** | `WcsVersion` |  | [Defaults to `undefined`] [Enum: 1.1.0, 1.1.1] |
| **service** | `WcsService` |  | [Defaults to `undefined`] [Enum: WCS] |
| **request** | `GetCoverageRequest` |  | [Defaults to `undefined`] [Enum: GetCoverage] |
| **format** | `GetCoverageFormat` |  | [Defaults to `undefined`] [Enum: image/tiff] |
| **identifier** | `string` |  | [Defaults to `undefined`] |
| **boundingbox** | `string` |  | [Defaults to `undefined`] |
| **gridbasecrs** | `string` |  | [Defaults to `undefined`] |
| **gridorigin** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gridoffsets** | `string` |  | [Optional] [Defaults to `undefined`] |
| **time** | `string` |  | [Optional] [Defaults to `undefined`] |
| **resx** | `number` |  | [Optional] [Defaults to `undefined`] |
| **resy** | `number` |  | [Optional] [Defaults to `undefined`] |
| **nodatavalue** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | PNG Image |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

