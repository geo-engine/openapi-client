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
exports.SingleBandRasterColorizerTypeEnum = void 0;
exports.instanceOfSingleBandRasterColorizer = instanceOfSingleBandRasterColorizer;
exports.SingleBandRasterColorizerFromJSON = SingleBandRasterColorizerFromJSON;
exports.SingleBandRasterColorizerFromJSONTyped = SingleBandRasterColorizerFromJSONTyped;
exports.SingleBandRasterColorizerToJSON = SingleBandRasterColorizerToJSON;
exports.SingleBandRasterColorizerToJSONTyped = SingleBandRasterColorizerToJSONTyped;
const Colorizer_1 = require("./Colorizer");
/**
 * @export
 */
exports.SingleBandRasterColorizerTypeEnum = {
    SingleBand: 'singleBand'
};
/**
 * Check if a given object implements the SingleBandRasterColorizer interface.
 */
function instanceOfSingleBandRasterColorizer(value) {
    if (!('band' in value) || value['band'] === undefined)
        return false;
    if (!('bandColorizer' in value) || value['bandColorizer'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function SingleBandRasterColorizerFromJSON(json) {
    return SingleBandRasterColorizerFromJSONTyped(json, false);
}
function SingleBandRasterColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'band': json['band'],
        'bandColorizer': (0, Colorizer_1.ColorizerFromJSON)(json['bandColorizer']),
        'type': json['type'],
    };
}
function SingleBandRasterColorizerToJSON(json) {
    return SingleBandRasterColorizerToJSONTyped(json, false);
}
function SingleBandRasterColorizerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'band': value['band'],
        'bandColorizer': (0, Colorizer_1.ColorizerToJSON)(value['bandColorizer']),
        'type': value['type'],
    };
}
