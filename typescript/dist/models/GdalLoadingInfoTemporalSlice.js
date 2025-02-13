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
exports.instanceOfGdalLoadingInfoTemporalSlice = instanceOfGdalLoadingInfoTemporalSlice;
exports.GdalLoadingInfoTemporalSliceFromJSON = GdalLoadingInfoTemporalSliceFromJSON;
exports.GdalLoadingInfoTemporalSliceFromJSONTyped = GdalLoadingInfoTemporalSliceFromJSONTyped;
exports.GdalLoadingInfoTemporalSliceToJSON = GdalLoadingInfoTemporalSliceToJSON;
exports.GdalLoadingInfoTemporalSliceToJSONTyped = GdalLoadingInfoTemporalSliceToJSONTyped;
const TimeInterval_1 = require("./TimeInterval");
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
/**
 * Check if a given object implements the GdalLoadingInfoTemporalSlice interface.
 */
function instanceOfGdalLoadingInfoTemporalSlice(value) {
    if (!('time' in value) || value['time'] === undefined)
        return false;
    return true;
}
function GdalLoadingInfoTemporalSliceFromJSON(json) {
    return GdalLoadingInfoTemporalSliceFromJSONTyped(json, false);
}
function GdalLoadingInfoTemporalSliceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'params': json['params'] == null ? undefined : (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'time': (0, TimeInterval_1.TimeIntervalFromJSON)(json['time']),
    };
}
function GdalLoadingInfoTemporalSliceToJSON(json) {
    return GdalLoadingInfoTemporalSliceToJSONTyped(json, false);
}
function GdalLoadingInfoTemporalSliceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'cacheTtl': value['cacheTtl'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value['params']),
        'time': (0, TimeInterval_1.TimeIntervalToJSON)(value['time']),
    };
}
