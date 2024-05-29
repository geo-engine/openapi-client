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
exports.RasterBandDescriptorToJSON = exports.RasterBandDescriptorFromJSONTyped = exports.RasterBandDescriptorFromJSON = exports.instanceOfRasterBandDescriptor = void 0;
const Measurement_1 = require("./Measurement");
/**
 * Check if a given object implements the RasterBandDescriptor interface.
 */
function instanceOfRasterBandDescriptor(value) {
    if (!('measurement' in value))
        return false;
    if (!('name' in value))
        return false;
    return true;
}
exports.instanceOfRasterBandDescriptor = instanceOfRasterBandDescriptor;
function RasterBandDescriptorFromJSON(json) {
    return RasterBandDescriptorFromJSONTyped(json, false);
}
exports.RasterBandDescriptorFromJSON = RasterBandDescriptorFromJSON;
function RasterBandDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'measurement': (0, Measurement_1.MeasurementFromJSON)(json['measurement']),
        'name': json['name'],
    };
}
exports.RasterBandDescriptorFromJSONTyped = RasterBandDescriptorFromJSONTyped;
function RasterBandDescriptorToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'measurement': (0, Measurement_1.MeasurementToJSON)(value['measurement']),
        'name': value['name'],
    };
}
exports.RasterBandDescriptorToJSON = RasterBandDescriptorToJSON;
