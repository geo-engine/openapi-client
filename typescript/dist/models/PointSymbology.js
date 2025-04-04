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
exports.PointSymbologyToJSONTyped = exports.PointSymbologyToJSON = exports.PointSymbologyFromJSONTyped = exports.PointSymbologyFromJSON = exports.instanceOfPointSymbology = exports.PointSymbologyTypeEnum = void 0;
const TextSymbology_1 = require("./TextSymbology");
const StrokeParam_1 = require("./StrokeParam");
const NumberParam_1 = require("./NumberParam");
const ColorParam_1 = require("./ColorParam");
/**
 * @export
 */
exports.PointSymbologyTypeEnum = {
    Point: 'point'
};
/**
 * Check if a given object implements the PointSymbology interface.
 */
function instanceOfPointSymbology(value) {
    if (!('fillColor' in value) || value['fillColor'] === undefined)
        return false;
    if (!('radius' in value) || value['radius'] === undefined)
        return false;
    if (!('stroke' in value) || value['stroke'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfPointSymbology = instanceOfPointSymbology;
function PointSymbologyFromJSON(json) {
    return PointSymbologyFromJSONTyped(json, false);
}
exports.PointSymbologyFromJSON = PointSymbologyFromJSON;
function PointSymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fillColor': (0, ColorParam_1.ColorParamFromJSON)(json['fillColor']),
        'radius': (0, NumberParam_1.NumberParamFromJSON)(json['radius']),
        'stroke': (0, StrokeParam_1.StrokeParamFromJSON)(json['stroke']),
        'text': json['text'] == null ? undefined : (0, TextSymbology_1.TextSymbologyFromJSON)(json['text']),
        'type': json['type'],
    };
}
exports.PointSymbologyFromJSONTyped = PointSymbologyFromJSONTyped;
function PointSymbologyToJSON(json) {
    return PointSymbologyToJSONTyped(json, false);
}
exports.PointSymbologyToJSON = PointSymbologyToJSON;
function PointSymbologyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fillColor': (0, ColorParam_1.ColorParamToJSON)(value['fillColor']),
        'radius': (0, NumberParam_1.NumberParamToJSON)(value['radius']),
        'stroke': (0, StrokeParam_1.StrokeParamToJSON)(value['stroke']),
        'text': (0, TextSymbology_1.TextSymbologyToJSON)(value['text']),
        'type': value['type'],
    };
}
exports.PointSymbologyToJSONTyped = PointSymbologyToJSONTyped;
