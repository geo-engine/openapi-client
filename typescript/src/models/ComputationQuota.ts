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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ComputationQuota
 */
export interface ComputationQuota {
    /**
     * 
     * @type {string}
     * @memberof ComputationQuota
     */
    computationId: string;
    /**
     * 
     * @type {number}
     * @memberof ComputationQuota
     */
    count: number;
    /**
     * 
     * @type {Date}
     * @memberof ComputationQuota
     */
    timestamp: Date;
    /**
     * 
     * @type {string}
     * @memberof ComputationQuota
     */
    workflowId: string;
}

/**
 * Check if a given object implements the ComputationQuota interface.
 */
export function instanceOfComputationQuota(value: object): value is ComputationQuota {
    if (!('computationId' in value) || value['computationId'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('workflowId' in value) || value['workflowId'] === undefined) return false;
    return true;
}

export function ComputationQuotaFromJSON(json: any): ComputationQuota {
    return ComputationQuotaFromJSONTyped(json, false);
}

export function ComputationQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputationQuota {
    if (json == null) {
        return json;
    }
    return {
        
        'computationId': json['computationId'],
        'count': json['count'],
        'timestamp': (new Date(json['timestamp'])),
        'workflowId': json['workflowId'],
    };
}

export function ComputationQuotaToJSON(json: any): ComputationQuota {
    return ComputationQuotaToJSONTyped(json, false);
}

export function ComputationQuotaToJSONTyped(value?: ComputationQuota | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'computationId': value['computationId'],
        'count': value['count'],
        'timestamp': ((value['timestamp']).toISOString()),
        'workflowId': value['workflowId'],
    };
}

