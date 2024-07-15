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
import type { DateTimeParseFormat } from './DateTimeParseFormat';
import {
    DateTimeParseFormatFromJSON,
    DateTimeParseFormatFromJSONTyped,
    DateTimeParseFormatToJSON,
} from './DateTimeParseFormat';

/**
 * 
 * @export
 * @interface CustomOgrSourceTimeFormat
 */
export interface CustomOgrSourceTimeFormat {
    /**
     * 
     * @type {DateTimeParseFormat}
     * @memberof CustomOgrSourceTimeFormat
     */
    customFormat: DateTimeParseFormat;
    /**
     * 
     * @type {string}
     * @memberof CustomOgrSourceTimeFormat
     */
    format: CustomOgrSourceTimeFormatFormatEnum;
}


/**
 * @export
 */
export const CustomOgrSourceTimeFormatFormatEnum = {
    Custom: 'custom'
} as const;
export type CustomOgrSourceTimeFormatFormatEnum = typeof CustomOgrSourceTimeFormatFormatEnum[keyof typeof CustomOgrSourceTimeFormatFormatEnum];


/**
 * Check if a given object implements the CustomOgrSourceTimeFormat interface.
 */
export function instanceOfCustomOgrSourceTimeFormat(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customFormat" in value;
    isInstance = isInstance && "format" in value;

    return isInstance;
}

export function CustomOgrSourceTimeFormatFromJSON(json: any): CustomOgrSourceTimeFormat {
    return CustomOgrSourceTimeFormatFromJSONTyped(json, false);
}

export function CustomOgrSourceTimeFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomOgrSourceTimeFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customFormat': DateTimeParseFormatFromJSON(json['customFormat']),
        'format': json['format'],
    };
}

export function CustomOgrSourceTimeFormatToJSON(value?: CustomOgrSourceTimeFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customFormat': DateTimeParseFormatToJSON(value.customFormat),
        'format': value.format,
    };
}
