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
 * @interface OgrSourceDurationSpecInfinite
 */
export interface OgrSourceDurationSpecInfinite {
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDurationSpecInfinite
     */
    type: OgrSourceDurationSpecInfiniteTypeEnum;
}


/**
 * @export
 */
export const OgrSourceDurationSpecInfiniteTypeEnum = {
    Infinite: 'infinite'
} as const;
export type OgrSourceDurationSpecInfiniteTypeEnum = typeof OgrSourceDurationSpecInfiniteTypeEnum[keyof typeof OgrSourceDurationSpecInfiniteTypeEnum];


/**
 * Check if a given object implements the OgrSourceDurationSpecInfinite interface.
 */
export function instanceOfOgrSourceDurationSpecInfinite(value: object): value is OgrSourceDurationSpecInfinite {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function OgrSourceDurationSpecInfiniteFromJSON(json: any): OgrSourceDurationSpecInfinite {
    return OgrSourceDurationSpecInfiniteFromJSONTyped(json, false);
}

export function OgrSourceDurationSpecInfiniteFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDurationSpecInfinite {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function OgrSourceDurationSpecInfiniteToJSON(json: any): OgrSourceDurationSpecInfinite {
    return OgrSourceDurationSpecInfiniteToJSONTyped(json, false);
}

export function OgrSourceDurationSpecInfiniteToJSONTyped(value?: OgrSourceDurationSpecInfinite | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
    };
}

