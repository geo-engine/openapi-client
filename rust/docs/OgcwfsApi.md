# \OgcwfsApi

All URIs are relative to *https://geoengine.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wfs_capabilities_handler**](OgcwfsApi.md#wfs_capabilities_handler) | **GET** /wfs/{workflow}?request=GetCapabilities | Get WFS Capabilities
[**wfs_feature_handler**](OgcwfsApi.md#wfs_feature_handler) | **GET** /wfs/{workflow}?request=GetFeature | Get WCS Features



## wfs_capabilities_handler

> String wfs_capabilities_handler(workflow, version, service, request)
Get WFS Capabilities

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**version** | Option<**String**> |  | [required] |
**service** | [**WfsService**](.md) |  | [required] |
**request** | [**GetCapabilitiesRequest**](.md) |  | [required] |

### Return type

**String**

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## wfs_feature_handler

> models::GeoJson wfs_feature_handler(workflow, service, request, type_names, bbox, version, time, srs_name, namespaces, count, sort_by, result_type, filter, property_name, query_resolution)
Get WCS Features

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**service** | [**WfsService**](.md) |  | [required] |
**request** | [**GetFeatureRequest**](.md) |  | [required] |
**type_names** | **String** |  | [required] |
**bbox** | **String** |  | [required] |
**version** | Option<**String**> |  |  |
**time** | Option<**String**> |  |  |
**srs_name** | Option<**String**> |  |  |
**namespaces** | Option<**String**> |  |  |
**count** | Option<**i64**> |  |  |
**sort_by** | Option<**String**> |  |  |
**result_type** | Option<**String**> |  |  |
**filter** | Option<**String**> |  |  |
**property_name** | Option<**String**> |  |  |
**query_resolution** | Option<**String**> | Vendor parameter for specifying a spatial query resolution |  |

### Return type

[**models::GeoJson**](GeoJson.md)

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

