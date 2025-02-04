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
import { MultiLineStringFromJSON, MultiLineStringToJSON, } from './MultiLineString';
/**
 * Check if a given object implements the TypedGeometryOneOf2 interface.
 */
export function instanceOfTypedGeometryOneOf2(value) {
    let isInstance = true;
    isInstance = isInstance && "multiLineString" in value;
    return isInstance;
}
export function TypedGeometryOneOf2FromJSON(json) {
    return TypedGeometryOneOf2FromJSONTyped(json, false);
}
export function TypedGeometryOneOf2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'multiLineString': MultiLineStringFromJSON(json['MultiLineString']),
    };
}
export function TypedGeometryOneOf2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'MultiLineString': MultiLineStringToJSON(value.multiLineString),
    };
}
