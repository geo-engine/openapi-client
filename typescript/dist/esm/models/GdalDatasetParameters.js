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
import { exists } from '../runtime';
import { FileNotFoundHandlingFromJSON, FileNotFoundHandlingToJSON, } from './FileNotFoundHandling';
import { GdalDatasetGeoTransformFromJSON, GdalDatasetGeoTransformToJSON, } from './GdalDatasetGeoTransform';
import { GdalMetadataMappingFromJSON, GdalMetadataMappingToJSON, } from './GdalMetadataMapping';
/**
 * Check if a given object implements the GdalDatasetParameters interface.
 */
export function instanceOfGdalDatasetParameters(value) {
    let isInstance = true;
    isInstance = isInstance && "fileNotFoundHandling" in value;
    isInstance = isInstance && "filePath" in value;
    isInstance = isInstance && "geoTransform" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "rasterbandChannel" in value;
    isInstance = isInstance && "width" in value;
    return isInstance;
}
export function GdalDatasetParametersFromJSON(json) {
    return GdalDatasetParametersFromJSONTyped(json, false);
}
export function GdalDatasetParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowAlphabandAsMask': !exists(json, 'allowAlphabandAsMask') ? undefined : json['allowAlphabandAsMask'],
        'fileNotFoundHandling': FileNotFoundHandlingFromJSON(json['fileNotFoundHandling']),
        'filePath': json['filePath'],
        'gdalConfigOptions': !exists(json, 'gdalConfigOptions') ? undefined : json['gdalConfigOptions'],
        'gdalOpenOptions': !exists(json, 'gdalOpenOptions') ? undefined : json['gdalOpenOptions'],
        'geoTransform': GdalDatasetGeoTransformFromJSON(json['geoTransform']),
        'height': json['height'],
        'noDataValue': !exists(json, 'noDataValue') ? undefined : json['noDataValue'],
        'propertiesMapping': !exists(json, 'propertiesMapping') ? undefined : (json['propertiesMapping'] === null ? null : json['propertiesMapping'].map(GdalMetadataMappingFromJSON)),
        'rasterbandChannel': json['rasterbandChannel'],
        'width': json['width'],
    };
}
export function GdalDatasetParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowAlphabandAsMask': value.allowAlphabandAsMask,
        'fileNotFoundHandling': FileNotFoundHandlingToJSON(value.fileNotFoundHandling),
        'filePath': value.filePath,
        'gdalConfigOptions': value.gdalConfigOptions,
        'gdalOpenOptions': value.gdalOpenOptions,
        'geoTransform': GdalDatasetGeoTransformToJSON(value.geoTransform),
        'height': value.height,
        'noDataValue': value.noDataValue,
        'propertiesMapping': value.propertiesMapping === undefined ? undefined : (value.propertiesMapping === null ? null : value.propertiesMapping.map(GdalMetadataMappingToJSON)),
        'rasterbandChannel': value.rasterbandChannel,
        'width': value.width,
    };
}
