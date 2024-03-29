/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BreakpointFromJSON, BreakpointToJSON, } from './Breakpoint';
/**
 * @export
 */
export const LogarithmicGradientWithTypeTypeEnum = {
    LogarithmicGradient: 'logarithmicGradient'
};
/**
 * Check if a given object implements the LogarithmicGradientWithType interface.
 */
export function instanceOfLogarithmicGradientWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "breakpoints" in value;
    isInstance = isInstance && "noDataColor" in value;
    isInstance = isInstance && "overColor" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "underColor" in value;
    return isInstance;
}
export function LogarithmicGradientWithTypeFromJSON(json) {
    return LogarithmicGradientWithTypeFromJSONTyped(json, false);
}
export function LogarithmicGradientWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'breakpoints': (json['breakpoints'].map(BreakpointFromJSON)),
        'noDataColor': json['noDataColor'],
        'overColor': json['overColor'],
        'type': json['type'],
        'underColor': json['underColor'],
    };
}
export function LogarithmicGradientWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'breakpoints': (value.breakpoints.map(BreakpointToJSON)),
        'noDataColor': value.noDataColor,
        'overColor': value.overColor,
        'type': value.type,
        'underColor': value.underColor,
    };
}
