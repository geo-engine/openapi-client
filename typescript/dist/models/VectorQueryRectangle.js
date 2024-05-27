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
exports.VectorQueryRectangleToJSON = exports.VectorQueryRectangleFromJSONTyped = exports.VectorQueryRectangleFromJSON = exports.instanceOfVectorQueryRectangle = void 0;
const SpatialResolution_1 = require("./SpatialResolution");
const TimeInterval_1 = require("./TimeInterval");
const BoundingBox2D_1 = require("./BoundingBox2D");
/**
 * Check if a given object implements the VectorQueryRectangle interface.
 */
function instanceOfVectorQueryRectangle(value) {
    if (!('spatialBounds' in value) || value['spatialBounds'] === undefined)
        return false;
    if (!('spatialResolution' in value) || value['spatialResolution'] === undefined)
        return false;
    if (!('timeInterval' in value) || value['timeInterval'] === undefined)
        return false;
    return true;
}
exports.instanceOfVectorQueryRectangle = instanceOfVectorQueryRectangle;
function VectorQueryRectangleFromJSON(json) {
    return VectorQueryRectangleFromJSONTyped(json, false);
}
exports.VectorQueryRectangleFromJSON = VectorQueryRectangleFromJSON;
function VectorQueryRectangleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'spatialBounds': (0, BoundingBox2D_1.BoundingBox2DFromJSON)(json['spatialBounds']),
        'spatialResolution': (0, SpatialResolution_1.SpatialResolutionFromJSON)(json['spatialResolution']),
        'timeInterval': (0, TimeInterval_1.TimeIntervalFromJSON)(json['timeInterval']),
    };
}
exports.VectorQueryRectangleFromJSONTyped = VectorQueryRectangleFromJSONTyped;
function VectorQueryRectangleToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'spatialBounds': (0, BoundingBox2D_1.BoundingBox2DToJSON)(value['spatialBounds']),
        'spatialResolution': (0, SpatialResolution_1.SpatialResolutionToJSON)(value['spatialResolution']),
        'timeInterval': (0, TimeInterval_1.TimeIntervalToJSON)(value['timeInterval']),
    };
}
exports.VectorQueryRectangleToJSON = VectorQueryRectangleToJSON;
