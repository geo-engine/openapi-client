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
exports.instanceOfMlModelMetadata = instanceOfMlModelMetadata;
exports.MlModelMetadataFromJSON = MlModelMetadataFromJSON;
exports.MlModelMetadataFromJSONTyped = MlModelMetadataFromJSONTyped;
exports.MlModelMetadataToJSON = MlModelMetadataToJSON;
exports.MlModelMetadataToJSONTyped = MlModelMetadataToJSONTyped;
const RasterDataType_1 = require("./RasterDataType");
/**
 * Check if a given object implements the MlModelMetadata interface.
 */
function instanceOfMlModelMetadata(value) {
    if (!('fileName' in value) || value['fileName'] === undefined)
        return false;
    if (!('inputType' in value) || value['inputType'] === undefined)
        return false;
    if (!('numInputBands' in value) || value['numInputBands'] === undefined)
        return false;
    if (!('outputType' in value) || value['outputType'] === undefined)
        return false;
    return true;
}
function MlModelMetadataFromJSON(json) {
    return MlModelMetadataFromJSONTyped(json, false);
}
function MlModelMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fileName': json['fileName'],
        'inputType': (0, RasterDataType_1.RasterDataTypeFromJSON)(json['inputType']),
        'numInputBands': json['numInputBands'],
        'outputType': (0, RasterDataType_1.RasterDataTypeFromJSON)(json['outputType']),
    };
}
function MlModelMetadataToJSON(json) {
    return MlModelMetadataToJSONTyped(json, false);
}
function MlModelMetadataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fileName': value['fileName'],
        'inputType': (0, RasterDataType_1.RasterDataTypeToJSON)(value['inputType']),
        'numInputBands': value['numInputBands'],
        'outputType': (0, RasterDataType_1.RasterDataTypeToJSON)(value['outputType']),
    };
}
