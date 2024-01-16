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
exports.SymbologyToJSON = exports.SymbologyFromJSONTyped = exports.SymbologyFromJSON = void 0;
const LineSymbologyWithType_1 = require("./LineSymbologyWithType");
const PointSymbologyWithType_1 = require("./PointSymbologyWithType");
const PolygonSymbologyWithType_1 = require("./PolygonSymbologyWithType");
const RasterSymbologyWithType_1 = require("./RasterSymbologyWithType");
function SymbologyFromJSON(json) {
    return SymbologyFromJSONTyped(json, false);
}
exports.SymbologyFromJSON = SymbologyFromJSON;
function SymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'line':
            return Object.assign(Object.assign({}, (0, LineSymbologyWithType_1.LineSymbologyWithTypeFromJSONTyped)(json, true)), { type: 'line' });
        case 'point':
            return Object.assign(Object.assign({}, (0, PointSymbologyWithType_1.PointSymbologyWithTypeFromJSONTyped)(json, true)), { type: 'point' });
        case 'polygon':
            return Object.assign(Object.assign({}, (0, PolygonSymbologyWithType_1.PolygonSymbologyWithTypeFromJSONTyped)(json, true)), { type: 'polygon' });
        case 'raster':
            return Object.assign(Object.assign({}, (0, RasterSymbologyWithType_1.RasterSymbologyWithTypeFromJSONTyped)(json, true)), { type: 'raster' });
        default:
            throw new Error(`No variant of Symbology exists with 'type=${json['type']}'`);
    }
}
exports.SymbologyFromJSONTyped = SymbologyFromJSONTyped;
function SymbologyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'line':
            return (0, LineSymbologyWithType_1.LineSymbologyWithTypeToJSON)(value);
        case 'point':
            return (0, PointSymbologyWithType_1.PointSymbologyWithTypeToJSON)(value);
        case 'polygon':
            return (0, PolygonSymbologyWithType_1.PolygonSymbologyWithTypeToJSON)(value);
        case 'raster':
            return (0, RasterSymbologyWithType_1.RasterSymbologyWithTypeToJSON)(value);
        default:
            throw new Error(`No variant of Symbology exists with 'type=${value['type']}'`);
    }
}
exports.SymbologyToJSON = SymbologyToJSON;
