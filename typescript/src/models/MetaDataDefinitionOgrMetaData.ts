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
import type { VectorResultDescriptor } from './VectorResultDescriptor';
import {
    VectorResultDescriptorFromJSON,
    VectorResultDescriptorFromJSONTyped,
    VectorResultDescriptorToJSON,
} from './VectorResultDescriptor';
import type { OgrSourceDataset } from './OgrSourceDataset';
import {
    OgrSourceDatasetFromJSON,
    OgrSourceDatasetFromJSONTyped,
    OgrSourceDatasetToJSON,
} from './OgrSourceDataset';

/**
 * 
 * @export
 * @interface MetaDataDefinitionOgrMetaData
 */
export interface MetaDataDefinitionOgrMetaData {
    /**
     * 
     * @type {OgrSourceDataset}
     * @memberof MetaDataDefinitionOgrMetaData
     */
    loadingInfo: OgrSourceDataset;
    /**
     * 
     * @type {VectorResultDescriptor}
     * @memberof MetaDataDefinitionOgrMetaData
     */
    resultDescriptor: VectorResultDescriptor;
    /**
     * 
     * @type {string}
     * @memberof MetaDataDefinitionOgrMetaData
     */
    type: MetaDataDefinitionOgrMetaDataTypeEnum;
}


/**
 * @export
 */
export const MetaDataDefinitionOgrMetaDataTypeEnum = {
    OgrMetaData: 'OgrMetaData'
} as const;
export type MetaDataDefinitionOgrMetaDataTypeEnum = typeof MetaDataDefinitionOgrMetaDataTypeEnum[keyof typeof MetaDataDefinitionOgrMetaDataTypeEnum];


/**
 * Check if a given object implements the MetaDataDefinitionOgrMetaData interface.
 */
export function instanceOfMetaDataDefinitionOgrMetaData(value: object): value is MetaDataDefinitionOgrMetaData {
    if (!('loadingInfo' in value) || value['loadingInfo'] === undefined) return false;
    if (!('resultDescriptor' in value) || value['resultDescriptor'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function MetaDataDefinitionOgrMetaDataFromJSON(json: any): MetaDataDefinitionOgrMetaData {
    return MetaDataDefinitionOgrMetaDataFromJSONTyped(json, false);
}

export function MetaDataDefinitionOgrMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataDefinitionOgrMetaData {
    if (json == null) {
        return json;
    }
    return {
        
        'loadingInfo': OgrSourceDatasetFromJSON(json['loadingInfo']),
        'resultDescriptor': VectorResultDescriptorFromJSON(json['resultDescriptor']),
        'type': json['type'],
    };
}

export function MetaDataDefinitionOgrMetaDataToJSON(value?: MetaDataDefinitionOgrMetaData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'loadingInfo': OgrSourceDatasetToJSON(value['loadingInfo']),
        'resultDescriptor': VectorResultDescriptorToJSON(value['resultDescriptor']),
        'type': value['type'],
    };
}

