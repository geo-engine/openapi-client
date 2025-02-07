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
 * Check if a given object implements the TypedGeometryOneOf interface.
 */
export function instanceOfTypedGeometryOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
export function TypedGeometryOneOfFromJSON(json) {
    return TypedGeometryOneOfFromJSONTyped(json, false);
}
export function TypedGeometryOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': json['Data'],
    };
}
export function TypedGeometryOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Data': value.data,
    };
}
