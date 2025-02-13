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
exports.instanceOfVectorColumnInfo = instanceOfVectorColumnInfo;
exports.VectorColumnInfoFromJSON = VectorColumnInfoFromJSON;
exports.VectorColumnInfoFromJSONTyped = VectorColumnInfoFromJSONTyped;
exports.VectorColumnInfoToJSON = VectorColumnInfoToJSON;
exports.VectorColumnInfoToJSONTyped = VectorColumnInfoToJSONTyped;
const Measurement_1 = require("./Measurement");
const FeatureDataType_1 = require("./FeatureDataType");
/**
 * Check if a given object implements the VectorColumnInfo interface.
 */
function instanceOfVectorColumnInfo(value) {
    if (!('dataType' in value) || value['dataType'] === undefined)
        return false;
    if (!('measurement' in value) || value['measurement'] === undefined)
        return false;
    return true;
}
function VectorColumnInfoFromJSON(json) {
    return VectorColumnInfoFromJSONTyped(json, false);
}
function VectorColumnInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataType': (0, FeatureDataType_1.FeatureDataTypeFromJSON)(json['dataType']),
        'measurement': (0, Measurement_1.MeasurementFromJSON)(json['measurement']),
    };
}
function VectorColumnInfoToJSON(json) {
    return VectorColumnInfoToJSONTyped(json, false);
}
function VectorColumnInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'dataType': (0, FeatureDataType_1.FeatureDataTypeToJSON)(value['dataType']),
        'measurement': (0, Measurement_1.MeasurementToJSON)(value['measurement']),
    };
}
