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
exports.ColorParamToJSONTyped = exports.ColorParamToJSON = exports.ColorParamFromJSONTyped = exports.ColorParamFromJSON = void 0;
const DerivedColor_1 = require("./DerivedColor");
const StaticColor_1 = require("./StaticColor");
function ColorParamFromJSON(json) {
    return ColorParamFromJSONTyped(json, false);
}
exports.ColorParamFromJSON = ColorParamFromJSON;
function ColorParamFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'derived':
            return Object.assign({}, (0, DerivedColor_1.DerivedColorFromJSONTyped)(json, true), { type: 'derived' });
        case 'static':
            return Object.assign({}, (0, StaticColor_1.StaticColorFromJSONTyped)(json, true), { type: 'static' });
        default:
            throw new Error(`No variant of ColorParam exists with 'type=${json['type']}'`);
    }
}
exports.ColorParamFromJSONTyped = ColorParamFromJSONTyped;
function ColorParamToJSON(json) {
    return ColorParamToJSONTyped(json, false);
}
exports.ColorParamToJSON = ColorParamToJSON;
function ColorParamToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'derived':
            return Object.assign({}, (0, DerivedColor_1.DerivedColorToJSON)(value), { type: 'derived' });
        case 'static':
            return Object.assign({}, (0, StaticColor_1.StaticColorToJSON)(value), { type: 'static' });
        default:
            throw new Error(`No variant of ColorParam exists with 'type=${value['type']}'`);
    }
}
exports.ColorParamToJSONTyped = ColorParamToJSONTyped;
