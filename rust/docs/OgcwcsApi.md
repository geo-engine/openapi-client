# \OgcwcsApi

All URIs are relative to *https://geoengine.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wcs_capabilities_handler**](OgcwcsApi.md#wcs_capabilities_handler) | **GET** /wcs/{workflow}?request=GetCapabilities | Get WCS Capabilities
[**wcs_describe_coverage_handler**](OgcwcsApi.md#wcs_describe_coverage_handler) | **GET** /wcs/{workflow}?request=DescribeCoverage | Get WCS Coverage Description
[**wcs_get_coverage_handler**](OgcwcsApi.md#wcs_get_coverage_handler) | **GET** /wcs/{workflow}?request=GetCoverage | Get WCS Coverage



## wcs_capabilities_handler

> String wcs_capabilities_handler(workflow, service, request, version)
Get WCS Capabilities

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**service** | [**WcsService**](.md) |  | [required] |
**request** | [**GetCapabilitiesRequest**](.md) |  | [required] |
**version** | Option<**String**> |  |  |

### Return type

**String**

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## wcs_describe_coverage_handler

> String wcs_describe_coverage_handler(workflow, version, service, request, identifiers)
Get WCS Coverage Description

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**version** | [**WcsVersion**](.md) |  | [required] |
**service** | [**WcsService**](.md) |  | [required] |
**request** | [**DescribeCoverageRequest**](.md) |  | [required] |
**identifiers** | **String** |  | [required] |

### Return type

**String**

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## wcs_get_coverage_handler

> std::path::PathBuf wcs_get_coverage_handler(workflow, version, service, request, format, identifier, boundingbox, gridbasecrs, gridorigin, gridoffsets, time, resx, resy, nodatavalue)
Get WCS Coverage

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow** | **uuid::Uuid** | Workflow id | [required] |
**version** | [**WcsVersion**](.md) |  | [required] |
**service** | [**WcsService**](.md) |  | [required] |
**request** | [**GetCoverageRequest**](.md) |  | [required] |
**format** | [**GetCoverageFormat**](.md) |  | [required] |
**identifier** | **String** |  | [required] |
**boundingbox** | **String** |  | [required] |
**gridbasecrs** | **String** |  | [required] |
**gridorigin** | Option<**String**> |  |  |
**gridoffsets** | Option<**String**> |  |  |
**time** | Option<**String**> |  |  |
**resx** | Option<**f64**> |  |  |
**resy** | Option<**f64**> |  |  |
**nodatavalue** | Option<**f64**> |  |  |

### Return type

[**std::path::PathBuf**](std::path::PathBuf.md)

### Authorization

[session_token](../README.md#session_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

