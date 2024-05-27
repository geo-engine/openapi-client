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
exports.GdalMetaDataStaticToJSON = exports.GdalMetaDataStaticFromJSONTyped = exports.GdalMetaDataStaticFromJSON = exports.instanceOfGdalMetaDataStatic = void 0;
const TimeInterval_1 = require("./TimeInterval");
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
/**
 * Check if a given object implements the GdalMetaDataStatic interface.
 */
function instanceOfGdalMetaDataStatic(value) {
    if (!('params' in value) || value['params'] === undefined)
        return false;
    if (!('resultDescriptor' in value) || value['resultDescriptor'] === undefined)
        return false;
    return true;
}
exports.instanceOfGdalMetaDataStatic = instanceOfGdalMetaDataStatic;
function GdalMetaDataStaticFromJSON(json) {
    return GdalMetaDataStaticFromJSONTyped(json, false);
}
exports.GdalMetaDataStaticFromJSON = GdalMetaDataStaticFromJSON;
function GdalMetaDataStaticFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'time': json['time'] == null ? undefined : (0, TimeInterval_1.TimeIntervalFromJSON)(json['time']),
    };
}
exports.GdalMetaDataStaticFromJSONTyped = GdalMetaDataStaticFromJSONTyped;
function GdalMetaDataStaticToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'cacheTtl': value['cacheTtl'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value['resultDescriptor']),
        'time': (0, TimeInterval_1.TimeIntervalToJSON)(value['time']),
    };
}
exports.GdalMetaDataStaticToJSON = GdalMetaDataStaticToJSON;
