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
exports.instanceOfRasterBandDescriptor = instanceOfRasterBandDescriptor;
exports.RasterBandDescriptorFromJSON = RasterBandDescriptorFromJSON;
exports.RasterBandDescriptorFromJSONTyped = RasterBandDescriptorFromJSONTyped;
exports.RasterBandDescriptorToJSON = RasterBandDescriptorToJSON;
exports.RasterBandDescriptorToJSONTyped = RasterBandDescriptorToJSONTyped;
const Measurement_1 = require("./Measurement");
/**
 * Check if a given object implements the RasterBandDescriptor interface.
 */
function instanceOfRasterBandDescriptor(value) {
    if (!('measurement' in value) || value['measurement'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
function RasterBandDescriptorFromJSON(json) {
    return RasterBandDescriptorFromJSONTyped(json, false);
}
function RasterBandDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'measurement': (0, Measurement_1.MeasurementFromJSON)(json['measurement']),
        'name': json['name'],
    };
}
function RasterBandDescriptorToJSON(json) {
    return RasterBandDescriptorToJSONTyped(json, false);
}
function RasterBandDescriptorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'measurement': (0, Measurement_1.MeasurementToJSON)(value['measurement']),
        'name': value['name'],
    };
}
