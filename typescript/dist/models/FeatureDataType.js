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
exports.FeatureDataType = void 0;
exports.instanceOfFeatureDataType = instanceOfFeatureDataType;
exports.FeatureDataTypeFromJSON = FeatureDataTypeFromJSON;
exports.FeatureDataTypeFromJSONTyped = FeatureDataTypeFromJSONTyped;
exports.FeatureDataTypeToJSON = FeatureDataTypeToJSON;
exports.FeatureDataTypeToJSONTyped = FeatureDataTypeToJSONTyped;
/**
 *
 * @export
 */
exports.FeatureDataType = {
    Category: 'category',
    Int: 'int',
    Float: 'float',
    Text: 'text',
    Bool: 'bool',
    DateTime: 'dateTime'
};
function instanceOfFeatureDataType(value) {
    for (const key in exports.FeatureDataType) {
        if (Object.prototype.hasOwnProperty.call(exports.FeatureDataType, key)) {
            if (exports.FeatureDataType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function FeatureDataTypeFromJSON(json) {
    return FeatureDataTypeFromJSONTyped(json, false);
}
function FeatureDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function FeatureDataTypeToJSON(value) {
    return value;
}
function FeatureDataTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
