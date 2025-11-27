# OGCApi

All URIs are relative to *http://127.0.0.1:3030/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**wcsHandler**](OGCApi.md#wcshandler) | **GET** /wcs/{workflow} | OGC WCS endpoint |
| [**wfsHandler**](OGCApi.md#wfshandler) | **GET** /wfs/{workflow} | OGC WFS endpoint |
| [**wmsHandler**](OGCApi.md#wmshandler) | **GET** /wms/{workflow} | OGC WMS endpoint |



## wcsHandler

> string wcsHandler(workflow, boundingbox, format, gridbasecrs, identifier, identifiers, request, service, gridoffsets, gridorigin, nodatavalue, resx, resy, time, version)

OGC WCS endpoint

### Example

```ts
import {
  Configuration,
  OGCApi,
} from '@geoengine/openapi-client';
import type { WcsHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCApi(config);

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
    identifier: <Workflow Id>,
    // string
    identifiers: <Workflow Id>,
    // 'GetCapabilGetCapabilitiesities' | 'DescribeCoverage' | 'GetCoverage' | type of WMS request
    request: request_example,
    // WcsService
    service: ...,
    // string (optional)
    gridoffsets: -0.1,0.1,
    // string (optional)
    gridorigin: 90,-180,
    // number (optional)
    nodatavalue: 1.2,
    // number (optional)
    resx: 1.2,
    // number (optional)
    resy: 1.2,
    // string (optional)
    time: time_example,
    // WcsVersion (optional)
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
| **identifier** | `string` |  | [Defaults to `undefined`] |
| **identifiers** | `string` |  | [Defaults to `undefined`] |
| **request** | `GetCapabilGetCapabilitiesities`, `DescribeCoverage`, `GetCoverage` | type of WMS request | [Defaults to `undefined`] [Enum: GetCapabilGetCapabilitiesities, DescribeCoverage, GetCoverage] |
| **service** | `WcsService` |  | [Defaults to `undefined`] [Enum: WCS] |
| **gridoffsets** | `string` |  | [Optional] [Defaults to `undefined`] |
| **gridorigin** | `string` |  | [Optional] [Defaults to `undefined`] |
| **nodatavalue** | `number` |  | [Optional] [Defaults to `undefined`] |
| **resx** | `number` |  | [Optional] [Defaults to `undefined`] |
| **resy** | `number` |  | [Optional] [Defaults to `undefined`] |
| **time** | `string` |  | [Optional] [Defaults to `undefined`] |
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


## wfsHandler

> GeoJson wfsHandler(workflow, bbox, request, service, typeNames, count, filter, namespaces, propertyName, queryResolution, resultType, sortBy, srsName, time, version)

OGC WFS endpoint

### Example

```ts
import {
  Configuration,
  OGCApi,
} from '@geoengine/openapi-client';
import type { WfsHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCApi(config);

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


## wmsHandler

> string wmsHandler(workflow, bbox, height, layer, layers, queryLayers, request, service, styles, width, bgcolor, crs, elevation, exceptions, format, infoFormat, sld, sldBody, time, transparent, version)

OGC WMS endpoint

### Example

```ts
import {
  Configuration,
  OGCApi,
} from '@geoengine/openapi-client';
import type { WmsHandlerRequest } from '@geoengine/openapi-client';

async function example() {
  console.log("🚀 Testing @geoengine/openapi-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: session_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OGCApi(config);

  const body = {
    // string | Workflow id
    workflow: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    bbox: -90,-180,90,180,
    // number
    height: 256,
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
    styles: custom:{"type":"linearGradient","breakpoints":[{"value":1,"color":[0,0,0,255]},{"value":255,"color":[255,255,255,255]}],"noDataColor":[0,0,0,0],"defaultColor":[0,0,0,0]},
    // number
    width: 512,
    // string (optional)
    bgcolor: bgcolor_example,
    // string (optional)
    crs: EPSG:4326,
    // string (optional)
    elevation: elevation_example,
    // GetMapExceptionFormat (optional)
    exceptions: ...,
    // GetCapabilitiesFormat (optional)
    format: ...,
    // string (optional)
    infoFormat: infoFormat_example,
    // string (optional)
    sld: sld_example,
    // string (optional)
    sldBody: sldBody_example,
    // string (optional)
    time: 2014-04-01T12:00:00.000Z,
    // boolean (optional)
    transparent: true,
    // WmsVersion (optional)
    version: ...,
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
| **height** | `number` |  | [Defaults to `undefined`] |
| **layer** | `string` |  | [Defaults to `undefined`] |
| **layers** | `string` |  | [Defaults to `undefined`] |
| **queryLayers** | `string` |  | [Defaults to `undefined`] |
| **request** | `GetCapabilities`, `GetMap`, `GetFeatureInfo`, `GetStyles`, `GetLegendGraphic` | type of WMS request | [Defaults to `undefined`] [Enum: GetCapabilities, GetMap, GetFeatureInfo, GetStyles, GetLegendGraphic] |
| **service** | `WmsService` |  | [Defaults to `undefined`] [Enum: WMS] |
| **styles** | `string` |  | [Defaults to `undefined`] |
| **width** | `number` |  | [Defaults to `undefined`] |
| **bgcolor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **crs** | `string` |  | [Optional] [Defaults to `undefined`] |
| **elevation** | `string` |  | [Optional] [Defaults to `undefined`] |
| **exceptions** | `GetMapExceptionFormat` |  | [Optional] [Defaults to `undefined`] [Enum: XML, JSON] |
| **format** | `GetCapabilitiesFormat` |  | [Optional] [Defaults to `undefined`] [Enum: text/xml] |
| **infoFormat** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sld** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sldBody** | `string` |  | [Optional] [Defaults to `undefined`] |
| **time** | `string` |  | [Optional] [Defaults to `undefined`] |
| **transparent** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **version** | `WmsVersion` |  | [Optional] [Defaults to `undefined`] [Enum: 1.3.0] |

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

