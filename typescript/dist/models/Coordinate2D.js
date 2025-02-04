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
exports.Coordinate2DToJSON = exports.Coordinate2DFromJSONTyped = exports.Coordinate2DFromJSON = exports.instanceOfCoordinate2D = void 0;
/**
 * Check if a given object implements the Coordinate2D interface.
 */
function instanceOfCoordinate2D(value) {
    let isInstance = true;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;
    return isInstance;
}
exports.instanceOfCoordinate2D = instanceOfCoordinate2D;
function Coordinate2DFromJSON(json) {
    return Coordinate2DFromJSONTyped(json, false);
}
exports.Coordinate2DFromJSON = Coordinate2DFromJSON;
function Coordinate2DFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'x': json['x'],
        'y': json['y'],
    };
}
exports.Coordinate2DFromJSONTyped = Coordinate2DFromJSONTyped;
function Coordinate2DToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'x': value.x,
        'y': value.y,
    };
}
exports.Coordinate2DToJSON = Coordinate2DToJSON;
