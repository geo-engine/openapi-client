"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonSymbologyToJSON = exports.PolygonSymbologyFromJSONTyped = exports.PolygonSymbologyFromJSON = exports.instanceOfPolygonSymbology = void 0;
const runtime_1 = require("../runtime");
const ColorParam_1 = require("./ColorParam");
const StrokeParam_1 = require("./StrokeParam");
const TextSymbology_1 = require("./TextSymbology");
/**
 * Check if a given object implements the PolygonSymbology interface.
 */
function instanceOfPolygonSymbology(value) {
    let isInstance = true;
    isInstance = isInstance && "autoSimplified" in value;
    isInstance = isInstance && "fillColor" in value;
    isInstance = isInstance && "stroke" in value;
    return isInstance;
}
exports.instanceOfPolygonSymbology = instanceOfPolygonSymbology;
function PolygonSymbologyFromJSON(json) {
    return PolygonSymbologyFromJSONTyped(json, false);
}
exports.PolygonSymbologyFromJSON = PolygonSymbologyFromJSON;
function PolygonSymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autoSimplified': json['autoSimplified'],
        'fillColor': (0, ColorParam_1.ColorParamFromJSON)(json['fillColor']),
        'stroke': (0, StrokeParam_1.StrokeParamFromJSON)(json['stroke']),
        'text': !(0, runtime_1.exists)(json, 'text') ? undefined : (0, TextSymbology_1.TextSymbologyFromJSON)(json['text']),
    };
}
exports.PolygonSymbologyFromJSONTyped = PolygonSymbologyFromJSONTyped;
function PolygonSymbologyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autoSimplified': value.autoSimplified,
        'fillColor': (0, ColorParam_1.ColorParamToJSON)(value.fillColor),
        'stroke': (0, StrokeParam_1.StrokeParamToJSON)(value.stroke),
        'text': (0, TextSymbology_1.TextSymbologyToJSON)(value.text),
    };
}
exports.PolygonSymbologyToJSON = PolygonSymbologyToJSON;
