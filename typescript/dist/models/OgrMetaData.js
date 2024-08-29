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
exports.OgrMetaDataToJSON = exports.OgrMetaDataFromJSONTyped = exports.OgrMetaDataFromJSON = exports.instanceOfOgrMetaData = exports.OgrMetaDataTypeEnum = void 0;
const OgrSourceDataset_1 = require("./OgrSourceDataset");
const VectorResultDescriptor_1 = require("./VectorResultDescriptor");
/**
 * @export
 */
exports.OgrMetaDataTypeEnum = {
    OgrMetaData: 'OgrMetaData'
};
/**
 * Check if a given object implements the OgrMetaData interface.
 */
function instanceOfOgrMetaData(value) {
    let isInstance = true;
    isInstance = isInstance && "loadingInfo" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfOgrMetaData = instanceOfOgrMetaData;
function OgrMetaDataFromJSON(json) {
    return OgrMetaDataFromJSONTyped(json, false);
}
exports.OgrMetaDataFromJSON = OgrMetaDataFromJSON;
function OgrMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loadingInfo': (0, OgrSourceDataset_1.OgrSourceDatasetFromJSON)(json['loadingInfo']),
        'resultDescriptor': (0, VectorResultDescriptor_1.VectorResultDescriptorFromJSON)(json['resultDescriptor']),
        'type': json['type'],
    };
}
exports.OgrMetaDataFromJSONTyped = OgrMetaDataFromJSONTyped;
function OgrMetaDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'loadingInfo': (0, OgrSourceDataset_1.OgrSourceDatasetToJSON)(value.loadingInfo),
        'resultDescriptor': (0, VectorResultDescriptor_1.VectorResultDescriptorToJSON)(value.resultDescriptor),
        'type': value.type,
    };
}
exports.OgrMetaDataToJSON = OgrMetaDataToJSON;
