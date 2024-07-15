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
 * @interface DatasetIdResourceId
 */
export interface DatasetIdResourceId {
    /**
     * 
     * @type {string}
     * @memberof DatasetIdResourceId
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetIdResourceId
     */
    type: DatasetIdResourceIdTypeEnum;
}


/**
 * @export
 */
export const DatasetIdResourceIdTypeEnum = {
    DatasetId: 'DatasetId'
} as const;
export type DatasetIdResourceIdTypeEnum = typeof DatasetIdResourceIdTypeEnum[keyof typeof DatasetIdResourceIdTypeEnum];


/**
 * Check if a given object implements the DatasetIdResourceId interface.
 */
export function instanceOfDatasetIdResourceId(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DatasetIdResourceIdFromJSON(json: any): DatasetIdResourceId {
    return DatasetIdResourceIdFromJSONTyped(json, false);
}

export function DatasetIdResourceIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetIdResourceId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function DatasetIdResourceIdToJSON(value?: DatasetIdResourceId | null): any {
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

