# \OgcwmsApi

All URIs are relative to *https://geoengine.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wms_capabilities_handler**](OgcwmsApi.md#wms_capabilities_handler) | **GET** /wms/{workflow}?request=GetCapabilities | Get WMS Capabilities
[**wms_legend_graphic_handler**](OgcwmsApi.md#wms_legend_graphic_handler) | **GET** /wms/{workflow}?request=GetLegendGraphic | Get WMS Legend Graphic
[**wms_map_handler**](OgcwmsApi.md#wms_map_handler) | **GET** /wms/{workflow}?request=GetMap | Get WMS Map



## wms_capabilities_handler

> String wms_capabilities_handler(workflow, version, service, request, format)
Get WMS Capabilities

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**version** | Option<**String**> |  | [required] |
**service** | [**WmsService**](.md) |  | [required] |
**request** | [**GetCapabilitiesRequest**](.md) |  | [required] |
**format** | Option<**String**> |  | [required] |

### Return type

**String**

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## wms_legend_graphic_handler

> wms_legend_graphic_handler(workflow, version, service, request, layer)
Get WMS Legend Graphic

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**version** | [**WmsVersion**](.md) |  | [required] |
**service** | [**WmsService**](.md) |  | [required] |
**request** | [**GetLegendGraphicRequest**](.md) |  | [required] |
**layer** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## wms_map_handler

> std::path::PathBuf wms_map_handler(workflow, version, service, request, width, height, bbox, format, layers, styles, crs, time, transparent, bgcolor, sld, sld_body, elevation, exceptions)
Get WMS Map

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**version** | [**WmsVersion**](.md) |  | [required] |
**service** | [**WmsService**](.md) |  | [required] |
**request** | [**GetMapRequest**](.md) |  | [required] |
**width** | **i32** |  | [required] |
**height** | **i32** |  | [required] |
**bbox** | **String** |  | [required] |
**format** | [**GetMapFormat**](.md) |  | [required] |
**layers** | **String** |  | [required] |
**styles** | **String** |  | [required] |
**crs** | Option<**String**> |  |  |
**time** | Option<**String**> |  |  |
**transparent** | Option<**bool**> |  |  |
**bgcolor** | Option<**String**> |  |  |
**sld** | Option<**String**> |  |  |
**sld_body** | Option<**String**> |  |  |
**elevation** | Option<**String**> |  |  |
**exceptions** | Option<**String**> |  |  |

### Return type

[**std::path::PathBuf**](std::path::PathBuf.md)

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

