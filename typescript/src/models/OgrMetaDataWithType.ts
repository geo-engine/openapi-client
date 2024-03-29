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
import type { OgrSourceDataset } from './OgrSourceDataset';
import {
    OgrSourceDatasetFromJSON,
    OgrSourceDatasetFromJSONTyped,
    OgrSourceDatasetToJSON,
} from './OgrSourceDataset';
import type { VectorResultDescriptor } from './VectorResultDescriptor';
import {
    VectorResultDescriptorFromJSON,
    VectorResultDescriptorFromJSONTyped,
    VectorResultDescriptorToJSON,
} from './VectorResultDescriptor';

/**
 * 
 * @export
 * @interface OgrMetaDataWithType
 */
export interface OgrMetaDataWithType {
    /**
     * 
     * @type {OgrSourceDataset}
     * @memberof OgrMetaDataWithType
     */
    loadingInfo: OgrSourceDataset;
    /**
     * 
     * @type {VectorResultDescriptor}
     * @memberof OgrMetaDataWithType
     */
    resultDescriptor: VectorResultDescriptor;
    /**
     * 
     * @type {string}
     * @memberof OgrMetaDataWithType
     */
    type: OgrMetaDataWithTypeTypeEnum;
}


/**
 * @export
 */
export const OgrMetaDataWithTypeTypeEnum = {
    OgrMetaData: 'OgrMetaData'
} as const;
export type OgrMetaDataWithTypeTypeEnum = typeof OgrMetaDataWithTypeTypeEnum[keyof typeof OgrMetaDataWithTypeTypeEnum];


/**
 * Check if a given object implements the OgrMetaDataWithType interface.
 */
export function instanceOfOgrMetaDataWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "loadingInfo" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function OgrMetaDataWithTypeFromJSON(json: any): OgrMetaDataWithType {
    return OgrMetaDataWithTypeFromJSONTyped(json, false);
}

export function OgrMetaDataWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrMetaDataWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loadingInfo': OgrSourceDatasetFromJSON(json['loadingInfo']),
        'resultDescriptor': VectorResultDescriptorFromJSON(json['resultDescriptor']),
        'type': json['type'],
    };
}

export function OgrMetaDataWithTypeToJSON(value?: OgrMetaDataWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loadingInfo': OgrSourceDatasetToJSON(value.loadingInfo),
        'resultDescriptor': VectorResultDescriptorToJSON(value.resultDescriptor),
        'type': value.type,
    };
}

