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
/**
 * Check if a given object implements the SpatialResolution interface.
 */
export function instanceOfSpatialResolution(value) {
    let isInstance = true;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;
    return isInstance;
}
export function SpatialResolutionFromJSON(json) {
    return SpatialResolutionFromJSONTyped(json, false);
}
export function SpatialResolutionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'x': json['x'],
        'y': json['y'],
    };
}
export function SpatialResolutionToJSON(value) {
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
