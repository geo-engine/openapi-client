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
 * @interface OgrSourceTimeFormatAuto
 */
export interface OgrSourceTimeFormatAuto {
    /**
     * 
     * @type {string}
     * @memberof OgrSourceTimeFormatAuto
     */
    format: OgrSourceTimeFormatAutoFormatEnum;
}


/**
 * @export
 */
export const OgrSourceTimeFormatAutoFormatEnum = {
    Auto: 'auto'
} as const;
export type OgrSourceTimeFormatAutoFormatEnum = typeof OgrSourceTimeFormatAutoFormatEnum[keyof typeof OgrSourceTimeFormatAutoFormatEnum];


/**
 * Check if a given object implements the OgrSourceTimeFormatAuto interface.
 */
export function instanceOfOgrSourceTimeFormatAuto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "format" in value;

    return isInstance;
}

export function OgrSourceTimeFormatAutoFromJSON(json: any): OgrSourceTimeFormatAuto {
    return OgrSourceTimeFormatAutoFromJSONTyped(json, false);
}

export function OgrSourceTimeFormatAutoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceTimeFormatAuto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': json['format'],
    };
}

export function OgrSourceTimeFormatAutoToJSON(value?: OgrSourceTimeFormatAuto | null): any {
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

