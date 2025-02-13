"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinuousMeasurementTypeEnum = void 0;
exports.instanceOfContinuousMeasurement = instanceOfContinuousMeasurement;
exports.ContinuousMeasurementFromJSON = ContinuousMeasurementFromJSON;
exports.ContinuousMeasurementFromJSONTyped = ContinuousMeasurementFromJSONTyped;
exports.ContinuousMeasurementToJSON = ContinuousMeasurementToJSON;
exports.ContinuousMeasurementToJSONTyped = ContinuousMeasurementToJSONTyped;
/**
 * @export
 */
exports.ContinuousMeasurementTypeEnum = {
    Continuous: 'continuous'
};
/**
 * Check if a given object implements the ContinuousMeasurement interface.
 */
function instanceOfContinuousMeasurement(value) {
    if (!('measurement' in value) || value['measurement'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function ContinuousMeasurementFromJSON(json) {
    return ContinuousMeasurementFromJSONTyped(json, false);
}
function ContinuousMeasurementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'measurement': json['measurement'],
        'type': json['type'],
        'unit': json['unit'] == null ? undefined : json['unit'],
    };
}
function ContinuousMeasurementToJSON(json) {
    return ContinuousMeasurementToJSONTyped(json, false);
}
function ContinuousMeasurementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'measurement': value['measurement'],
        'type': value['type'],
        'unit': value['unit'],
    };
}
