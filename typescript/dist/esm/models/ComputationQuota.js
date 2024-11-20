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
import { OperatorQuotaFromJSON, OperatorQuotaToJSON, } from './OperatorQuota';
/**
 * Check if a given object implements the ComputationQuota interface.
 */
export function instanceOfComputationQuota(value) {
    let isInstance = true;
    isInstance = isInstance && "computationId" in value;
    isInstance = isInstance && "operators" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "workflowId" in value;
    return isInstance;
}
export function ComputationQuotaFromJSON(json) {
    return ComputationQuotaFromJSONTyped(json, false);
}
export function ComputationQuotaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'computationId': json['computationId'],
        'operators': (json['operators'].map(OperatorQuotaFromJSON)),
        'timestamp': (new Date(json['timestamp'])),
        'workflowId': json['workflowId'],
    };
}
export function ComputationQuotaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'computationId': value.computationId,
        'operators': (value.operators.map(OperatorQuotaToJSON)),
        'timestamp': (value.timestamp.toISOString()),
        'workflowId': value.workflowId,
    };
}
