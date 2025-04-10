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
 * Stores time intervals in ms in close-open semantic [start, end)
 * @export
 * @interface TimeInterval
 */
export interface TimeInterval {
    /**
     * 
     * @type {number}
     * @memberof TimeInterval
     */
    end: number;
    /**
     * 
     * @type {number}
     * @memberof TimeInterval
     */
    start: number;
}

/**
 * Check if a given object implements the TimeInterval interface.
 */
export function instanceOfTimeInterval(value: object): value is TimeInterval {
    if (!('end' in value) || value['end'] === undefined) return false;
    if (!('start' in value) || value['start'] === undefined) return false;
    return true;
}

export function TimeIntervalFromJSON(json: any): TimeInterval {
    return TimeIntervalFromJSONTyped(json, false);
}

export function TimeIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'end': json['end'],
        'start': json['start'],
    };
}

export function TimeIntervalToJSON(json: any): TimeInterval {
    return TimeIntervalToJSONTyped(json, false);
}

export function TimeIntervalToJSONTyped(value?: TimeInterval | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'end': value['end'],
        'start': value['start'],
    };
}

