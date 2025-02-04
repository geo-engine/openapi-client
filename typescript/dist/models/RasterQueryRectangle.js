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
exports.RasterQueryRectangleToJSON = exports.RasterQueryRectangleFromJSONTyped = exports.RasterQueryRectangleFromJSON = exports.instanceOfRasterQueryRectangle = void 0;
const SpatialPartition2D_1 = require("./SpatialPartition2D");
const SpatialResolution_1 = require("./SpatialResolution");
const TimeInterval_1 = require("./TimeInterval");
/**
 * Check if a given object implements the RasterQueryRectangle interface.
 */
function instanceOfRasterQueryRectangle(value) {
    let isInstance = true;
    isInstance = isInstance && "spatialBounds" in value;
    isInstance = isInstance && "spatialResolution" in value;
    isInstance = isInstance && "timeInterval" in value;
    return isInstance;
}
exports.instanceOfRasterQueryRectangle = instanceOfRasterQueryRectangle;
function RasterQueryRectangleFromJSON(json) {
    return RasterQueryRectangleFromJSONTyped(json, false);
}
exports.RasterQueryRectangleFromJSON = RasterQueryRectangleFromJSON;
function RasterQueryRectangleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'spatialBounds': (0, SpatialPartition2D_1.SpatialPartition2DFromJSON)(json['spatialBounds']),
        'spatialResolution': (0, SpatialResolution_1.SpatialResolutionFromJSON)(json['spatialResolution']),
        'timeInterval': (0, TimeInterval_1.TimeIntervalFromJSON)(json['timeInterval']),
    };
}
exports.RasterQueryRectangleFromJSONTyped = RasterQueryRectangleFromJSONTyped;
function RasterQueryRectangleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'spatialBounds': (0, SpatialPartition2D_1.SpatialPartition2DToJSON)(value.spatialBounds),
        'spatialResolution': (0, SpatialResolution_1.SpatialResolutionToJSON)(value.spatialResolution),
        'timeInterval': (0, TimeInterval_1.TimeIntervalToJSON)(value.timeInterval),
    };
}
exports.RasterQueryRectangleToJSON = RasterQueryRectangleToJSON;
