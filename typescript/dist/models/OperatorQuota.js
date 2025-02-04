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
exports.OperatorQuotaToJSON = exports.OperatorQuotaFromJSONTyped = exports.OperatorQuotaFromJSON = exports.instanceOfOperatorQuota = void 0;
/**
 * Check if a given object implements the OperatorQuota interface.
 */
function instanceOfOperatorQuota(value) {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "operatorName" in value;
    isInstance = isInstance && "operatorPath" in value;
    return isInstance;
}
exports.instanceOfOperatorQuota = instanceOfOperatorQuota;
function OperatorQuotaFromJSON(json) {
    return OperatorQuotaFromJSONTyped(json, false);
}
exports.OperatorQuotaFromJSON = OperatorQuotaFromJSON;
function OperatorQuotaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'operatorName': json['operatorName'],
        'operatorPath': json['operatorPath'],
    };
}
exports.OperatorQuotaFromJSONTyped = OperatorQuotaFromJSONTyped;
function OperatorQuotaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'operatorName': value.operatorName,
        'operatorPath': value.operatorPath,
    };
}
exports.OperatorQuotaToJSON = OperatorQuotaToJSON;
