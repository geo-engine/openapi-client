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
exports.TypedResultDescriptorFromJSON = TypedResultDescriptorFromJSON;
exports.TypedResultDescriptorFromJSONTyped = TypedResultDescriptorFromJSONTyped;
exports.TypedResultDescriptorToJSON = TypedResultDescriptorToJSON;
exports.TypedResultDescriptorToJSONTyped = TypedResultDescriptorToJSONTyped;
const TypedPlotResultDescriptor_1 = require("./TypedPlotResultDescriptor");
const TypedRasterResultDescriptor_1 = require("./TypedRasterResultDescriptor");
const TypedVectorResultDescriptor_1 = require("./TypedVectorResultDescriptor");
function TypedResultDescriptorFromJSON(json) {
    return TypedResultDescriptorFromJSONTyped(json, false);
}
function TypedResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'plot':
            return Object.assign({}, (0, TypedPlotResultDescriptor_1.TypedPlotResultDescriptorFromJSONTyped)(json, true), { type: 'plot' });
        case 'raster':
            return Object.assign({}, (0, TypedRasterResultDescriptor_1.TypedRasterResultDescriptorFromJSONTyped)(json, true), { type: 'raster' });
        case 'vector':
            return Object.assign({}, (0, TypedVectorResultDescriptor_1.TypedVectorResultDescriptorFromJSONTyped)(json, true), { type: 'vector' });
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${json['type']}'`);
    }
}
function TypedResultDescriptorToJSON(json) {
    return TypedResultDescriptorToJSONTyped(json, false);
}
function TypedResultDescriptorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'plot':
            return Object.assign({}, (0, TypedPlotResultDescriptor_1.TypedPlotResultDescriptorToJSON)(value), { type: 'plot' });
        case 'raster':
            return Object.assign({}, (0, TypedRasterResultDescriptor_1.TypedRasterResultDescriptorToJSON)(value), { type: 'raster' });
        case 'vector':
            return Object.assign({}, (0, TypedVectorResultDescriptor_1.TypedVectorResultDescriptorToJSON)(value), { type: 'vector' });
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${value['type']}'`);
    }
}
