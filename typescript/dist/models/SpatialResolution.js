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
exports.SpatialResolutionToJSON = exports.SpatialResolutionFromJSONTyped = exports.SpatialResolutionFromJSON = exports.instanceOfSpatialResolution = void 0;
/**
 * Check if a given object implements the SpatialResolution interface.
 */
function instanceOfSpatialResolution(value) {
    let isInstance = true;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;
    return isInstance;
}
exports.instanceOfSpatialResolution = instanceOfSpatialResolution;
function SpatialResolutionFromJSON(json) {
    return SpatialResolutionFromJSONTyped(json, false);
}
exports.SpatialResolutionFromJSON = SpatialResolutionFromJSON;
function SpatialResolutionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'x': json['x'],
        'y': json['y'],
    };
}
exports.SpatialResolutionFromJSONTyped = SpatialResolutionFromJSONTyped;
function SpatialResolutionToJSON(value) {
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
exports.SpatialResolutionToJSON = SpatialResolutionToJSON;
