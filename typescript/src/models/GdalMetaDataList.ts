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
 * @interface GdalMetaDataList
 */
export interface GdalMetaDataList {
    /**
     * 
     * @type {Array<GdalLoadingInfoTemporalSlice>}
     * @memberof GdalMetaDataList
     */
    params: Array<GdalLoadingInfoTemporalSlice>;
    /**
     * 
     * @type {RasterResultDescriptor}
     * @memberof GdalMetaDataList
     */
    resultDescriptor: RasterResultDescriptor;
}

/**
 * Check if a given object implements the GdalMetaDataList interface.
 */
export function instanceOfGdalMetaDataList(value: object): boolean {
    if (!('params' in value)) return false;
    if (!('resultDescriptor' in value)) return false;
    return true;
}

export function GdalMetaDataListFromJSON(json: any): GdalMetaDataList {
    return GdalMetaDataListFromJSONTyped(json, false);
}

export function GdalMetaDataListFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetaDataList {
    if (json == null) {
        return json;
    }
    return {
        
        'params': ((json['params'] as Array<any>).map(GdalLoadingInfoTemporalSliceFromJSON)),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
    };
}

export function GdalMetaDataListToJSON(value?: GdalMetaDataList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'params': ((value['params'] as Array<any>).map(GdalLoadingInfoTemporalSliceToJSON)),
        'resultDescriptor': RasterResultDescriptorToJSON(value['resultDescriptor']),
    };
}

