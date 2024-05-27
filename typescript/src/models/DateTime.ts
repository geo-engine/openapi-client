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

import { mapValues } from '../runtime';
/**
 * An object that composes the date and a timestamp with time zone.
 * @export
 * @interface DateTime
 */
export interface DateTime {
    /**
     * 
     * @type {Date}
     * @memberof DateTime
     */
    datetime: Date;
}

/**
 * Check if a given object implements the DateTime interface.
 */
export function instanceOfDateTime(value: object): value is DateTime {
    if (!('datetime' in value) || value['datetime'] === undefined) return false;
    return true;
}

export function DateTimeFromJSON(json: any): DateTime {
    return DateTimeFromJSONTyped(json, false);
}

export function DateTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateTime {
    if (json == null) {
        return json;
    }
    return {
        
        'datetime': (new Date(json['datetime'])),
    };
}

export function DateTimeToJSON(value?: DateTime | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'datetime': ((value['datetime']).toISOString()),
    };
}

