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
import { TypedOperatorOperatorFromJSON, TypedOperatorOperatorToJSON, } from './TypedOperatorOperator';
/**
 * @export
 */
export const TypedOperatorTypeEnum = {
    Vector: 'Vector',
    Raster: 'Raster',
    Plot: 'Plot'
};
/**
 * Check if a given object implements the TypedOperator interface.
 */
export function instanceOfTypedOperator(value) {
    let isInstance = true;
    isInstance = isInstance && "operator" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function TypedOperatorFromJSON(json) {
    return TypedOperatorFromJSONTyped(json, false);
}
export function TypedOperatorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'operator': TypedOperatorOperatorFromJSON(json['operator']),
        'type': json['type'],
    };
}
export function TypedOperatorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'operator': TypedOperatorOperatorToJSON(value.operator),
        'type': value.type,
    };
}
