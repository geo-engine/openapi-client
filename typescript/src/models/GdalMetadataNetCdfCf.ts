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

import { exists, mapValues } from '../runtime';
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
 * @interface GdalMetadataNetCdfCf
 */
export interface GdalMetadataNetCdfCf {
    /**
     * A band offset specifies the first band index to use for the first point in time.
     * All other time steps are added to this offset.
     * @type {number}
     * @memberof GdalMetadataNetCdfCf
     */
    bandOffset: number;
    /**
     * 
     * @type {number}
     * @memberof GdalMetadataNetCdfCf
     */
    cacheTtl?: number;
    /**
     * 
     * @type {number}
     * @memberof GdalMetadataNetCdfCf
     */
    end: number;
    /**
     * 
     * @type {GdalDatasetParameters}
     * @memberof GdalMetadataNetCdfCf
     */
    params: GdalDatasetParameters;
    /**
     * 
     * @type {RasterResultDescriptor}
     * @memberof GdalMetadataNetCdfCf
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     * 
     * @type {number}
     * @memberof GdalMetadataNetCdfCf
     */
    start: number;
    /**
     * 
     * @type {TimeStep}
     * @memberof GdalMetadataNetCdfCf
     */
    step: TimeStep;
    /**
     * 
     * @type {string}
     * @memberof GdalMetadataNetCdfCf
     */
    type: GdalMetadataNetCdfCfTypeEnum;
}


/**
 * @export
 */
export const GdalMetadataNetCdfCfTypeEnum = {
    GdalMetadataNetCdfCf: 'GdalMetadataNetCdfCf'
} as const;
export type GdalMetadataNetCdfCfTypeEnum = typeof GdalMetadataNetCdfCfTypeEnum[keyof typeof GdalMetadataNetCdfCfTypeEnum];


/**
 * Check if a given object implements the GdalMetadataNetCdfCf interface.
 */
export function instanceOfGdalMetadataNetCdfCf(value: object): boolean {
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

export function GdalMetadataNetCdfCfFromJSON(json: any): GdalMetadataNetCdfCf {
    return GdalMetadataNetCdfCfFromJSONTyped(json, false);
}

export function GdalMetadataNetCdfCfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetadataNetCdfCf {
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

export function GdalMetadataNetCdfCfToJSON(value?: GdalMetadataNetCdfCf | null): any {
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

