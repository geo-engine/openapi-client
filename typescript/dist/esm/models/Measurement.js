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
import { ClassificationMeasurementFromJSONTyped, ClassificationMeasurementToJSON, } from './ClassificationMeasurement';
import { ContinuousMeasurementFromJSONTyped, ContinuousMeasurementToJSON, } from './ContinuousMeasurement';
import { UnitlessMeasurementFromJSONTyped, UnitlessMeasurementToJSON, } from './UnitlessMeasurement';
export function MeasurementFromJSON(json) {
    return MeasurementFromJSONTyped(json, false);
}
export function MeasurementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'classification':
            return Object.assign(Object.assign({}, ClassificationMeasurementFromJSONTyped(json, true)), { type: 'classification' });
        case 'continuous':
            return Object.assign(Object.assign({}, ContinuousMeasurementFromJSONTyped(json, true)), { type: 'continuous' });
        case 'unitless':
            return Object.assign(Object.assign({}, UnitlessMeasurementFromJSONTyped(json, true)), { type: 'unitless' });
        default:
            throw new Error(`No variant of Measurement exists with 'type=${json['type']}'`);
    }
}
export function MeasurementToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'classification':
            return ClassificationMeasurementToJSON(value);
        case 'continuous':
            return ContinuousMeasurementToJSON(value);
        case 'unitless':
            return UnitlessMeasurementToJSON(value);
        default:
            throw new Error(`No variant of Measurement exists with 'type=${value['type']}'`);
    }
}
