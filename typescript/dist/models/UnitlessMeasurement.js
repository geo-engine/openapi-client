"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitlessMeasurementToJSON = exports.UnitlessMeasurementFromJSONTyped = exports.UnitlessMeasurementFromJSON = exports.instanceOfUnitlessMeasurement = exports.UnitlessMeasurementTypeEnum = void 0;
/**
 * @export
 */
exports.UnitlessMeasurementTypeEnum = {
    Unitless: 'unitless',
    Continuous: 'continuous',
    Classification: 'classification'
};
/**
 * Check if a given object implements the UnitlessMeasurement interface.
 */
function instanceOfUnitlessMeasurement(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfUnitlessMeasurement = instanceOfUnitlessMeasurement;
function UnitlessMeasurementFromJSON(json) {
    return UnitlessMeasurementFromJSONTyped(json, false);
}
exports.UnitlessMeasurementFromJSON = UnitlessMeasurementFromJSON;
function UnitlessMeasurementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.UnitlessMeasurementFromJSONTyped = UnitlessMeasurementFromJSONTyped;
function UnitlessMeasurementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
exports.UnitlessMeasurementToJSON = UnitlessMeasurementToJSON;
