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
 * @interface RasterPropertiesKey
 */
export interface RasterPropertiesKey {
    /**
     * 
     * @type {string}
     * @memberof RasterPropertiesKey
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof RasterPropertiesKey
     */
    key: string;
}

/**
 * Check if a given object implements the RasterPropertiesKey interface.
 */
export function instanceOfRasterPropertiesKey(value: object): boolean {
    if (!('key' in value)) return false;
    return true;
}

export function RasterPropertiesKeyFromJSON(json: any): RasterPropertiesKey {
    return RasterPropertiesKeyFromJSONTyped(json, false);
}

export function RasterPropertiesKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterPropertiesKey {
    if (json == null) {
        return json;
    }
    return {
        
        'domain': json['domain'] == null ? undefined : json['domain'],
        'key': json['key'],
    };
}

export function RasterPropertiesKeyToJSON(value?: RasterPropertiesKey | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'domain': value['domain'],
        'key': value['key'],
    };
}

