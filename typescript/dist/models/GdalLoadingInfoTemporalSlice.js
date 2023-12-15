"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdalLoadingInfoTemporalSliceToJSON = exports.GdalLoadingInfoTemporalSliceFromJSONTyped = exports.GdalLoadingInfoTemporalSliceFromJSON = exports.instanceOfGdalLoadingInfoTemporalSlice = void 0;
const runtime_1 = require("../runtime");
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
const TimeInterval_1 = require("./TimeInterval");
/**
 * Check if a given object implements the GdalLoadingInfoTemporalSlice interface.
 */
function instanceOfGdalLoadingInfoTemporalSlice(value) {
    let isInstance = true;
    isInstance = isInstance && "time" in value;
    return isInstance;
}
exports.instanceOfGdalLoadingInfoTemporalSlice = instanceOfGdalLoadingInfoTemporalSlice;
function GdalLoadingInfoTemporalSliceFromJSON(json) {
    return GdalLoadingInfoTemporalSliceFromJSONTyped(json, false);
}
exports.GdalLoadingInfoTemporalSliceFromJSON = GdalLoadingInfoTemporalSliceFromJSON;
function GdalLoadingInfoTemporalSliceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cacheTtl': !(0, runtime_1.exists)(json, 'cacheTtl') ? undefined : json['cacheTtl'],
        'params': !(0, runtime_1.exists)(json, 'params') ? undefined : (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'time': (0, TimeInterval_1.TimeIntervalFromJSON)(json['time']),
    };
}
exports.GdalLoadingInfoTemporalSliceFromJSONTyped = GdalLoadingInfoTemporalSliceFromJSONTyped;
function GdalLoadingInfoTemporalSliceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cacheTtl': value.cacheTtl,
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value.params),
        'time': (0, TimeInterval_1.TimeIntervalToJSON)(value.time),
    };
}
exports.GdalLoadingInfoTemporalSliceToJSON = GdalLoadingInfoTemporalSliceToJSON;
