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
exports.TextSymbologyToJSON = exports.TextSymbologyFromJSONTyped = exports.TextSymbologyFromJSON = exports.instanceOfTextSymbology = void 0;
const ColorParam_1 = require("./ColorParam");
const StrokeParam_1 = require("./StrokeParam");
/**
 * Check if a given object implements the TextSymbology interface.
 */
function instanceOfTextSymbology(value) {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;
    isInstance = isInstance && "fillColor" in value;
    isInstance = isInstance && "stroke" in value;
    return isInstance;
}
exports.instanceOfTextSymbology = instanceOfTextSymbology;
function TextSymbologyFromJSON(json) {
    return TextSymbologyFromJSONTyped(json, false);
}
exports.TextSymbologyFromJSON = TextSymbologyFromJSON;
function TextSymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attribute': json['attribute'],
        'fillColor': (0, ColorParam_1.ColorParamFromJSON)(json['fillColor']),
        'stroke': (0, StrokeParam_1.StrokeParamFromJSON)(json['stroke']),
    };
}
exports.TextSymbologyFromJSONTyped = TextSymbologyFromJSONTyped;
function TextSymbologyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attribute': value.attribute,
        'fillColor': (0, ColorParam_1.ColorParamToJSON)(value.fillColor),
        'stroke': (0, StrokeParam_1.StrokeParamToJSON)(value.stroke),
    };
}
exports.TextSymbologyToJSON = TextSymbologyToJSON;
