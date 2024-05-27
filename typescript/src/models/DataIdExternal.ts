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
 * @interface DataIdExternal
 */
export interface DataIdExternal {
    /**
     * 
     * @type {string}
     * @memberof DataIdExternal
     */
    layerId: string;
    /**
     * 
     * @type {string}
     * @memberof DataIdExternal
     */
    providerId: string;
    /**
     * 
     * @type {string}
     * @memberof DataIdExternal
     */
    type: DataIdExternalTypeEnum;
}


/**
 * @export
 */
export const DataIdExternalTypeEnum = {
    External: 'external'
} as const;
export type DataIdExternalTypeEnum = typeof DataIdExternalTypeEnum[keyof typeof DataIdExternalTypeEnum];


/**
 * Check if a given object implements the DataIdExternal interface.
 */
export function instanceOfDataIdExternal(value: object): value is DataIdExternal {
    if (!('layerId' in value) || value['layerId'] === undefined) return false;
    if (!('providerId' in value) || value['providerId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function DataIdExternalFromJSON(json: any): DataIdExternal {
    return DataIdExternalFromJSONTyped(json, false);
}

export function DataIdExternalFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataIdExternal {
    if (json == null) {
        return json;
    }
    return {
        
        'layerId': json['layerId'],
        'providerId': json['providerId'],
        'type': json['type'],
    };
}

export function DataIdExternalToJSON(value?: DataIdExternal | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'layerId': value['layerId'],
        'providerId': value['providerId'],
        'type': value['type'],
    };
}

