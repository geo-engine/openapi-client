# OGCWMSApi

All URIs are relative to *http://127.0.0.1:3030/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wmsHandler**](OGCWMSApi.md#wmshandler) | **GET** /wms/{workflow} | OGC WMS endpoint |



## wmsHandler

> string wmsHandler(workflow, bbox, bgcolor, crs, elevation, exceptions, format, height, infoFormat, layer, layers, queryLayers, request, service, sld, sldBody, styles, time, transparent, version, width)

OGC WMS endpoint

### Example

```ts
import {
  Configuration,
  OGCWMSApi,
} from '@geoengine/openapi-client';
import type { WmsHandlerRequest } from '@geoengine/openapi-client';

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
    // string
    bbox: -90,-180,90,180,
    // string
    bgcolor: bgcolor_example,
    // string
    crs: EPSG:4326,
    // string
    elevation: elevation_example,
    // GetMapExceptionFormat
    exceptions: ...,
    // GetCapabilitiesFormat
    format: ...,
    // number
    height: 256,
    // string
    infoFormat: infoFormat_example,
    // string
    layer: layer_example,
    // string
    layers: <Workflow Id>,
    // string
    queryLayers: queryLayers_example,
    // 'GetCapabilities' | 'GetMap' | 'GetFeatureInfo' | 'GetStyles' | 'GetLegendGraphic' | type of WMS request
    request: request_example,
    // WmsService
    service: ...,
    // string
    sld: sld_example,
    // string
    sldBody: sldBody_example,
    // string
    styles: custom:{"type":"linearGradient","breakpoints":[{"value":1,"color":[0,0,0,255]},{"value":255,"color":[255,255,255,255]}],"noDataColor":[0,0,0,0],"defaultColor":[0,0,0,0]},
    // string
    time: 2014-04-01T12:00:00.000Z,
    // boolean
    transparent: true,
    // WmsVersion
    version: ...,
    // number
    width: 512,
  } satisfies WmsHandlerRequest;

  try {
    const data = await api.wmsHandler(body);
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
| **bgcolor** | `string` |  | [Defaults to `undefined`] |
| **crs** | `string` |  | [Defaults to `undefined`] |
| **elevation** | `string` |  | [Defaults to `undefined`] |
| **exceptions** | `GetMapExceptionFormat` |  | [Defaults to `undefined`] [Enum: XML, JSON] |
| **format** | `GetCapabilitiesFormat` |  | [Defaults to `undefined`] [Enum: text/xml] |
| **height** | `number` |  | [Defaults to `undefined`] |
| **infoFormat** | `string` |  | [Defaults to `undefined`] |
| **layer** | `string` |  | [Defaults to `undefined`] |
| **layers** | `string` |  | [Defaults to `undefined`] |
| **queryLayers** | `string` |  | [Defaults to `undefined`] |
| **request** | `GetCapabilities`, `GetMap`, `GetFeatureInfo`, `GetStyles`, `GetLegendGraphic` | type of WMS request | [Defaults to `undefined`] [Enum: GetCapabilities, GetMap, GetFeatureInfo, GetStyles, GetLegendGraphic] |
| **service** | `WmsService` |  | [Defaults to `undefined`] [Enum: WMS] |
| **sld** | `string` |  | [Defaults to `undefined`] |
| **sldBody** | `string` |  | [Defaults to `undefined`] |
| **styles** | `string` |  | [Defaults to `undefined`] |
| **time** | `string` |  | [Defaults to `undefined`] |
| **transparent** | `boolean` |  | [Defaults to `undefined`] |
| **version** | `WmsVersion` |  | [Defaults to `undefined`] [Enum: 1.3.0] |
| **width** | `number` |  | [Defaults to `undefined`] |

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

