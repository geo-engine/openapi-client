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
exports.UnixTimeStampOgrSourceTimeFormatToJSON = exports.UnixTimeStampOgrSourceTimeFormatFromJSONTyped = exports.UnixTimeStampOgrSourceTimeFormatFromJSON = exports.instanceOfUnixTimeStampOgrSourceTimeFormat = exports.UnixTimeStampOgrSourceTimeFormatFormatEnum = void 0;
const UnixTimeStampType_1 = require("./UnixTimeStampType");
/**
 * @export
 */
exports.UnixTimeStampOgrSourceTimeFormatFormatEnum = {
    UnixTimeStamp: 'unixTimeStamp'
};
/**
 * Check if a given object implements the UnixTimeStampOgrSourceTimeFormat interface.
 */
function instanceOfUnixTimeStampOgrSourceTimeFormat(value) {
    let isInstance = true;
    isInstance = isInstance && "format" in value;
    isInstance = isInstance && "timestampType" in value;
    return isInstance;
}
exports.instanceOfUnixTimeStampOgrSourceTimeFormat = instanceOfUnixTimeStampOgrSourceTimeFormat;
function UnixTimeStampOgrSourceTimeFormatFromJSON(json) {
    return UnixTimeStampOgrSourceTimeFormatFromJSONTyped(json, false);
}
exports.UnixTimeStampOgrSourceTimeFormatFromJSON = UnixTimeStampOgrSourceTimeFormatFromJSON;
function UnixTimeStampOgrSourceTimeFormatFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'format': json['format'],
        'timestampType': (0, UnixTimeStampType_1.UnixTimeStampTypeFromJSON)(json['timestampType']),
    };
}
exports.UnixTimeStampOgrSourceTimeFormatFromJSONTyped = UnixTimeStampOgrSourceTimeFormatFromJSONTyped;
function UnixTimeStampOgrSourceTimeFormatToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'format': value.format,
        'timestampType': (0, UnixTimeStampType_1.UnixTimeStampTypeToJSON)(value.timestampType),
    };
}
exports.UnixTimeStampOgrSourceTimeFormatToJSON = UnixTimeStampOgrSourceTimeFormatToJSON;
