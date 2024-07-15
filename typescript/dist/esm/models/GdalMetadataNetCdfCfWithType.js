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
import { exists } from '../runtime';
import { GdalDatasetParametersFromJSON, GdalDatasetParametersToJSON, } from './GdalDatasetParameters';
import { RasterResultDescriptorFromJSON, RasterResultDescriptorToJSON, } from './RasterResultDescriptor';
import { TimeStepFromJSON, TimeStepToJSON, } from './TimeStep';
/**
 * @export
 */
export const GdalMetadataNetCdfCfWithTypeTypeEnum = {
    GdalMetadataNetCdfCf: 'GdalMetadataNetCdfCf'
};
/**
 * Check if a given object implements the GdalMetadataNetCdfCfWithType interface.
 */
export function instanceOfGdalMetadataNetCdfCfWithType(value) {
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
export function GdalMetadataNetCdfCfWithTypeFromJSON(json) {
    return GdalMetadataNetCdfCfWithTypeFromJSONTyped(json, false);
}
export function GdalMetadataNetCdfCfWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bandOffset': json['bandOffset'],
        'cacheTtl': !exists(json, 'cacheTtl') ? undefined : json['cacheTtl'],
        'end': json['end'],
        'params': GdalDatasetParametersFromJSON(json['params']),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'start': json['start'],
        'step': TimeStepFromJSON(json['step']),
        'type': json['type'],
    };
}
export function GdalMetadataNetCdfCfWithTypeToJSON(value) {
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
        'params': GdalDatasetParametersToJSON(value.params),
        'resultDescriptor': RasterResultDescriptorToJSON(value.resultDescriptor),
        'start': value.start,
        'step': TimeStepToJSON(value.step),
        'type': value.type,
    };
}
