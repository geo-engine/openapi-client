# OGCWMSApi

All URIs are relative to *https://geoengine.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wmsCapabilitiesHandler**](OGCWMSApi.md#wmscapabilitieshandler) | **GET** /wms/{workflow}?request&#x3D;GetCapabilities | Get WMS Capabilities |
| [**wmsLegendGraphicHandler**](OGCWMSApi.md#wmslegendgraphichandler) | **GET** /wms/{workflow}?request&#x3D;GetLegendGraphic | Get WMS Legend Graphic |
| [**wmsMapHandler**](OGCWMSApi.md#wmsmaphandler) | **GET** /wms/{workflow}?request&#x3D;GetMap | Get WMS Map |



## wmsCapabilitiesHandler

> string wmsCapabilitiesHandler(workflow, version, service, request, format)

Get WMS Capabilities

### Example

```ts
import {
  Configuration,
  OGCWMSApi,
} from '@geoengine/openapi-client';
import type { WmsCapabilitiesHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCWMSApi(config);

  const body = {
    // string | Workflow id
    workflow: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WmsVersion
    version: ...,
    // WmsService
    service: ...,
    // GetCapabilitiesRequest
    request: ...,
    // GetCapabilitiesFormat
    format: ...,
  } satisfies WmsCapabilitiesHandlerRequest;

  try {
    const data = await api.wmsCapabilitiesHandler(body);
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
| **version** | `WmsVersion` |  | [Defaults to `undefined`] [Enum: 1.3.0] |
| **service** | `WmsService` |  | [Defaults to `undefined`] [Enum: WMS] |
| **request** | `GetCapabilitiesRequest` |  | [Defaults to `undefined`] [Enum: GetCapabilities] |
| **format** | `GetCapabilitiesFormat` |  | [Defaults to `undefined`] [Enum: text/xml] |

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


## wmsLegendGraphicHandler

> wmsLegendGraphicHandler(workflow, version, service, request, layer)

Get WMS Legend Graphic

### Example

```ts
import {
  Configuration,
  OGCWMSApi,
} from '@geoengine/openapi-client';
import type { WmsLegendGraphicHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCWMSApi(config);

  const body = {
    // string | Workflow id
    workflow: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WmsVersion
    version: ...,
    // WmsService
    service: ...,
    // GetLegendGraphicRequest
    request: ...,
    // string
    layer: <Workflow Id>,
  } satisfies WmsLegendGraphicHandlerRequest;

  try {
    const data = await api.wmsLegendGraphicHandler(body);
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
| **version** | `WmsVersion` |  | [Defaults to `undefined`] [Enum: 1.3.0] |
| **service** | `WmsService` |  | [Defaults to `undefined`] [Enum: WMS] |
| **request** | `GetLegendGraphicRequest` |  | [Defaults to `undefined`] [Enum: GetLegendGraphic] |
| **layer** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | Not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## wmsMapHandler

> Blob wmsMapHandler(workflow, version, service, request, width, height, bbox, format, layers, styles, crs, time, transparent, bgcolor, sld, sldBody, elevation, exceptions)

Get WMS Map

### Example

```ts
import {
  Configuration,
  OGCWMSApi,
} from '@geoengine/openapi-client';
import type { WmsMapHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCWMSApi(config);

  const body = {
    // string | Workflow id
    workflow: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WmsVersion
    version: ...,
    // WmsService
    service: ...,
    // GetMapRequest
    request: ...,
    // number
    width: 512,
    // number
    height: 256,
    // string
    bbox: -90,-180,90,180,
    // GetMapFormat
    format: ...,
    // string
    layers: <Workflow Id>,
    // string
    styles: custom:{"type":"linearGradient","breakpoints":[{"value":1,"color":[0,0,0,255]},{"value":255,"color":[255,255,255,255]}],"noDataColor":[0,0,0,0],"defaultColor":[0,0,0,0]},
    // string (optional)
    crs: EPSG:4326,
    // string (optional)
    time: 2014-04-01T12:00:00.000Z,
    // boolean (optional)
    transparent: true,
    // string (optional)
    bgcolor: bgcolor_example,
    // string (optional)
    sld: sld_example,
    // string (optional)
    sldBody: sldBody_example,
    // string (optional)
    elevation: elevation_example,
    // GetMapExceptionFormat (optional)
    exceptions: ...,
  } satisfies WmsMapHandlerRequest;

  try {
    const data = await api.wmsMapHandler(body);
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
| **version** | `WmsVersion` |  | [Defaults to `undefined`] [Enum: 1.3.0] |
| **service** | `WmsService` |  | [Defaults to `undefined`] [Enum: WMS] |
| **request** | `GetMapRequest` |  | [Defaults to `undefined`] [Enum: GetMap] |
| **width** | `number` |  | [Defaults to `undefined`] |
| **height** | `number` |  | [Defaults to `undefined`] |
| **bbox** | `string` |  | [Defaults to `undefined`] |
| **format** | `GetMapFormat` |  | [Defaults to `undefined`] [Enum: image/png] |
| **layers** | `string` |  | [Defaults to `undefined`] |
| **styles** | `string` |  | [Defaults to `undefined`] |
| **crs** | `string` |  | [Optional] [Defaults to `undefined`] |
| **time** | `string` |  | [Optional] [Defaults to `undefined`] |
| **transparent** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **bgcolor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sld** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sldBody** | `string` |  | [Optional] [Defaults to `undefined`] |
| **elevation** | `string` |  | [Optional] [Defaults to `undefined`] |
| **exceptions** | `GetMapExceptionFormat` |  | [Optional] [Defaults to `undefined`] [Enum: XML, JSON] |

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

