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
exports.GdalMetaDataListTypeEnum = void 0;
exports.instanceOfGdalMetaDataList = instanceOfGdalMetaDataList;
exports.GdalMetaDataListFromJSON = GdalMetaDataListFromJSON;
exports.GdalMetaDataListFromJSONTyped = GdalMetaDataListFromJSONTyped;
exports.GdalMetaDataListToJSON = GdalMetaDataListToJSON;
exports.GdalMetaDataListToJSONTyped = GdalMetaDataListToJSONTyped;
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
const GdalLoadingInfoTemporalSlice_1 = require("./GdalLoadingInfoTemporalSlice");
/**
 * @export
 */
exports.GdalMetaDataListTypeEnum = {
    GdalMetaDataList: 'GdalMetaDataList'
};
/**
 * Check if a given object implements the GdalMetaDataList interface.
 */
function instanceOfGdalMetaDataList(value) {
    if (!('params' in value) || value['params'] === undefined)
        return false;
    if (!('resultDescriptor' in value) || value['resultDescriptor'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function GdalMetaDataListFromJSON(json) {
    return GdalMetaDataListFromJSONTyped(json, false);
}
function GdalMetaDataListFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'params': (json['params'].map(GdalLoadingInfoTemporalSlice_1.GdalLoadingInfoTemporalSliceFromJSON)),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'type': json['type'],
    };
}
function GdalMetaDataListToJSON(json) {
    return GdalMetaDataListToJSONTyped(json, false);
}
function GdalMetaDataListToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'params': (value['params'].map(GdalLoadingInfoTemporalSlice_1.GdalLoadingInfoTemporalSliceToJSON)),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value['resultDescriptor']),
        'type': value['type'],
    };
}
