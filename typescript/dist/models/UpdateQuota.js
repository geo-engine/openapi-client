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
exports.instanceOfUpdateQuota = instanceOfUpdateQuota;
exports.UpdateQuotaFromJSON = UpdateQuotaFromJSON;
exports.UpdateQuotaFromJSONTyped = UpdateQuotaFromJSONTyped;
exports.UpdateQuotaToJSON = UpdateQuotaToJSON;
exports.UpdateQuotaToJSONTyped = UpdateQuotaToJSONTyped;
/**
 * Check if a given object implements the UpdateQuota interface.
 */
function instanceOfUpdateQuota(value) {
    if (!('available' in value) || value['available'] === undefined)
        return false;
    return true;
}
function UpdateQuotaFromJSON(json) {
    return UpdateQuotaFromJSONTyped(json, false);
}
function UpdateQuotaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'available': json['available'],
    };
}
function UpdateQuotaToJSON(json) {
    return UpdateQuotaToJSONTyped(json, false);
}
function UpdateQuotaToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'available': value['available'],
    };
}
