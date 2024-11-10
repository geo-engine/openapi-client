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
exports.RasterColorizerToJSON = exports.RasterColorizerFromJSONTyped = exports.RasterColorizerFromJSON = void 0;
const MultiBandRasterColorizer_1 = require("./MultiBandRasterColorizer");
const SingleBandRasterColorizer_1 = require("./SingleBandRasterColorizer");
function RasterColorizerFromJSON(json) {
    return RasterColorizerFromJSONTyped(json, false);
}
exports.RasterColorizerFromJSON = RasterColorizerFromJSON;
function RasterColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'multiBand':
            return Object.assign(Object.assign({}, (0, MultiBandRasterColorizer_1.MultiBandRasterColorizerFromJSONTyped)(json, true)), { type: 'multiBand' });
        case 'singleBand':
            return Object.assign(Object.assign({}, (0, SingleBandRasterColorizer_1.SingleBandRasterColorizerFromJSONTyped)(json, true)), { type: 'singleBand' });
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${json['type']}'`);
    }
}
exports.RasterColorizerFromJSONTyped = RasterColorizerFromJSONTyped;
function RasterColorizerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'multiBand':
            return (0, MultiBandRasterColorizer_1.MultiBandRasterColorizerToJSON)(value);
        case 'singleBand':
            return (0, SingleBandRasterColorizer_1.SingleBandRasterColorizerToJSON)(value);
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${value['type']}'`);
    }
}
exports.RasterColorizerToJSON = RasterColorizerToJSON;
