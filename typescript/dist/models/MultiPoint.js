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
exports.MultiPointToJSON = exports.MultiPointFromJSONTyped = exports.MultiPointFromJSON = exports.instanceOfMultiPoint = void 0;
const Coordinate2D_1 = require("./Coordinate2D");
/**
 * Check if a given object implements the MultiPoint interface.
 */
function instanceOfMultiPoint(value) {
    if (!('coordinates' in value))
        return false;
    return true;
}
exports.instanceOfMultiPoint = instanceOfMultiPoint;
function MultiPointFromJSON(json) {
    return MultiPointFromJSONTyped(json, false);
}
exports.MultiPointFromJSON = MultiPointFromJSON;
function MultiPointFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'coordinates': (json['coordinates'].map(Coordinate2D_1.Coordinate2DFromJSON)),
    };
}
exports.MultiPointFromJSONTyped = MultiPointFromJSONTyped;
function MultiPointToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'coordinates': (value['coordinates'].map(Coordinate2D_1.Coordinate2DToJSON)),
    };
}
exports.MultiPointToJSON = MultiPointToJSON;
