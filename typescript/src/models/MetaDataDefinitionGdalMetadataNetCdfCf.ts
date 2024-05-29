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

import { mapValues } from '../runtime';
import type { GdalDatasetParameters } from './GdalDatasetParameters';
import {
    GdalDatasetParametersFromJSON,
    GdalDatasetParametersFromJSONTyped,
    GdalDatasetParametersToJSON,
} from './GdalDatasetParameters';
import type { RasterResultDescriptor } from './RasterResultDescriptor';
import {
    RasterResultDescriptorFromJSON,
    RasterResultDescriptorFromJSONTyped,
    RasterResultDescriptorToJSON,
} from './RasterResultDescriptor';
import type { TimeStep } from './TimeStep';
import {
    TimeStepFromJSON,
    TimeStepFromJSONTyped,
    TimeStepToJSON,
} from './TimeStep';

/**
 * Meta data for 4D `NetCDF` CF datasets
 * @export
 * @interface MetaDataDefinitionGdalMetadataNetCdfCf
 */
export interface MetaDataDefinitionGdalMetadataNetCdfCf {
    /**
     * A band offset specifies the first band index to use for the first point in time.
     * All other time steps are added to this offset.
     * @type {number}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    bandOffset: number;
    /**
     * 
     * @type {number}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    cacheTtl?: number;
    /**
     * 
     * @type {number}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    end: number;
    /**
     * 
     * @type {GdalDatasetParameters}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    params: GdalDatasetParameters;
    /**
     * 
     * @type {RasterResultDescriptor}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     * 
     * @type {number}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    start: number;
    /**
     * 
     * @type {TimeStep}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    step: TimeStep;
    /**
     * 
     * @type {string}
     * @memberof MetaDataDefinitionGdalMetadataNetCdfCf
     */
    type: MetaDataDefinitionGdalMetadataNetCdfCfTypeEnum;
}


/**
 * @export
 */
export const MetaDataDefinitionGdalMetadataNetCdfCfTypeEnum = {
    GdalMetadataNetCdfCf: 'GdalMetadataNetCdfCf'
} as const;
export type MetaDataDefinitionGdalMetadataNetCdfCfTypeEnum = typeof MetaDataDefinitionGdalMetadataNetCdfCfTypeEnum[keyof typeof MetaDataDefinitionGdalMetadataNetCdfCfTypeEnum];


/**
 * Check if a given object implements the MetaDataDefinitionGdalMetadataNetCdfCf interface.
 */
export function instanceOfMetaDataDefinitionGdalMetadataNetCdfCf(value: object): boolean {
    if (!('bandOffset' in value)) return false;
    if (!('end' in value)) return false;
    if (!('params' in value)) return false;
    if (!('resultDescriptor' in value)) return false;
    if (!('start' in value)) return false;
    if (!('step' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function MetaDataDefinitionGdalMetadataNetCdfCfFromJSON(json: any): MetaDataDefinitionGdalMetadataNetCdfCf {
    return MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped(json, false);
}

export function MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataDefinitionGdalMetadataNetCdfCf {
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

export function MetaDataDefinitionGdalMetadataNetCdfCfToJSON(value?: MetaDataDefinitionGdalMetadataNetCdfCf | null): any {
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

