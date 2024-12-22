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
import { MultiPointFromJSON, MultiPointToJSON, } from './MultiPoint';
/**
 * Check if a given object implements the TypedGeometryOneOf1 interface.
 */
export function instanceOfTypedGeometryOneOf1(value) {
    let isInstance = true;
    isInstance = isInstance && "multiPoint" in value;
    return isInstance;
}
export function TypedGeometryOneOf1FromJSON(json) {
    return TypedGeometryOneOf1FromJSONTyped(json, false);
}
export function TypedGeometryOneOf1FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'multiPoint': MultiPointFromJSON(json['MultiPoint']),
    };
}
export function TypedGeometryOneOf1ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'MultiPoint': MultiPointToJSON(value.multiPoint),
    };
}
