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
exports.VectorDataTypeToJSON = exports.VectorDataTypeFromJSONTyped = exports.VectorDataTypeFromJSON = exports.VectorDataType = void 0;
/**
 * An enum that contains all possible vector data types
 * @export
 */
exports.VectorDataType = {
    Data: 'Data',
    MultiPoint: 'MultiPoint',
    MultiLineString: 'MultiLineString',
    MultiPolygon: 'MultiPolygon'
};
function VectorDataTypeFromJSON(json) {
    return VectorDataTypeFromJSONTyped(json, false);
}
exports.VectorDataTypeFromJSON = VectorDataTypeFromJSON;
function VectorDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.VectorDataTypeFromJSONTyped = VectorDataTypeFromJSONTyped;
function VectorDataTypeToJSON(value) {
    return value;
}
exports.VectorDataTypeToJSON = VectorDataTypeToJSON;
