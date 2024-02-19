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
exports.RasterSymbologyToJSON = exports.RasterSymbologyFromJSONTyped = exports.RasterSymbologyFromJSON = exports.instanceOfRasterSymbology = void 0;
const RasterColorizer_1 = require("./RasterColorizer");
/**
 * Check if a given object implements the RasterSymbology interface.
 */
function instanceOfRasterSymbology(value) {
    let isInstance = true;
    isInstance = isInstance && "opacity" in value;
    isInstance = isInstance && "rasterColorizer" in value;
    return isInstance;
}
exports.instanceOfRasterSymbology = instanceOfRasterSymbology;
function RasterSymbologyFromJSON(json) {
    return RasterSymbologyFromJSONTyped(json, false);
}
exports.RasterSymbologyFromJSON = RasterSymbologyFromJSON;
function RasterSymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'opacity': json['opacity'],
        'rasterColorizer': (0, RasterColorizer_1.RasterColorizerFromJSON)(json['rasterColorizer']),
    };
}
exports.RasterSymbologyFromJSONTyped = RasterSymbologyFromJSONTyped;
function RasterSymbologyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'opacity': value.opacity,
        'rasterColorizer': (0, RasterColorizer_1.RasterColorizerToJSON)(value.rasterColorizer),
    };
}
exports.RasterSymbologyToJSON = RasterSymbologyToJSON;