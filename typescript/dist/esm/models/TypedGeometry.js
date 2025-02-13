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
import { instanceOfTypedGeometryOneOf, TypedGeometryOneOfFromJSONTyped, TypedGeometryOneOfToJSON, } from './TypedGeometryOneOf';
import { instanceOfTypedGeometryOneOf1, TypedGeometryOneOf1FromJSONTyped, TypedGeometryOneOf1ToJSON, } from './TypedGeometryOneOf1';
import { instanceOfTypedGeometryOneOf2, TypedGeometryOneOf2FromJSONTyped, TypedGeometryOneOf2ToJSON, } from './TypedGeometryOneOf2';
import { instanceOfTypedGeometryOneOf3, TypedGeometryOneOf3FromJSONTyped, TypedGeometryOneOf3ToJSON, } from './TypedGeometryOneOf3';
export function TypedGeometryFromJSON(json) {
    return TypedGeometryFromJSONTyped(json, false);
}
export function TypedGeometryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if (instanceOfTypedGeometryOneOf(json)) {
        return TypedGeometryOneOfFromJSONTyped(json, true);
    }
    if (instanceOfTypedGeometryOneOf1(json)) {
        return TypedGeometryOneOf1FromJSONTyped(json, true);
    }
    if (instanceOfTypedGeometryOneOf2(json)) {
        return TypedGeometryOneOf2FromJSONTyped(json, true);
    }
    if (instanceOfTypedGeometryOneOf3(json)) {
        return TypedGeometryOneOf3FromJSONTyped(json, true);
    }
    return {};
}
export function TypedGeometryToJSON(json) {
    return TypedGeometryToJSONTyped(json, false);
}
export function TypedGeometryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    if (instanceOfTypedGeometryOneOf(value)) {
        return TypedGeometryOneOfToJSON(value);
    }
    if (instanceOfTypedGeometryOneOf1(value)) {
        return TypedGeometryOneOf1ToJSON(value);
    }
    if (instanceOfTypedGeometryOneOf2(value)) {
        return TypedGeometryOneOf2ToJSON(value);
    }
    if (instanceOfTypedGeometryOneOf3(value)) {
        return TypedGeometryOneOf3ToJSON(value);
    }
    return {};
}
