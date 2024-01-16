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
exports.TypedResultDescriptorToJSON = exports.TypedResultDescriptorFromJSONTyped = exports.TypedResultDescriptorFromJSON = void 0;
const PlotResultDescriptorWithType_1 = require("./PlotResultDescriptorWithType");
const RasterResultDescriptorWithType_1 = require("./RasterResultDescriptorWithType");
const VectorResultDescriptorWithType_1 = require("./VectorResultDescriptorWithType");
function TypedResultDescriptorFromJSON(json) {
    return TypedResultDescriptorFromJSONTyped(json, false);
}
exports.TypedResultDescriptorFromJSON = TypedResultDescriptorFromJSON;
function TypedResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'plot':
            return Object.assign(Object.assign({}, (0, PlotResultDescriptorWithType_1.PlotResultDescriptorWithTypeFromJSONTyped)(json, true)), { type: 'plot' });
        case 'raster':
            return Object.assign(Object.assign({}, (0, RasterResultDescriptorWithType_1.RasterResultDescriptorWithTypeFromJSONTyped)(json, true)), { type: 'raster' });
        case 'vector':
            return Object.assign(Object.assign({}, (0, VectorResultDescriptorWithType_1.VectorResultDescriptorWithTypeFromJSONTyped)(json, true)), { type: 'vector' });
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${json['type']}'`);
    }
}
exports.TypedResultDescriptorFromJSONTyped = TypedResultDescriptorFromJSONTyped;
function TypedResultDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'plot':
            return (0, PlotResultDescriptorWithType_1.PlotResultDescriptorWithTypeToJSON)(value);
        case 'raster':
            return (0, RasterResultDescriptorWithType_1.RasterResultDescriptorWithTypeToJSON)(value);
        case 'vector':
            return (0, VectorResultDescriptorWithType_1.VectorResultDescriptorWithTypeToJSON)(value);
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${value['type']}'`);
    }
}
exports.TypedResultDescriptorToJSON = TypedResultDescriptorToJSON;
