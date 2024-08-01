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
export function instanceOfResourceIdDatasetId(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ResourceIdDatasetIdFromJSON(json: any): ResourceIdDatasetId {
    return ResourceIdDatasetIdFromJSONTyped(json, false);
}

export function ResourceIdDatasetIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdDatasetId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ResourceIdDatasetIdToJSON(value?: ResourceIdDatasetId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
    };
}

