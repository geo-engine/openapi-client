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
exports.OgrSourceTimeFormatCustomToJSON = exports.OgrSourceTimeFormatCustomFromJSONTyped = exports.OgrSourceTimeFormatCustomFromJSON = exports.instanceOfOgrSourceTimeFormatCustom = exports.OgrSourceTimeFormatCustomFormatEnum = void 0;
/**
 * @export
 */
exports.OgrSourceTimeFormatCustomFormatEnum = {
    Custom: 'custom'
};
/**
 * Check if a given object implements the OgrSourceTimeFormatCustom interface.
 */
function instanceOfOgrSourceTimeFormatCustom(value) {
    let isInstance = true;
    isInstance = isInstance && "customFormat" in value;
    isInstance = isInstance && "format" in value;
    return isInstance;
}
exports.instanceOfOgrSourceTimeFormatCustom = instanceOfOgrSourceTimeFormatCustom;
function OgrSourceTimeFormatCustomFromJSON(json) {
    return OgrSourceTimeFormatCustomFromJSONTyped(json, false);
}
exports.OgrSourceTimeFormatCustomFromJSON = OgrSourceTimeFormatCustomFromJSON;
function OgrSourceTimeFormatCustomFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customFormat': json['customFormat'],
        'format': json['format'],
    };
}
exports.OgrSourceTimeFormatCustomFromJSONTyped = OgrSourceTimeFormatCustomFromJSONTyped;
function OgrSourceTimeFormatCustomToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customFormat': value.customFormat,
        'format': value.format,
    };
}
exports.OgrSourceTimeFormatCustomToJSON = OgrSourceTimeFormatCustomToJSON;
