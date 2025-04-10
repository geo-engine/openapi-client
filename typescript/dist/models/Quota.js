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
exports.instanceOfQuota = instanceOfQuota;
exports.QuotaFromJSON = QuotaFromJSON;
exports.QuotaFromJSONTyped = QuotaFromJSONTyped;
exports.QuotaToJSON = QuotaToJSON;
exports.QuotaToJSONTyped = QuotaToJSONTyped;
/**
 * Check if a given object implements the Quota interface.
 */
function instanceOfQuota(value) {
    if (!('available' in value) || value['available'] === undefined)
        return false;
    if (!('used' in value) || value['used'] === undefined)
        return false;
    return true;
}
function QuotaFromJSON(json) {
    return QuotaFromJSONTyped(json, false);
}
function QuotaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'available': json['available'],
        'used': json['used'],
    };
}
function QuotaToJSON(json) {
    return QuotaToJSONTyped(json, false);
}
function QuotaToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'available': value['available'],
        'used': value['used'],
    };
}
