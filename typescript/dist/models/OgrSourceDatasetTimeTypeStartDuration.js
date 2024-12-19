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
exports.OgrSourceDatasetTimeTypeStartDurationToJSON = exports.OgrSourceDatasetTimeTypeStartDurationFromJSONTyped = exports.OgrSourceDatasetTimeTypeStartDurationFromJSON = exports.instanceOfOgrSourceDatasetTimeTypeStartDuration = exports.OgrSourceDatasetTimeTypeStartDurationTypeEnum = void 0;
const OgrSourceTimeFormat_1 = require("./OgrSourceTimeFormat");
/**
 * @export
 */
exports.OgrSourceDatasetTimeTypeStartDurationTypeEnum = {
    Startduration: 'start+duration'
};
/**
 * Check if a given object implements the OgrSourceDatasetTimeTypeStartDuration interface.
 */
function instanceOfOgrSourceDatasetTimeTypeStartDuration(value) {
    let isInstance = true;
    isInstance = isInstance && "durationField" in value;
    isInstance = isInstance && "startField" in value;
    isInstance = isInstance && "startFormat" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfOgrSourceDatasetTimeTypeStartDuration = instanceOfOgrSourceDatasetTimeTypeStartDuration;
function OgrSourceDatasetTimeTypeStartDurationFromJSON(json) {
    return OgrSourceDatasetTimeTypeStartDurationFromJSONTyped(json, false);
}
exports.OgrSourceDatasetTimeTypeStartDurationFromJSON = OgrSourceDatasetTimeTypeStartDurationFromJSON;
function OgrSourceDatasetTimeTypeStartDurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'durationField': json['durationField'],
        'startField': json['startField'],
        'startFormat': (0, OgrSourceTimeFormat_1.OgrSourceTimeFormatFromJSON)(json['startFormat']),
        'type': json['type'],
    };
}
exports.OgrSourceDatasetTimeTypeStartDurationFromJSONTyped = OgrSourceDatasetTimeTypeStartDurationFromJSONTyped;
function OgrSourceDatasetTimeTypeStartDurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'durationField': value.durationField,
        'startField': value.startField,
        'startFormat': (0, OgrSourceTimeFormat_1.OgrSourceTimeFormatToJSON)(value.startFormat),
        'type': value.type,
    };
}
exports.OgrSourceDatasetTimeTypeStartDurationToJSON = OgrSourceDatasetTimeTypeStartDurationToJSON;
