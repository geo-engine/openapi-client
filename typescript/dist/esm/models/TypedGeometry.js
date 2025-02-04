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
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, TypedGeometryOneOfFromJSONTyped(json, true)), TypedGeometryOneOf1FromJSONTyped(json, true)), TypedGeometryOneOf2FromJSONTyped(json, true)), TypedGeometryOneOf3FromJSONTyped(json, true));
}
export function TypedGeometryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
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
