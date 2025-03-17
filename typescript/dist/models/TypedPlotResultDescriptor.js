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
exports.TypedPlotResultDescriptorTypeEnum = void 0;
exports.instanceOfTypedPlotResultDescriptor = instanceOfTypedPlotResultDescriptor;
exports.TypedPlotResultDescriptorFromJSON = TypedPlotResultDescriptorFromJSON;
exports.TypedPlotResultDescriptorFromJSONTyped = TypedPlotResultDescriptorFromJSONTyped;
exports.TypedPlotResultDescriptorToJSON = TypedPlotResultDescriptorToJSON;
exports.TypedPlotResultDescriptorToJSONTyped = TypedPlotResultDescriptorToJSONTyped;
const PlotResultDescriptor_1 = require("./PlotResultDescriptor");
/**
 * @export
 */
exports.TypedPlotResultDescriptorTypeEnum = {
    Plot: 'plot'
};
/**
 * Check if a given object implements the TypedPlotResultDescriptor interface.
 */
function instanceOfTypedPlotResultDescriptor(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function TypedPlotResultDescriptorFromJSON(json) {
    return TypedPlotResultDescriptorFromJSONTyped(json, false);
}
function TypedPlotResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, PlotResultDescriptor_1.PlotResultDescriptorFromJSONTyped)(json, true)), { 'type': json['type'] });
}
function TypedPlotResultDescriptorToJSON(json) {
    return TypedPlotResultDescriptorToJSONTyped(json, false);
}
function TypedPlotResultDescriptorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, PlotResultDescriptor_1.PlotResultDescriptorToJSONTyped)(value, true)), { 'type': value['type'] });
}
