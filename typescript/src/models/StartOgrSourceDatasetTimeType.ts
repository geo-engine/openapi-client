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
import type { OgrSourceDurationSpec } from './OgrSourceDurationSpec';
import {
    OgrSourceDurationSpecFromJSON,
    OgrSourceDurationSpecFromJSONTyped,
    OgrSourceDurationSpecToJSON,
} from './OgrSourceDurationSpec';
import type { OgrSourceTimeFormat } from './OgrSourceTimeFormat';
import {
    OgrSourceTimeFormatFromJSON,
    OgrSourceTimeFormatFromJSONTyped,
    OgrSourceTimeFormatToJSON,
} from './OgrSourceTimeFormat';

/**
 * 
 * @export
 * @interface StartOgrSourceDatasetTimeType
 */
export interface StartOgrSourceDatasetTimeType {
    /**
     * 
     * @type {OgrSourceDurationSpec}
     * @memberof StartOgrSourceDatasetTimeType
     */
    duration: OgrSourceDurationSpec;
    /**
     * 
     * @type {string}
     * @memberof StartOgrSourceDatasetTimeType
     */
    startField: string;
    /**
     * 
     * @type {OgrSourceTimeFormat}
     * @memberof StartOgrSourceDatasetTimeType
     */
    startFormat: OgrSourceTimeFormat;
    /**
     * 
     * @type {string}
     * @memberof StartOgrSourceDatasetTimeType
     */
    type: StartOgrSourceDatasetTimeTypeTypeEnum;
}


/**
 * @export
 */
export const StartOgrSourceDatasetTimeTypeTypeEnum = {
    Start: 'start'
} as const;
export type StartOgrSourceDatasetTimeTypeTypeEnum = typeof StartOgrSourceDatasetTimeTypeTypeEnum[keyof typeof StartOgrSourceDatasetTimeTypeTypeEnum];


/**
 * Check if a given object implements the StartOgrSourceDatasetTimeType interface.
 */
export function instanceOfStartOgrSourceDatasetTimeType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "startField" in value;
    isInstance = isInstance && "startFormat" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function StartOgrSourceDatasetTimeTypeFromJSON(json: any): StartOgrSourceDatasetTimeType {
    return StartOgrSourceDatasetTimeTypeFromJSONTyped(json, false);
}

export function StartOgrSourceDatasetTimeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartOgrSourceDatasetTimeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': OgrSourceDurationSpecFromJSON(json['duration']),
        'startField': json['startField'],
        'startFormat': OgrSourceTimeFormatFromJSON(json['startFormat']),
        'type': json['type'],
    };
}

export function StartOgrSourceDatasetTimeTypeToJSON(value?: StartOgrSourceDatasetTimeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': OgrSourceDurationSpecToJSON(value.duration),
        'startField': value.startField,
        'startFormat': OgrSourceTimeFormatToJSON(value.startFormat),
        'type': value.type,
    };
}

