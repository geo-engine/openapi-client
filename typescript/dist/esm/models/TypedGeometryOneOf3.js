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
import { MultiPolygonFromJSON, MultiPolygonToJSON, } from './MultiPolygon';
/**
 * Check if a given object implements the TypedGeometryOneOf3 interface.
 */
export function instanceOfTypedGeometryOneOf3(value) {
    let isInstance = true;
    isInstance = isInstance && "multiPolygon" in value;
    return isInstance;
}
export function TypedGeometryOneOf3FromJSON(json) {
    return TypedGeometryOneOf3FromJSONTyped(json, false);
}
export function TypedGeometryOneOf3FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'multiPolygon': MultiPolygonFromJSON(json['MultiPolygon']),
    };
}
export function TypedGeometryOneOf3ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'MultiPolygon': MultiPolygonToJSON(value.multiPolygon),
    };
}
