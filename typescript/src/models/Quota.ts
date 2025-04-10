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
 * @interface Quota
 */
export interface Quota {
    /**
     * 
     * @type {number}
     * @memberof Quota
     */
    available: number;
    /**
     * 
     * @type {number}
     * @memberof Quota
     */
    used: number;
}

/**
 * Check if a given object implements the Quota interface.
 */
export function instanceOfQuota(value: object): value is Quota {
    if (!('available' in value) || value['available'] === undefined) return false;
    if (!('used' in value) || value['used'] === undefined) return false;
    return true;
}

export function QuotaFromJSON(json: any): Quota {
    return QuotaFromJSONTyped(json, false);
}

export function QuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quota {
    if (json == null) {
        return json;
    }
    return {
        
        'available': json['available'],
        'used': json['used'],
    };
}

export function QuotaToJSON(json: any): Quota {
    return QuotaToJSONTyped(json, false);
}

export function QuotaToJSONTyped(value?: Quota | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'available': value['available'],
        'used': value['used'],
    };
}

