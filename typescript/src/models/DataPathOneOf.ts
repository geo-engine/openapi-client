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
 * 
 * @export
 * @interface DataPathOneOf
 */
export interface DataPathOneOf {
    /**
     * 
     * @type {string}
     * @memberof DataPathOneOf
     */
    volume: string;
}

/**
 * Check if a given object implements the DataPathOneOf interface.
 */
export function instanceOfDataPathOneOf(value: object): boolean {
    if (!('volume' in value)) return false;
    return true;
}

export function DataPathOneOfFromJSON(json: any): DataPathOneOf {
    return DataPathOneOfFromJSONTyped(json, false);
}

export function DataPathOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataPathOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'volume': json['volume'],
    };
}

export function DataPathOneOfToJSON(value?: DataPathOneOf | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'volume': value['volume'],
    };
}

