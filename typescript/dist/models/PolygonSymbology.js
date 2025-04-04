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
exports.PolygonSymbologyToJSONTyped = exports.PolygonSymbologyToJSON = exports.PolygonSymbologyFromJSONTyped = exports.PolygonSymbologyFromJSON = exports.instanceOfPolygonSymbology = exports.PolygonSymbologyTypeEnum = void 0;
const TextSymbology_1 = require("./TextSymbology");
const StrokeParam_1 = require("./StrokeParam");
const ColorParam_1 = require("./ColorParam");
/**
 * @export
 */
exports.PolygonSymbologyTypeEnum = {
    Polygon: 'polygon'
};
/**
 * Check if a given object implements the PolygonSymbology interface.
 */
function instanceOfPolygonSymbology(value) {
    if (!('autoSimplified' in value) || value['autoSimplified'] === undefined)
        return false;
    if (!('fillColor' in value) || value['fillColor'] === undefined)
        return false;
    if (!('stroke' in value) || value['stroke'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfPolygonSymbology = instanceOfPolygonSymbology;
function PolygonSymbologyFromJSON(json) {
    return PolygonSymbologyFromJSONTyped(json, false);
}
exports.PolygonSymbologyFromJSON = PolygonSymbologyFromJSON;
function PolygonSymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'autoSimplified': json['autoSimplified'],
        'fillColor': (0, ColorParam_1.ColorParamFromJSON)(json['fillColor']),
        'stroke': (0, StrokeParam_1.StrokeParamFromJSON)(json['stroke']),
        'text': json['text'] == null ? undefined : (0, TextSymbology_1.TextSymbologyFromJSON)(json['text']),
        'type': json['type'],
    };
}
exports.PolygonSymbologyFromJSONTyped = PolygonSymbologyFromJSONTyped;
function PolygonSymbologyToJSON(json) {
    return PolygonSymbologyToJSONTyped(json, false);
}
exports.PolygonSymbologyToJSON = PolygonSymbologyToJSON;
function PolygonSymbologyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'autoSimplified': value['autoSimplified'],
        'fillColor': (0, ColorParam_1.ColorParamToJSON)(value['fillColor']),
        'stroke': (0, StrokeParam_1.StrokeParamToJSON)(value['stroke']),
        'text': (0, TextSymbology_1.TextSymbologyToJSON)(value['text']),
        'type': value['type'],
    };
}
exports.PolygonSymbologyToJSONTyped = PolygonSymbologyToJSONTyped;
