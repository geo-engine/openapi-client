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
import { SpatialPartition2DFromJSON, SpatialPartition2DToJSON, } from './SpatialPartition2D';
import { SpatialResolutionFromJSON, SpatialResolutionToJSON, } from './SpatialResolution';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * Check if a given object implements the RasterQueryRectangle interface.
 */
export function instanceOfRasterQueryRectangle(value) {
    let isInstance = true;
    isInstance = isInstance && "spatialBounds" in value;
    isInstance = isInstance && "spatialResolution" in value;
    isInstance = isInstance && "timeInterval" in value;
    return isInstance;
}
export function RasterQueryRectangleFromJSON(json) {
    return RasterQueryRectangleFromJSONTyped(json, false);
}
export function RasterQueryRectangleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'spatialBounds': SpatialPartition2DFromJSON(json['spatialBounds']),
        'spatialResolution': SpatialResolutionFromJSON(json['spatialResolution']),
        'timeInterval': TimeIntervalFromJSON(json['timeInterval']),
    };
}
export function RasterQueryRectangleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'spatialBounds': SpatialPartition2DToJSON(value.spatialBounds),
        'spatialResolution': SpatialResolutionToJSON(value.spatialResolution),
        'timeInterval': TimeIntervalToJSON(value.timeInterval),
    };
}
