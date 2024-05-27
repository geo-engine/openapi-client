"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureDataTypeToJSON = exports.FeatureDataTypeFromJSONTyped = exports.FeatureDataTypeFromJSON = exports.instanceOfFeatureDataType = exports.FeatureDataType = void 0;
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
exports.instanceOfFeatureDataType = instanceOfFeatureDataType;
function FeatureDataTypeFromJSON(json) {
    return FeatureDataTypeFromJSONTyped(json, false);
}
exports.FeatureDataTypeFromJSON = FeatureDataTypeFromJSON;
function FeatureDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.FeatureDataTypeFromJSONTyped = FeatureDataTypeFromJSONTyped;
function FeatureDataTypeToJSON(value) {
    return value;
}
exports.FeatureDataTypeToJSON = FeatureDataTypeToJSON;
