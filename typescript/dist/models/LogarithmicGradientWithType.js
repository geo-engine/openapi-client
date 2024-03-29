"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogarithmicGradientWithTypeToJSON = exports.LogarithmicGradientWithTypeFromJSONTyped = exports.LogarithmicGradientWithTypeFromJSON = exports.instanceOfLogarithmicGradientWithType = exports.LogarithmicGradientWithTypeTypeEnum = void 0;
const Breakpoint_1 = require("./Breakpoint");
/**
 * @export
 */
exports.LogarithmicGradientWithTypeTypeEnum = {
    LogarithmicGradient: 'logarithmicGradient'
};
/**
 * Check if a given object implements the LogarithmicGradientWithType interface.
 */
function instanceOfLogarithmicGradientWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "breakpoints" in value;
    isInstance = isInstance && "noDataColor" in value;
    isInstance = isInstance && "overColor" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "underColor" in value;
    return isInstance;
}
exports.instanceOfLogarithmicGradientWithType = instanceOfLogarithmicGradientWithType;
function LogarithmicGradientWithTypeFromJSON(json) {
    return LogarithmicGradientWithTypeFromJSONTyped(json, false);
}
exports.LogarithmicGradientWithTypeFromJSON = LogarithmicGradientWithTypeFromJSON;
function LogarithmicGradientWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'breakpoints': (json['breakpoints'].map(Breakpoint_1.BreakpointFromJSON)),
        'noDataColor': json['noDataColor'],
        'overColor': json['overColor'],
        'type': json['type'],
        'underColor': json['underColor'],
    };
}
exports.LogarithmicGradientWithTypeFromJSONTyped = LogarithmicGradientWithTypeFromJSONTyped;
function LogarithmicGradientWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'breakpoints': (value.breakpoints.map(Breakpoint_1.BreakpointToJSON)),
        'noDataColor': value.noDataColor,
        'overColor': value.overColor,
        'type': value.type,
        'underColor': value.underColor,
    };
}
exports.LogarithmicGradientWithTypeToJSON = LogarithmicGradientWithTypeToJSON;
