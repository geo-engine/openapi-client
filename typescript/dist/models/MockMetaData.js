"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine API
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
exports.MockMetaDataTypeEnum = void 0;
exports.instanceOfMockMetaData = instanceOfMockMetaData;
exports.MockMetaDataFromJSON = MockMetaDataFromJSON;
exports.MockMetaDataFromJSONTyped = MockMetaDataFromJSONTyped;
exports.MockMetaDataToJSON = MockMetaDataToJSON;
exports.MockMetaDataToJSONTyped = MockMetaDataToJSONTyped;
const VectorResultDescriptor_1 = require("./VectorResultDescriptor");
const MockDatasetDataSourceLoadingInfo_1 = require("./MockDatasetDataSourceLoadingInfo");
/**
 * @export
 */
exports.MockMetaDataTypeEnum = {
    MockMetaData: 'MockMetaData'
};
/**
 * Check if a given object implements the MockMetaData interface.
 */
function instanceOfMockMetaData(value) {
    if (!('loadingInfo' in value) || value['loadingInfo'] === undefined)
        return false;
    if (!('resultDescriptor' in value) || value['resultDescriptor'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function MockMetaDataFromJSON(json) {
    return MockMetaDataFromJSONTyped(json, false);
}
function MockMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'loadingInfo': (0, MockDatasetDataSourceLoadingInfo_1.MockDatasetDataSourceLoadingInfoFromJSON)(json['loadingInfo']),
        'resultDescriptor': (0, VectorResultDescriptor_1.VectorResultDescriptorFromJSON)(json['resultDescriptor']),
        'type': json['type'],
    };
}
function MockMetaDataToJSON(json) {
    return MockMetaDataToJSONTyped(json, false);
}
function MockMetaDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'loadingInfo': (0, MockDatasetDataSourceLoadingInfo_1.MockDatasetDataSourceLoadingInfoToJSON)(value['loadingInfo']),
        'resultDescriptor': (0, VectorResultDescriptor_1.VectorResultDescriptorToJSON)(value['resultDescriptor']),
        'type': value['type'],
    };
}
