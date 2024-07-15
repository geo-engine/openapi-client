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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AutoOgrSourceTimeFormat
 */
export interface AutoOgrSourceTimeFormat {
    /**
     * 
     * @type {string}
     * @memberof AutoOgrSourceTimeFormat
     */
    format: AutoOgrSourceTimeFormatFormatEnum;
}


/**
 * @export
 */
export const AutoOgrSourceTimeFormatFormatEnum = {
    Auto: 'auto'
} as const;
export type AutoOgrSourceTimeFormatFormatEnum = typeof AutoOgrSourceTimeFormatFormatEnum[keyof typeof AutoOgrSourceTimeFormatFormatEnum];


/**
 * Check if a given object implements the AutoOgrSourceTimeFormat interface.
 */
export function instanceOfAutoOgrSourceTimeFormat(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "format" in value;

    return isInstance;
}

export function AutoOgrSourceTimeFormatFromJSON(json: any): AutoOgrSourceTimeFormat {
    return AutoOgrSourceTimeFormatFromJSONTyped(json, false);
}

export function AutoOgrSourceTimeFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoOgrSourceTimeFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': json['format'],
    };
}

export function AutoOgrSourceTimeFormatToJSON(value?: AutoOgrSourceTimeFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format': value.format,
    };
}
