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
exports.GdalMetaDataListToJSON = exports.GdalMetaDataListFromJSONTyped = exports.GdalMetaDataListFromJSON = exports.instanceOfGdalMetaDataList = exports.GdalMetaDataListTypeEnum = void 0;
const GdalLoadingInfoTemporalSlice_1 = require("./GdalLoadingInfoTemporalSlice");
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
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
    let isInstance = true;
    isInstance = isInstance && "params" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfGdalMetaDataList = instanceOfGdalMetaDataList;
function GdalMetaDataListFromJSON(json) {
    return GdalMetaDataListFromJSONTyped(json, false);
}
exports.GdalMetaDataListFromJSON = GdalMetaDataListFromJSON;
function GdalMetaDataListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'params': (json['params'].map(GdalLoadingInfoTemporalSlice_1.GdalLoadingInfoTemporalSliceFromJSON)),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'type': json['type'],
    };
}
exports.GdalMetaDataListFromJSONTyped = GdalMetaDataListFromJSONTyped;
function GdalMetaDataListToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'params': (value.params.map(GdalLoadingInfoTemporalSlice_1.GdalLoadingInfoTemporalSliceToJSON)),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value.resultDescriptor),
        'type': value.type,
    };
}
exports.GdalMetaDataListToJSON = GdalMetaDataListToJSON;
