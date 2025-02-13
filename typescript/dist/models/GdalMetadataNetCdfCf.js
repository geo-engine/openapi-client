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
exports.GdalMetadataNetCdfCfTypeEnum = void 0;
exports.instanceOfGdalMetadataNetCdfCf = instanceOfGdalMetadataNetCdfCf;
exports.GdalMetadataNetCdfCfFromJSON = GdalMetadataNetCdfCfFromJSON;
exports.GdalMetadataNetCdfCfFromJSONTyped = GdalMetadataNetCdfCfFromJSONTyped;
exports.GdalMetadataNetCdfCfToJSON = GdalMetadataNetCdfCfToJSON;
exports.GdalMetadataNetCdfCfToJSONTyped = GdalMetadataNetCdfCfToJSONTyped;
const TimeStep_1 = require("./TimeStep");
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
/**
 * @export
 */
exports.GdalMetadataNetCdfCfTypeEnum = {
    GdalMetadataNetCdfCf: 'GdalMetadataNetCdfCf'
};
/**
 * Check if a given object implements the GdalMetadataNetCdfCf interface.
 */
function instanceOfGdalMetadataNetCdfCf(value) {
    if (!('bandOffset' in value) || value['bandOffset'] === undefined)
        return false;
    if (!('end' in value) || value['end'] === undefined)
        return false;
    if (!('params' in value) || value['params'] === undefined)
        return false;
    if (!('resultDescriptor' in value) || value['resultDescriptor'] === undefined)
        return false;
    if (!('start' in value) || value['start'] === undefined)
        return false;
    if (!('step' in value) || value['step'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function GdalMetadataNetCdfCfFromJSON(json) {
    return GdalMetadataNetCdfCfFromJSONTyped(json, false);
}
function GdalMetadataNetCdfCfFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bandOffset': json['bandOffset'],
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'end': json['end'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'start': json['start'],
        'step': (0, TimeStep_1.TimeStepFromJSON)(json['step']),
        'type': json['type'],
    };
}
function GdalMetadataNetCdfCfToJSON(json) {
    return GdalMetadataNetCdfCfToJSONTyped(json, false);
}
function GdalMetadataNetCdfCfToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bandOffset': value['bandOffset'],
        'cacheTtl': value['cacheTtl'],
        'end': value['end'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value['resultDescriptor']),
        'start': value['start'],
        'step': (0, TimeStep_1.TimeStepToJSON)(value['step']),
        'type': value['type'],
    };
}
