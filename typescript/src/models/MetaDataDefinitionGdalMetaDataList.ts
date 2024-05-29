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
import type { GdalLoadingInfoTemporalSlice } from './GdalLoadingInfoTemporalSlice';
import {
    GdalLoadingInfoTemporalSliceFromJSON,
    GdalLoadingInfoTemporalSliceFromJSONTyped,
    GdalLoadingInfoTemporalSliceToJSON,
} from './GdalLoadingInfoTemporalSlice';
import type { RasterResultDescriptor } from './RasterResultDescriptor';
import {
    RasterResultDescriptorFromJSON,
    RasterResultDescriptorFromJSONTyped,
    RasterResultDescriptorToJSON,
} from './RasterResultDescriptor';

/**
 * 
 * @export
 * @interface MetaDataDefinitionGdalMetaDataList
 */
export interface MetaDataDefinitionGdalMetaDataList {
    /**
     * 
     * @type {Array<GdalLoadingInfoTemporalSlice>}
     * @memberof MetaDataDefinitionGdalMetaDataList
     */
    params: Array<GdalLoadingInfoTemporalSlice>;
    /**
     * 
     * @type {RasterResultDescriptor}
     * @memberof MetaDataDefinitionGdalMetaDataList
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     * 
     * @type {string}
     * @memberof MetaDataDefinitionGdalMetaDataList
     */
    type: MetaDataDefinitionGdalMetaDataListTypeEnum;
}


/**
 * @export
 */
export const MetaDataDefinitionGdalMetaDataListTypeEnum = {
    GdalMetaDataList: 'GdalMetaDataList'
} as const;
export type MetaDataDefinitionGdalMetaDataListTypeEnum = typeof MetaDataDefinitionGdalMetaDataListTypeEnum[keyof typeof MetaDataDefinitionGdalMetaDataListTypeEnum];


/**
 * Check if a given object implements the MetaDataDefinitionGdalMetaDataList interface.
 */
export function instanceOfMetaDataDefinitionGdalMetaDataList(value: object): boolean {
    if (!('params' in value)) return false;
    if (!('resultDescriptor' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function MetaDataDefinitionGdalMetaDataListFromJSON(json: any): MetaDataDefinitionGdalMetaDataList {
    return MetaDataDefinitionGdalMetaDataListFromJSONTyped(json, false);
}

export function MetaDataDefinitionGdalMetaDataListFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataDefinitionGdalMetaDataList {
    if (json == null) {
        return json;
    }
    return {
        
        'params': ((json['params'] as Array<any>).map(GdalLoadingInfoTemporalSliceFromJSON)),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'type': json['type'],
    };
}

export function MetaDataDefinitionGdalMetaDataListToJSON(value?: MetaDataDefinitionGdalMetaDataList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'params': ((value['params'] as Array<any>).map(GdalLoadingInfoTemporalSliceToJSON)),
        'resultDescriptor': RasterResultDescriptorToJSON(value['resultDescriptor']),
        'type': value['type'],
    };
}

