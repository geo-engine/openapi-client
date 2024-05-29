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
exports.TypedResultDescriptorToJSON = exports.TypedResultDescriptorFromJSONTyped = exports.TypedResultDescriptorFromJSON = void 0;
const TypedResultDescriptorPlot_1 = require("./TypedResultDescriptorPlot");
const TypedResultDescriptorRaster_1 = require("./TypedResultDescriptorRaster");
const TypedResultDescriptorVector_1 = require("./TypedResultDescriptorVector");
function TypedResultDescriptorFromJSON(json) {
    return TypedResultDescriptorFromJSONTyped(json, false);
}
exports.TypedResultDescriptorFromJSON = TypedResultDescriptorFromJSON;
function TypedResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'plot':
            return Object.assign(Object.assign({}, (0, TypedResultDescriptorPlot_1.TypedResultDescriptorPlotFromJSONTyped)(json, true)), { type: 'plot' });
        case 'raster':
            return Object.assign(Object.assign({}, (0, TypedResultDescriptorRaster_1.TypedResultDescriptorRasterFromJSONTyped)(json, true)), { type: 'raster' });
        case 'vector':
            return Object.assign(Object.assign({}, (0, TypedResultDescriptorVector_1.TypedResultDescriptorVectorFromJSONTyped)(json, true)), { type: 'vector' });
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${json['type']}'`);
    }
}
exports.TypedResultDescriptorFromJSONTyped = TypedResultDescriptorFromJSONTyped;
function TypedResultDescriptorToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'plot':
            return (0, TypedResultDescriptorPlot_1.TypedResultDescriptorPlotToJSON)(value);
        case 'raster':
            return (0, TypedResultDescriptorRaster_1.TypedResultDescriptorRasterToJSON)(value);
        case 'vector':
            return (0, TypedResultDescriptorVector_1.TypedResultDescriptorVectorToJSON)(value);
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${value['type']}'`);
    }
}
exports.TypedResultDescriptorToJSON = TypedResultDescriptorToJSON;
