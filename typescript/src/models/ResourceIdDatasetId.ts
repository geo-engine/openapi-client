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
/**
 * 
 * @export
 * @interface ResourceIdDatasetId
 */
export interface ResourceIdDatasetId {
    /**
     * 
     * @type {string}
     * @memberof ResourceIdDatasetId
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceIdDatasetId
     */
    type: ResourceIdDatasetIdTypeEnum;
}


/**
 * @export
 */
export const ResourceIdDatasetIdTypeEnum = {
    DatasetId: 'DatasetId'
} as const;
export type ResourceIdDatasetIdTypeEnum = typeof ResourceIdDatasetIdTypeEnum[keyof typeof ResourceIdDatasetIdTypeEnum];


/**
 * Check if a given object implements the ResourceIdDatasetId interface.
 */
export function instanceOfResourceIdDatasetId(value: object): value is ResourceIdDatasetId {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ResourceIdDatasetIdFromJSON(json: any): ResourceIdDatasetId {
    return ResourceIdDatasetIdFromJSONTyped(json, false);
}

export function ResourceIdDatasetIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdDatasetId {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ResourceIdDatasetIdToJSON(value?: ResourceIdDatasetId | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': value['type'],
    };
}
