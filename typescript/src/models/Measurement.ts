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

import type { ClassificationMeasurement } from './ClassificationMeasurement';
import {
    instanceOfClassificationMeasurement,
    ClassificationMeasurementFromJSON,
    ClassificationMeasurementFromJSONTyped,
    ClassificationMeasurementToJSON,
} from './ClassificationMeasurement';
import type { ContinuousMeasurement } from './ContinuousMeasurement';
import {
    instanceOfContinuousMeasurement,
    ContinuousMeasurementFromJSON,
    ContinuousMeasurementFromJSONTyped,
    ContinuousMeasurementToJSON,
} from './ContinuousMeasurement';
import type { UnitlessMeasurement } from './UnitlessMeasurement';
import {
    instanceOfUnitlessMeasurement,
    UnitlessMeasurementFromJSON,
    UnitlessMeasurementFromJSONTyped,
    UnitlessMeasurementToJSON,
} from './UnitlessMeasurement';

/**
 * @type Measurement
 * 
 * @export
 */
export type Measurement = { type: 'classification' } & ClassificationMeasurement | { type: 'continuous' } & ContinuousMeasurement | { type: 'unitless' } & UnitlessMeasurement;

export function MeasurementFromJSON(json: any): Measurement {
    return MeasurementFromJSONTyped(json, false);
}

export function MeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Measurement {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'classification':
            return Object.assign({}, ClassificationMeasurementFromJSONTyped(json, true), { type: 'classification' } as const);
        case 'continuous':
            return Object.assign({}, ContinuousMeasurementFromJSONTyped(json, true), { type: 'continuous' } as const);
        case 'unitless':
            return Object.assign({}, UnitlessMeasurementFromJSONTyped(json, true), { type: 'unitless' } as const);
        default:
            throw new Error(`No variant of Measurement exists with 'type=${json['type']}'`);
    }
}

export function MeasurementToJSON(json: any): any {
    return MeasurementToJSONTyped(json, false);
}

export function MeasurementToJSONTyped(value?: Measurement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'classification':
            return Object.assign({}, ClassificationMeasurementToJSON(value), { type: 'classification' } as const);
        case 'continuous':
            return Object.assign({}, ContinuousMeasurementToJSON(value), { type: 'continuous' } as const);
        case 'unitless':
            return Object.assign({}, UnitlessMeasurementToJSON(value), { type: 'unitless' } as const);
        default:
            throw new Error(`No variant of Measurement exists with 'type=${value['type']}'`);
    }

}

