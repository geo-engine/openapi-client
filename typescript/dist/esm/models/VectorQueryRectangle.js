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
import { SpatialResolutionFromJSON, SpatialResolutionToJSON, } from './SpatialResolution';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
import { BoundingBox2DFromJSON, BoundingBox2DToJSON, } from './BoundingBox2D';
/**
 * Check if a given object implements the VectorQueryRectangle interface.
 */
export function instanceOfVectorQueryRectangle(value) {
    if (!('spatialBounds' in value) || value['spatialBounds'] === undefined)
        return false;
    if (!('spatialResolution' in value) || value['spatialResolution'] === undefined)
        return false;
    if (!('timeInterval' in value) || value['timeInterval'] === undefined)
        return false;
    return true;
}
export function VectorQueryRectangleFromJSON(json) {
    return VectorQueryRectangleFromJSONTyped(json, false);
}
export function VectorQueryRectangleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'spatialBounds': BoundingBox2DFromJSON(json['spatialBounds']),
        'spatialResolution': SpatialResolutionFromJSON(json['spatialResolution']),
        'timeInterval': TimeIntervalFromJSON(json['timeInterval']),
    };
}
export function VectorQueryRectangleToJSON(json) {
    return VectorQueryRectangleToJSONTyped(json, false);
}
export function VectorQueryRectangleToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'spatialBounds': BoundingBox2DToJSON(value['spatialBounds']),
        'spatialResolution': SpatialResolutionToJSON(value['spatialResolution']),
        'timeInterval': TimeIntervalToJSON(value['timeInterval']),
    };
}
