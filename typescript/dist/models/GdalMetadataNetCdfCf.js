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
exports.GdalMetadataNetCdfCfToJSON = exports.GdalMetadataNetCdfCfFromJSONTyped = exports.GdalMetadataNetCdfCfFromJSON = exports.instanceOfGdalMetadataNetCdfCf = exports.GdalMetadataNetCdfCfTypeEnum = void 0;
const runtime_1 = require("../runtime");
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
const TimeStep_1 = require("./TimeStep");
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
    let isInstance = true;
    isInstance = isInstance && "bandOffset" in value;
    isInstance = isInstance && "end" in value;
    isInstance = isInstance && "params" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "start" in value;
    isInstance = isInstance && "step" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfGdalMetadataNetCdfCf = instanceOfGdalMetadataNetCdfCf;
function GdalMetadataNetCdfCfFromJSON(json) {
    return GdalMetadataNetCdfCfFromJSONTyped(json, false);
}
exports.GdalMetadataNetCdfCfFromJSON = GdalMetadataNetCdfCfFromJSON;
function GdalMetadataNetCdfCfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bandOffset': json['bandOffset'],
        'cacheTtl': !(0, runtime_1.exists)(json, 'cacheTtl') ? undefined : json['cacheTtl'],
        'end': json['end'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'start': json['start'],
        'step': (0, TimeStep_1.TimeStepFromJSON)(json['step']),
        'type': json['type'],
    };
}
exports.GdalMetadataNetCdfCfFromJSONTyped = GdalMetadataNetCdfCfFromJSONTyped;
function GdalMetadataNetCdfCfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bandOffset': value.bandOffset,
        'cacheTtl': value.cacheTtl,
        'end': value.end,
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value.params),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value.resultDescriptor),
        'start': value.start,
        'step': (0, TimeStep_1.TimeStepToJSON)(value.step),
        'type': value.type,
    };
}
exports.GdalMetadataNetCdfCfToJSON = GdalMetadataNetCdfCfToJSON;
