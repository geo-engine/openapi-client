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
import { Coordinate2DFromJSON, Coordinate2DToJSON, } from './Coordinate2D';
/**
 * Check if a given object implements the BoundingBox2D interface.
 */
export function instanceOfBoundingBox2D(value) {
    let isInstance = true;
    isInstance = isInstance && "lowerLeftCoordinate" in value;
    isInstance = isInstance && "upperRightCoordinate" in value;
    return isInstance;
}
export function BoundingBox2DFromJSON(json) {
    return BoundingBox2DFromJSONTyped(json, false);
}
export function BoundingBox2DFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lowerLeftCoordinate': Coordinate2DFromJSON(json['lowerLeftCoordinate']),
        'upperRightCoordinate': Coordinate2DFromJSON(json['upperRightCoordinate']),
    };
}
export function BoundingBox2DToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lowerLeftCoordinate': Coordinate2DToJSON(value.lowerLeftCoordinate),
        'upperRightCoordinate': Coordinate2DToJSON(value.upperRightCoordinate),
    };
}
