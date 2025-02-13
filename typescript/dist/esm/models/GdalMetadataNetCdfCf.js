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
import { TimeStepFromJSON, TimeStepToJSON, } from './TimeStep';
import { RasterResultDescriptorFromJSON, RasterResultDescriptorToJSON, } from './RasterResultDescriptor';
import { GdalDatasetParametersFromJSON, GdalDatasetParametersToJSON, } from './GdalDatasetParameters';
/**
 * @export
 */
export const GdalMetadataNetCdfCfTypeEnum = {
    GdalMetadataNetCdfCf: 'GdalMetadataNetCdfCf'
};
/**
 * Check if a given object implements the GdalMetadataNetCdfCf interface.
 */
export function instanceOfGdalMetadataNetCdfCf(value) {
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
export function GdalMetadataNetCdfCfFromJSON(json) {
    return GdalMetadataNetCdfCfFromJSONTyped(json, false);
}
export function GdalMetadataNetCdfCfFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bandOffset': json['bandOffset'],
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'end': json['end'],
        'params': GdalDatasetParametersFromJSON(json['params']),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'start': json['start'],
        'step': TimeStepFromJSON(json['step']),
        'type': json['type'],
    };
}
export function GdalMetadataNetCdfCfToJSON(json) {
    return GdalMetadataNetCdfCfToJSONTyped(json, false);
}
export function GdalMetadataNetCdfCfToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bandOffset': value['bandOffset'],
        'cacheTtl': value['cacheTtl'],
        'end': value['end'],
        'params': GdalDatasetParametersToJSON(value['params']),
        'resultDescriptor': RasterResultDescriptorToJSON(value['resultDescriptor']),
        'start': value['start'],
        'step': TimeStepToJSON(value['step']),
        'type': value['type'],
    };
}
