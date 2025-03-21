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
 * @interface ContinuousMeasurement
 */
export interface ContinuousMeasurement {
    /**
     * 
     * @type {string}
     * @memberof ContinuousMeasurement
     */
    measurement: string;
    /**
     * 
     * @type {string}
     * @memberof ContinuousMeasurement
     */
    type: ContinuousMeasurementTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ContinuousMeasurement
     */
    unit?: string | null;
}


/**
 * @export
 */
export const ContinuousMeasurementTypeEnum = {
    Continuous: 'continuous'
} as const;
export type ContinuousMeasurementTypeEnum = typeof ContinuousMeasurementTypeEnum[keyof typeof ContinuousMeasurementTypeEnum];


/**
 * Check if a given object implements the ContinuousMeasurement interface.
 */
export function instanceOfContinuousMeasurement(value: object): value is ContinuousMeasurement {
    if (!('measurement' in value) || value['measurement'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ContinuousMeasurementFromJSON(json: any): ContinuousMeasurement {
    return ContinuousMeasurementFromJSONTyped(json, false);
}

export function ContinuousMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuousMeasurement {
    if (json == null) {
        return json;
    }
    return {
        
        'measurement': json['measurement'],
        'type': json['type'],
        'unit': json['unit'] == null ? undefined : json['unit'],
    };
}

export function ContinuousMeasurementToJSON(json: any): ContinuousMeasurement {
    return ContinuousMeasurementToJSONTyped(json, false);
}

export function ContinuousMeasurementToJSONTyped(value?: ContinuousMeasurement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'measurement': value['measurement'],
        'type': value['type'],
        'unit': value['unit'],
    };
}

