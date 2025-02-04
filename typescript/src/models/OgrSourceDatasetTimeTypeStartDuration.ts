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

import { exists, mapValues } from '../runtime';
import type { OgrSourceTimeFormat } from './OgrSourceTimeFormat';
import {
    OgrSourceTimeFormatFromJSON,
    OgrSourceTimeFormatFromJSONTyped,
    OgrSourceTimeFormatToJSON,
} from './OgrSourceTimeFormat';

/**
 * 
 * @export
 * @interface OgrSourceDatasetTimeTypeStartDuration
 */
export interface OgrSourceDatasetTimeTypeStartDuration {
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    durationField: string;
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    startField: string;
    /**
     * 
     * @type {OgrSourceTimeFormat}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    startFormat: OgrSourceTimeFormat;
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    type: OgrSourceDatasetTimeTypeStartDurationTypeEnum;
}


/**
 * @export
 */
export const OgrSourceDatasetTimeTypeStartDurationTypeEnum = {
    Startduration: 'start+duration'
} as const;
export type OgrSourceDatasetTimeTypeStartDurationTypeEnum = typeof OgrSourceDatasetTimeTypeStartDurationTypeEnum[keyof typeof OgrSourceDatasetTimeTypeStartDurationTypeEnum];


/**
 * Check if a given object implements the OgrSourceDatasetTimeTypeStartDuration interface.
 */
export function instanceOfOgrSourceDatasetTimeTypeStartDuration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "durationField" in value;
    isInstance = isInstance && "startField" in value;
    isInstance = isInstance && "startFormat" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function OgrSourceDatasetTimeTypeStartDurationFromJSON(json: any): OgrSourceDatasetTimeTypeStartDuration {
    return OgrSourceDatasetTimeTypeStartDurationFromJSONTyped(json, false);
}

export function OgrSourceDatasetTimeTypeStartDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDatasetTimeTypeStartDuration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'durationField': json['durationField'],
        'startField': json['startField'],
        'startFormat': OgrSourceTimeFormatFromJSON(json['startFormat']),
        'type': json['type'],
    };
}

export function OgrSourceDatasetTimeTypeStartDurationToJSON(value?: OgrSourceDatasetTimeTypeStartDuration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'durationField': value.durationField,
        'startField': value.startField,
        'startFormat': OgrSourceTimeFormatToJSON(value.startFormat),
        'type': value.type,
    };
}

