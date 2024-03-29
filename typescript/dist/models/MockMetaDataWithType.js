"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMetaDataWithTypeToJSON = exports.MockMetaDataWithTypeFromJSONTyped = exports.MockMetaDataWithTypeFromJSON = exports.instanceOfMockMetaDataWithType = exports.MockMetaDataWithTypeTypeEnum = void 0;
const MockDatasetDataSourceLoadingInfo_1 = require("./MockDatasetDataSourceLoadingInfo");
const VectorResultDescriptor_1 = require("./VectorResultDescriptor");
/**
 * @export
 */
exports.MockMetaDataWithTypeTypeEnum = {
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
function instanceOfMockMetaDataWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "loadingInfo" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfMockMetaDataWithType = instanceOfMockMetaDataWithType;
function MockMetaDataWithTypeFromJSON(json) {
    return MockMetaDataWithTypeFromJSONTyped(json, false);
}
exports.MockMetaDataWithTypeFromJSON = MockMetaDataWithTypeFromJSON;
function MockMetaDataWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loadingInfo': (0, MockDatasetDataSourceLoadingInfo_1.MockDatasetDataSourceLoadingInfoFromJSON)(json['loadingInfo']),
        'resultDescriptor': (0, VectorResultDescriptor_1.VectorResultDescriptorFromJSON)(json['resultDescriptor']),
        'type': json['type'],
    };
}
exports.MockMetaDataWithTypeFromJSONTyped = MockMetaDataWithTypeFromJSONTyped;
function MockMetaDataWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'loadingInfo': (0, MockDatasetDataSourceLoadingInfo_1.MockDatasetDataSourceLoadingInfoToJSON)(value.loadingInfo),
        'resultDescriptor': (0, VectorResultDescriptor_1.VectorResultDescriptorToJSON)(value.resultDescriptor),
        'type': value.type,
    };
}
exports.MockMetaDataWithTypeToJSON = MockMetaDataWithTypeToJSON;
