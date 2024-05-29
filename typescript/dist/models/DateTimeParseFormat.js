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
exports.DateTimeParseFormatToJSON = exports.DateTimeParseFormatFromJSONTyped = exports.DateTimeParseFormatFromJSON = exports.instanceOfDateTimeParseFormat = void 0;
/**
 * Check if a given object implements the DateTimeParseFormat interface.
 */
function instanceOfDateTimeParseFormat(value) {
    if (!('fmt' in value))
        return false;
    if (!('hasTime' in value))
        return false;
    if (!('hasTz' in value))
        return false;
    return true;
}
exports.instanceOfDateTimeParseFormat = instanceOfDateTimeParseFormat;
function DateTimeParseFormatFromJSON(json) {
    return DateTimeParseFormatFromJSONTyped(json, false);
}
exports.DateTimeParseFormatFromJSON = DateTimeParseFormatFromJSON;
function DateTimeParseFormatFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fmt': json['fmt'],
        'hasTime': json['has_time'],
        'hasTz': json['has_tz'],
    };
}
exports.DateTimeParseFormatFromJSONTyped = DateTimeParseFormatFromJSONTyped;
function DateTimeParseFormatToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'fmt': value['fmt'],
        'has_time': value['hasTime'],
        'has_tz': value['hasTz'],
    };
}
exports.DateTimeParseFormatToJSON = DateTimeParseFormatToJSON;
