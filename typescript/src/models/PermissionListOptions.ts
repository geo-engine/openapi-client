/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
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
 * @interface PermissionListOptions
 */
export interface PermissionListOptions {
    /**
     * 
     * @type {number}
     * @memberof PermissionListOptions
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof PermissionListOptions
     */
    offset: number;
}

/**
 * Check if a given object implements the PermissionListOptions interface.
 */
export function instanceOfPermissionListOptions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "offset" in value;

    return isInstance;
}

export function PermissionListOptionsFromJSON(json: any): PermissionListOptions {
    return PermissionListOptionsFromJSONTyped(json, false);
}

export function PermissionListOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionListOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'offset': json['offset'],
    };
}

export function PermissionListOptionsToJSON(value?: PermissionListOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'offset': value.offset,
    };
}

