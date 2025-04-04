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
exports.GdalDatasetParametersToJSONTyped = exports.GdalDatasetParametersToJSON = exports.GdalDatasetParametersFromJSONTyped = exports.GdalDatasetParametersFromJSON = exports.instanceOfGdalDatasetParameters = void 0;
const GdalDatasetGeoTransform_1 = require("./GdalDatasetGeoTransform");
const GdalMetadataMapping_1 = require("./GdalMetadataMapping");
const FileNotFoundHandling_1 = require("./FileNotFoundHandling");
/**
 * Check if a given object implements the GdalDatasetParameters interface.
 */
function instanceOfGdalDatasetParameters(value) {
    if (!('fileNotFoundHandling' in value) || value['fileNotFoundHandling'] === undefined)
        return false;
    if (!('filePath' in value) || value['filePath'] === undefined)
        return false;
    if (!('geoTransform' in value) || value['geoTransform'] === undefined)
        return false;
    if (!('height' in value) || value['height'] === undefined)
        return false;
    if (!('rasterbandChannel' in value) || value['rasterbandChannel'] === undefined)
        return false;
    if (!('width' in value) || value['width'] === undefined)
        return false;
    return true;
}
exports.instanceOfGdalDatasetParameters = instanceOfGdalDatasetParameters;
function GdalDatasetParametersFromJSON(json) {
    return GdalDatasetParametersFromJSONTyped(json, false);
}
exports.GdalDatasetParametersFromJSON = GdalDatasetParametersFromJSON;
function GdalDatasetParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'allowAlphabandAsMask': json['allowAlphabandAsMask'] == null ? undefined : json['allowAlphabandAsMask'],
        'fileNotFoundHandling': (0, FileNotFoundHandling_1.FileNotFoundHandlingFromJSON)(json['fileNotFoundHandling']),
        'filePath': json['filePath'],
        'gdalConfigOptions': json['gdalConfigOptions'] == null ? undefined : json['gdalConfigOptions'],
        'gdalOpenOptions': json['gdalOpenOptions'] == null ? undefined : json['gdalOpenOptions'],
        'geoTransform': (0, GdalDatasetGeoTransform_1.GdalDatasetGeoTransformFromJSON)(json['geoTransform']),
        'height': json['height'],
        'noDataValue': json['noDataValue'] == null ? undefined : json['noDataValue'],
        'propertiesMapping': json['propertiesMapping'] == null ? undefined : (json['propertiesMapping'].map(GdalMetadataMapping_1.GdalMetadataMappingFromJSON)),
        'rasterbandChannel': json['rasterbandChannel'],
        'width': json['width'],
    };
}
exports.GdalDatasetParametersFromJSONTyped = GdalDatasetParametersFromJSONTyped;
function GdalDatasetParametersToJSON(json) {
    return GdalDatasetParametersToJSONTyped(json, false);
}
exports.GdalDatasetParametersToJSON = GdalDatasetParametersToJSON;
function GdalDatasetParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'allowAlphabandAsMask': value['allowAlphabandAsMask'],
        'fileNotFoundHandling': (0, FileNotFoundHandling_1.FileNotFoundHandlingToJSON)(value['fileNotFoundHandling']),
        'filePath': value['filePath'],
        'gdalConfigOptions': value['gdalConfigOptions'],
        'gdalOpenOptions': value['gdalOpenOptions'],
        'geoTransform': (0, GdalDatasetGeoTransform_1.GdalDatasetGeoTransformToJSON)(value['geoTransform']),
        'height': value['height'],
        'noDataValue': value['noDataValue'],
        'propertiesMapping': value['propertiesMapping'] == null ? undefined : (value['propertiesMapping'].map(GdalMetadataMapping_1.GdalMetadataMappingToJSON)),
        'rasterbandChannel': value['rasterbandChannel'],
        'width': value['width'],
    };
}
exports.GdalDatasetParametersToJSONTyped = GdalDatasetParametersToJSONTyped;
