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
exports.ClassificationMeasurementToJSON = exports.ClassificationMeasurementFromJSONTyped = exports.ClassificationMeasurementFromJSON = exports.instanceOfClassificationMeasurement = void 0;
/**
 * Check if a given object implements the ClassificationMeasurement interface.
 */
function instanceOfClassificationMeasurement(value) {
    let isInstance = true;
    isInstance = isInstance && "classes" in value;
    isInstance = isInstance && "measurement" in value;
    return isInstance;
}
exports.instanceOfClassificationMeasurement = instanceOfClassificationMeasurement;
function ClassificationMeasurementFromJSON(json) {
    return ClassificationMeasurementFromJSONTyped(json, false);
}
exports.ClassificationMeasurementFromJSON = ClassificationMeasurementFromJSON;
function ClassificationMeasurementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classes': json['classes'],
        'measurement': json['measurement'],
    };
}
exports.ClassificationMeasurementFromJSONTyped = ClassificationMeasurementFromJSONTyped;
function ClassificationMeasurementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classes': value.classes,
        'measurement': value.measurement,
    };
}
exports.ClassificationMeasurementToJSON = ClassificationMeasurementToJSON;
