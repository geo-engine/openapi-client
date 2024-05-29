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
import { GdalDatasetParametersFromJSON, GdalDatasetParametersToJSON, } from './GdalDatasetParameters';
import { RasterResultDescriptorFromJSON, RasterResultDescriptorToJSON, } from './RasterResultDescriptor';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * Check if a given object implements the GdalMetaDataStatic interface.
 */
export function instanceOfGdalMetaDataStatic(value) {
    if (!('params' in value))
        return false;
    if (!('resultDescriptor' in value))
        return false;
    return true;
}
export function GdalMetaDataStaticFromJSON(json) {
    return GdalMetaDataStaticFromJSONTyped(json, false);
}
export function GdalMetaDataStaticFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'params': GdalDatasetParametersFromJSON(json['params']),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'time': json['time'] == null ? undefined : TimeIntervalFromJSON(json['time']),
    };
}
export function GdalMetaDataStaticToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'cacheTtl': value['cacheTtl'],
        'params': GdalDatasetParametersToJSON(value['params']),
        'resultDescriptor': RasterResultDescriptorToJSON(value['resultDescriptor']),
        'time': TimeIntervalToJSON(value['time']),
    };
}
