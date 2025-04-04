"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineSymbologyToJSONTyped = exports.LineSymbologyToJSON = exports.LineSymbologyFromJSONTyped = exports.LineSymbologyFromJSON = exports.instanceOfLineSymbology = exports.LineSymbologyTypeEnum = void 0;
const TextSymbology_1 = require("./TextSymbology");
const StrokeParam_1 = require("./StrokeParam");
/**
 * @export
 */
exports.LineSymbologyTypeEnum = {
    Line: 'line'
};
/**
 * Check if a given object implements the LineSymbology interface.
 */
function instanceOfLineSymbology(value) {
    if (!('autoSimplified' in value) || value['autoSimplified'] === undefined)
        return false;
    if (!('stroke' in value) || value['stroke'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfLineSymbology = instanceOfLineSymbology;
function LineSymbologyFromJSON(json) {
    return LineSymbologyFromJSONTyped(json, false);
}
exports.LineSymbologyFromJSON = LineSymbologyFromJSON;
function LineSymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'autoSimplified': json['autoSimplified'],
        'stroke': (0, StrokeParam_1.StrokeParamFromJSON)(json['stroke']),
        'text': json['text'] == null ? undefined : (0, TextSymbology_1.TextSymbologyFromJSON)(json['text']),
        'type': json['type'],
    };
}
exports.LineSymbologyFromJSONTyped = LineSymbologyFromJSONTyped;
function LineSymbologyToJSON(json) {
    return LineSymbologyToJSONTyped(json, false);
}
exports.LineSymbologyToJSON = LineSymbologyToJSON;
function LineSymbologyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'autoSimplified': value['autoSimplified'],
        'stroke': (0, StrokeParam_1.StrokeParamToJSON)(value['stroke']),
        'text': (0, TextSymbology_1.TextSymbologyToJSON)(value['text']),
        'type': value['type'],
    };
}
exports.LineSymbologyToJSONTyped = LineSymbologyToJSONTyped;
