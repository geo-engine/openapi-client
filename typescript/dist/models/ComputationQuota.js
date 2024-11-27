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
exports.ComputationQuotaToJSON = exports.ComputationQuotaFromJSONTyped = exports.ComputationQuotaFromJSON = exports.instanceOfComputationQuota = void 0;
/**
 * Check if a given object implements the ComputationQuota interface.
 */
function instanceOfComputationQuota(value) {
    let isInstance = true;
    isInstance = isInstance && "computationId" in value;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "workflowId" in value;
    return isInstance;
}
exports.instanceOfComputationQuota = instanceOfComputationQuota;
function ComputationQuotaFromJSON(json) {
    return ComputationQuotaFromJSONTyped(json, false);
}
exports.ComputationQuotaFromJSON = ComputationQuotaFromJSON;
function ComputationQuotaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'computationId': json['computationId'],
        'count': json['count'],
        'timestamp': (new Date(json['timestamp'])),
        'workflowId': json['workflowId'],
    };
}
exports.ComputationQuotaFromJSONTyped = ComputationQuotaFromJSONTyped;
function ComputationQuotaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'computationId': value.computationId,
        'count': value.count,
        'timestamp': (value.timestamp.toISOString()),
        'workflowId': value.workflowId,
    };
}
exports.ComputationQuotaToJSON = ComputationQuotaToJSON;
