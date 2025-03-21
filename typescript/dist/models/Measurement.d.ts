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
import type { ContinuousMeasurement } from './ContinuousMeasurement';
import type { UnitlessMeasurement } from './UnitlessMeasurement';
/**
 * @type Measurement
 *
 * @export
 */
export type Measurement = {
    type: 'classification';
} & ClassificationMeasurement | {
    type: 'continuous';
} & ContinuousMeasurement | {
    type: 'unitless';
} & UnitlessMeasurement;
export declare function MeasurementFromJSON(json: any): Measurement;
export declare function MeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Measurement;
export declare function MeasurementToJSON(json: any): any;
export declare function MeasurementToJSONTyped(value?: Measurement | null, ignoreDiscriminator?: boolean): any;
