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
exports.OgrSourceTimeFormatAutoToJSONTyped = exports.OgrSourceTimeFormatAutoToJSON = exports.OgrSourceTimeFormatAutoFromJSONTyped = exports.OgrSourceTimeFormatAutoFromJSON = exports.instanceOfOgrSourceTimeFormatAuto = exports.OgrSourceTimeFormatAutoFormatEnum = void 0;
/**
 * @export
 */
exports.OgrSourceTimeFormatAutoFormatEnum = {
    Auto: 'auto'
};
/**
 * Check if a given object implements the OgrSourceTimeFormatAuto interface.
 */
function instanceOfOgrSourceTimeFormatAuto(value) {
    if (!('format' in value) || value['format'] === undefined)
        return false;
    return true;
}
exports.instanceOfOgrSourceTimeFormatAuto = instanceOfOgrSourceTimeFormatAuto;
function OgrSourceTimeFormatAutoFromJSON(json) {
    return OgrSourceTimeFormatAutoFromJSONTyped(json, false);
}
exports.OgrSourceTimeFormatAutoFromJSON = OgrSourceTimeFormatAutoFromJSON;
function OgrSourceTimeFormatAutoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'format': json['format'],
    };
}
exports.OgrSourceTimeFormatAutoFromJSONTyped = OgrSourceTimeFormatAutoFromJSONTyped;
function OgrSourceTimeFormatAutoToJSON(json) {
    return OgrSourceTimeFormatAutoToJSONTyped(json, false);
}
exports.OgrSourceTimeFormatAutoToJSON = OgrSourceTimeFormatAutoToJSON;
function OgrSourceTimeFormatAutoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'format': value['format'],
    };
}
exports.OgrSourceTimeFormatAutoToJSONTyped = OgrSourceTimeFormatAutoToJSONTyped;
