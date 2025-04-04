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
exports.OgrSourceDurationSpecInfiniteToJSONTyped = exports.OgrSourceDurationSpecInfiniteToJSON = exports.OgrSourceDurationSpecInfiniteFromJSONTyped = exports.OgrSourceDurationSpecInfiniteFromJSON = exports.instanceOfOgrSourceDurationSpecInfinite = exports.OgrSourceDurationSpecInfiniteTypeEnum = void 0;
/**
 * @export
 */
exports.OgrSourceDurationSpecInfiniteTypeEnum = {
    Infinite: 'infinite'
};
/**
 * Check if a given object implements the OgrSourceDurationSpecInfinite interface.
 */
function instanceOfOgrSourceDurationSpecInfinite(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfOgrSourceDurationSpecInfinite = instanceOfOgrSourceDurationSpecInfinite;
function OgrSourceDurationSpecInfiniteFromJSON(json) {
    return OgrSourceDurationSpecInfiniteFromJSONTyped(json, false);
}
exports.OgrSourceDurationSpecInfiniteFromJSON = OgrSourceDurationSpecInfiniteFromJSON;
function OgrSourceDurationSpecInfiniteFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.OgrSourceDurationSpecInfiniteFromJSONTyped = OgrSourceDurationSpecInfiniteFromJSONTyped;
function OgrSourceDurationSpecInfiniteToJSON(json) {
    return OgrSourceDurationSpecInfiniteToJSONTyped(json, false);
}
exports.OgrSourceDurationSpecInfiniteToJSON = OgrSourceDurationSpecInfiniteToJSON;
function OgrSourceDurationSpecInfiniteToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'type': value['type'],
    };
}
exports.OgrSourceDurationSpecInfiniteToJSONTyped = OgrSourceDurationSpecInfiniteToJSONTyped;
