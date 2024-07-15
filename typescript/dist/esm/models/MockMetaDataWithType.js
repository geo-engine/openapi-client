/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MockDatasetDataSourceLoadingInfoFromJSON, MockDatasetDataSourceLoadingInfoToJSON, } from './MockDatasetDataSourceLoadingInfo';
import { VectorResultDescriptorFromJSON, VectorResultDescriptorToJSON, } from './VectorResultDescriptor';
/**
 * @export
 */
export const MockMetaDataWithTypeTypeEnum = {
    MockMetaData: 'MockMetaData',
    OgrMetaData: 'OgrMetaData',
    GdalMetaDataRegular: 'GdalMetaDataRegular',
    GdalStatic: 'GdalStatic',
    GdalMetadataNetCdfCf: 'GdalMetadataNetCdfCf',
    GdalMetaDataList: 'GdalMetaDataList'
};
/**
 * Check if a given object implements the MockMetaDataWithType interface.
 */
export function instanceOfMockMetaDataWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "loadingInfo" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function MockMetaDataWithTypeFromJSON(json) {
    return MockMetaDataWithTypeFromJSONTyped(json, false);
}
export function MockMetaDataWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loadingInfo': MockDatasetDataSourceLoadingInfoFromJSON(json['loadingInfo']),
        'resultDescriptor': VectorResultDescriptorFromJSON(json['resultDescriptor']),
        'type': json['type'],
    };
}
export function MockMetaDataWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'loadingInfo': MockDatasetDataSourceLoadingInfoToJSON(value.loadingInfo),
        'resultDescriptor': VectorResultDescriptorToJSON(value.resultDescriptor),
        'type': value.type,
    };
}
