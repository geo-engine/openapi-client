"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdalDatasetParametersToJSON = exports.GdalDatasetParametersFromJSONTyped = exports.GdalDatasetParametersFromJSON = exports.instanceOfGdalDatasetParameters = void 0;
const runtime_1 = require("../runtime");
const FileNotFoundHandling_1 = require("./FileNotFoundHandling");
const GdalDatasetGeoTransform_1 = require("./GdalDatasetGeoTransform");
const GdalMetadataMapping_1 = require("./GdalMetadataMapping");
/**
 * Check if a given object implements the GdalDatasetParameters interface.
 */
function instanceOfGdalDatasetParameters(value) {
    let isInstance = true;
    isInstance = isInstance && "fileNotFoundHandling" in value;
    isInstance = isInstance && "filePath" in value;
    isInstance = isInstance && "geoTransform" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "rasterbandChannel" in value;
    isInstance = isInstance && "width" in value;
    return isInstance;
}
exports.instanceOfGdalDatasetParameters = instanceOfGdalDatasetParameters;
function GdalDatasetParametersFromJSON(json) {
    return GdalDatasetParametersFromJSONTyped(json, false);
}
exports.GdalDatasetParametersFromJSON = GdalDatasetParametersFromJSON;
function GdalDatasetParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowAlphabandAsMask': !(0, runtime_1.exists)(json, 'allowAlphabandAsMask') ? undefined : json['allowAlphabandAsMask'],
        'fileNotFoundHandling': (0, FileNotFoundHandling_1.FileNotFoundHandlingFromJSON)(json['fileNotFoundHandling']),
        'filePath': json['filePath'],
        'gdalConfigOptions': !(0, runtime_1.exists)(json, 'gdalConfigOptions') ? undefined : json['gdalConfigOptions'],
        'gdalOpenOptions': !(0, runtime_1.exists)(json, 'gdalOpenOptions') ? undefined : json['gdalOpenOptions'],
        'geoTransform': (0, GdalDatasetGeoTransform_1.GdalDatasetGeoTransformFromJSON)(json['geoTransform']),
        'height': json['height'],
        'noDataValue': !(0, runtime_1.exists)(json, 'noDataValue') ? undefined : json['noDataValue'],
        'propertiesMapping': !(0, runtime_1.exists)(json, 'propertiesMapping') ? undefined : (json['propertiesMapping'] === null ? null : json['propertiesMapping'].map(GdalMetadataMapping_1.GdalMetadataMappingFromJSON)),
        'rasterbandChannel': json['rasterbandChannel'],
        'width': json['width'],
    };
}
exports.GdalDatasetParametersFromJSONTyped = GdalDatasetParametersFromJSONTyped;
function GdalDatasetParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowAlphabandAsMask': value.allowAlphabandAsMask,
        'fileNotFoundHandling': (0, FileNotFoundHandling_1.FileNotFoundHandlingToJSON)(value.fileNotFoundHandling),
        'filePath': value.filePath,
        'gdalConfigOptions': value.gdalConfigOptions,
        'gdalOpenOptions': value.gdalOpenOptions,
        'geoTransform': (0, GdalDatasetGeoTransform_1.GdalDatasetGeoTransformToJSON)(value.geoTransform),
        'height': value.height,
        'noDataValue': value.noDataValue,
        'propertiesMapping': value.propertiesMapping === undefined ? undefined : (value.propertiesMapping === null ? null : value.propertiesMapping.map(GdalMetadataMapping_1.GdalMetadataMappingToJSON)),
        'rasterbandChannel': value.rasterbandChannel,
        'width': value.width,
    };
}
exports.GdalDatasetParametersToJSON = GdalDatasetParametersToJSON;
