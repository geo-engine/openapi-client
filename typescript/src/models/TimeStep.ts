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
import type { TimeGranularity } from './TimeGranularity';
import {
    TimeGranularityFromJSON,
    TimeGranularityFromJSONTyped,
    TimeGranularityToJSON,
} from './TimeGranularity';

/**
 * 
 * @export
 * @interface TimeStep
 */
export interface TimeStep {
    /**
     * 
     * @type {TimeGranularity}
     * @memberof TimeStep
     */
    granularity: TimeGranularity;
    /**
     * 
     * @type {number}
     * @memberof TimeStep
     */
    step: number;
}

/**
 * Check if a given object implements the TimeStep interface.
 */
export function instanceOfTimeStep(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "granularity" in value;
    isInstance = isInstance && "step" in value;

    return isInstance;
}

export function TimeStepFromJSON(json: any): TimeStep {
    return TimeStepFromJSONTyped(json, false);
}

export function TimeStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeStep {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'granularity': TimeGranularityFromJSON(json['granularity']),
        'step': json['step'],
    };
}

export function TimeStepToJSON(value?: TimeStep | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'granularity': TimeGranularityToJSON(value.granularity),
        'step': value.step,
    };
}

