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
exports.LinearGradientToJSON = exports.LinearGradientFromJSONTyped = exports.LinearGradientFromJSON = exports.instanceOfLinearGradient = void 0;
const Breakpoint_1 = require("./Breakpoint");
/**
 * Check if a given object implements the LinearGradient interface.
 */
function instanceOfLinearGradient(value) {
    if (!('breakpoints' in value) || value['breakpoints'] === undefined)
        return false;
    if (!('noDataColor' in value) || value['noDataColor'] === undefined)
        return false;
    if (!('overColor' in value) || value['overColor'] === undefined)
        return false;
    if (!('underColor' in value) || value['underColor'] === undefined)
        return false;
    return true;
}
exports.instanceOfLinearGradient = instanceOfLinearGradient;
function LinearGradientFromJSON(json) {
    return LinearGradientFromJSONTyped(json, false);
}
exports.LinearGradientFromJSON = LinearGradientFromJSON;
function LinearGradientFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'breakpoints': (json['breakpoints'].map(Breakpoint_1.BreakpointFromJSON)),
        'noDataColor': json['noDataColor'],
        'overColor': json['overColor'],
        'underColor': json['underColor'],
    };
}
exports.LinearGradientFromJSONTyped = LinearGradientFromJSONTyped;
function LinearGradientToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'breakpoints': (value['breakpoints'].map(Breakpoint_1.BreakpointToJSON)),
        'noDataColor': value['noDataColor'],
        'overColor': value['overColor'],
        'underColor': value['underColor'],
    };
}
exports.LinearGradientToJSON = LinearGradientToJSON;
