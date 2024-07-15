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
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './TimeInterval';

/**
 * 
 * @export
 * @interface GdalMetaDataStaticWithType
 */
export interface GdalMetaDataStaticWithType {
    /**
     * 
     * @type {number}
     * @memberof GdalMetaDataStaticWithType
     */
    cacheTtl?: number;
    /**
     * 
     * @type {GdalDatasetParameters}
     * @memberof GdalMetaDataStaticWithType
     */
    params: GdalDatasetParameters;
    /**
     * 
     * @type {RasterResultDescriptor}
     * @memberof GdalMetaDataStaticWithType
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     * 
     * @type {TimeInterval}
     * @memberof GdalMetaDataStaticWithType
     */
    time?: TimeInterval | null;
    /**
     * 
     * @type {string}
     * @memberof GdalMetaDataStaticWithType
     */
    type: GdalMetaDataStaticWithTypeTypeEnum;
}


/**
 * @export
 */
export const GdalMetaDataStaticWithTypeTypeEnum = {
    GdalStatic: 'GdalStatic'
} as const;
export type GdalMetaDataStaticWithTypeTypeEnum = typeof GdalMetaDataStaticWithTypeTypeEnum[keyof typeof GdalMetaDataStaticWithTypeTypeEnum];


/**
 * Check if a given object implements the GdalMetaDataStaticWithType interface.
 */
export function instanceOfGdalMetaDataStaticWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "params" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function GdalMetaDataStaticWithTypeFromJSON(json: any): GdalMetaDataStaticWithType {
    return GdalMetaDataStaticWithTypeFromJSONTyped(json, false);
}

export function GdalMetaDataStaticWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetaDataStaticWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cacheTtl': !exists(json, 'cacheTtl') ? undefined : json['cacheTtl'],
        'params': GdalDatasetParametersFromJSON(json['params']),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'time': !exists(json, 'time') ? undefined : TimeIntervalFromJSON(json['time']),
        'type': json['type'],
    };
}

export function GdalMetaDataStaticWithTypeToJSON(value?: GdalMetaDataStaticWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cacheTtl': value.cacheTtl,
        'params': GdalDatasetParametersToJSON(value.params),
        'resultDescriptor': RasterResultDescriptorToJSON(value.resultDescriptor),
        'time': TimeIntervalToJSON(value.time),
        'type': value.type,
    };
}
