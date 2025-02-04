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
import { BoundingBox2DFromJSON, BoundingBox2DToJSON, } from './BoundingBox2D';
import { SpatialResolutionFromJSON, SpatialResolutionToJSON, } from './SpatialResolution';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * Check if a given object implements the VectorQueryRectangle interface.
 */
export function instanceOfVectorQueryRectangle(value) {
    let isInstance = true;
    isInstance = isInstance && "spatialBounds" in value;
    isInstance = isInstance && "spatialResolution" in value;
    isInstance = isInstance && "timeInterval" in value;
    return isInstance;
}
export function VectorQueryRectangleFromJSON(json) {
    return VectorQueryRectangleFromJSONTyped(json, false);
}
export function VectorQueryRectangleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'spatialBounds': BoundingBox2DFromJSON(json['spatialBounds']),
        'spatialResolution': SpatialResolutionFromJSON(json['spatialResolution']),
        'timeInterval': TimeIntervalFromJSON(json['timeInterval']),
    };
}
export function VectorQueryRectangleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'spatialBounds': BoundingBox2DToJSON(value.spatialBounds),
        'spatialResolution': SpatialResolutionToJSON(value.spatialResolution),
        'timeInterval': TimeIntervalToJSON(value.timeInterval),
    };
}
