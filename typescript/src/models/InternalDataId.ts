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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InternalDataId
 */
export interface InternalDataId {
    /**
     * 
     * @type {string}
     * @memberof InternalDataId
     */
    datasetId: string;
    /**
     * 
     * @type {string}
     * @memberof InternalDataId
     */
    type: InternalDataIdTypeEnum;
}


/**
 * @export
 */
export const InternalDataIdTypeEnum = {
    Internal: 'internal'
} as const;
export type InternalDataIdTypeEnum = typeof InternalDataIdTypeEnum[keyof typeof InternalDataIdTypeEnum];


/**
 * Check if a given object implements the InternalDataId interface.
 */
export function instanceOfInternalDataId(value: object): value is InternalDataId {
    if (!('datasetId' in value) || value['datasetId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function InternalDataIdFromJSON(json: any): InternalDataId {
    return InternalDataIdFromJSONTyped(json, false);
}

export function InternalDataIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalDataId {
    if (json == null) {
        return json;
    }
    return {
        
        'datasetId': json['datasetId'],
        'type': json['type'],
    };
}

export function InternalDataIdToJSON(json: any): InternalDataId {
    return InternalDataIdToJSONTyped(json, false);
}

export function InternalDataIdToJSONTyped(value?: InternalDataId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'datasetId': value['datasetId'],
        'type': value['type'],
    };
}

