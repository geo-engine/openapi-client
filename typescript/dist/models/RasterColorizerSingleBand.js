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
exports.RasterColorizerSingleBandToJSON = exports.RasterColorizerSingleBandFromJSONTyped = exports.RasterColorizerSingleBandFromJSON = exports.instanceOfRasterColorizerSingleBand = exports.RasterColorizerSingleBandTypeEnum = void 0;
const Colorizer_1 = require("./Colorizer");
/**
 * @export
 */
exports.RasterColorizerSingleBandTypeEnum = {
    SingleBand: 'singleBand'
};
/**
 * Check if a given object implements the RasterColorizerSingleBand interface.
 */
function instanceOfRasterColorizerSingleBand(value) {
    let isInstance = true;
    isInstance = isInstance && "band" in value;
    isInstance = isInstance && "bandColorizer" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfRasterColorizerSingleBand = instanceOfRasterColorizerSingleBand;
function RasterColorizerSingleBandFromJSON(json) {
    return RasterColorizerSingleBandFromJSONTyped(json, false);
}
exports.RasterColorizerSingleBandFromJSON = RasterColorizerSingleBandFromJSON;
function RasterColorizerSingleBandFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'band': json['band'],
        'bandColorizer': (0, Colorizer_1.ColorizerFromJSON)(json['bandColorizer']),
        'type': json['type'],
    };
}
exports.RasterColorizerSingleBandFromJSONTyped = RasterColorizerSingleBandFromJSONTyped;
function RasterColorizerSingleBandToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'band': value.band,
        'bandColorizer': (0, Colorizer_1.ColorizerToJSON)(value.bandColorizer),
        'type': value.type,
    };
}
exports.RasterColorizerSingleBandToJSON = RasterColorizerSingleBandToJSON;
