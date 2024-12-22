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
exports.ColorizerToJSON = exports.ColorizerFromJSONTyped = exports.ColorizerFromJSON = void 0;
const LinearGradient_1 = require("./LinearGradient");
const LogarithmicGradient_1 = require("./LogarithmicGradient");
const PaletteColorizer_1 = require("./PaletteColorizer");
function ColorizerFromJSON(json) {
    return ColorizerFromJSONTyped(json, false);
}
exports.ColorizerFromJSON = ColorizerFromJSON;
function ColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'linearGradient':
            return Object.assign(Object.assign({}, (0, LinearGradient_1.LinearGradientFromJSONTyped)(json, true)), { type: 'linearGradient' });
        case 'logarithmicGradient':
            return Object.assign(Object.assign({}, (0, LogarithmicGradient_1.LogarithmicGradientFromJSONTyped)(json, true)), { type: 'logarithmicGradient' });
        case 'palette':
            return Object.assign(Object.assign({}, (0, PaletteColorizer_1.PaletteColorizerFromJSONTyped)(json, true)), { type: 'palette' });
        default:
            throw new Error(`No variant of Colorizer exists with 'type=${json['type']}'`);
    }
}
exports.ColorizerFromJSONTyped = ColorizerFromJSONTyped;
function ColorizerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'linearGradient':
            return (0, LinearGradient_1.LinearGradientToJSON)(value);
        case 'logarithmicGradient':
            return (0, LogarithmicGradient_1.LogarithmicGradientToJSON)(value);
        case 'palette':
            return (0, PaletteColorizer_1.PaletteColorizerToJSON)(value);
        default:
            throw new Error(`No variant of Colorizer exists with 'type=${value['type']}'`);
    }
}
exports.ColorizerToJSON = ColorizerToJSON;
