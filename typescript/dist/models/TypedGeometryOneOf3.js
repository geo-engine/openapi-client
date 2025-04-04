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
exports.TypedGeometryOneOf3ToJSONTyped = exports.TypedGeometryOneOf3ToJSON = exports.TypedGeometryOneOf3FromJSONTyped = exports.TypedGeometryOneOf3FromJSON = exports.instanceOfTypedGeometryOneOf3 = void 0;
const MultiPolygon_1 = require("./MultiPolygon");
/**
 * Check if a given object implements the TypedGeometryOneOf3 interface.
 */
function instanceOfTypedGeometryOneOf3(value) {
    if (!('multiPolygon' in value) || value['multiPolygon'] === undefined)
        return false;
    return true;
}
exports.instanceOfTypedGeometryOneOf3 = instanceOfTypedGeometryOneOf3;
function TypedGeometryOneOf3FromJSON(json) {
    return TypedGeometryOneOf3FromJSONTyped(json, false);
}
exports.TypedGeometryOneOf3FromJSON = TypedGeometryOneOf3FromJSON;
function TypedGeometryOneOf3FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'multiPolygon': (0, MultiPolygon_1.MultiPolygonFromJSON)(json['MultiPolygon']),
    };
}
exports.TypedGeometryOneOf3FromJSONTyped = TypedGeometryOneOf3FromJSONTyped;
function TypedGeometryOneOf3ToJSON(json) {
    return TypedGeometryOneOf3ToJSONTyped(json, false);
}
exports.TypedGeometryOneOf3ToJSON = TypedGeometryOneOf3ToJSON;
function TypedGeometryOneOf3ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'MultiPolygon': (0, MultiPolygon_1.MultiPolygonToJSON)(value['multiPolygon']),
    };
}
exports.TypedGeometryOneOf3ToJSONTyped = TypedGeometryOneOf3ToJSONTyped;
