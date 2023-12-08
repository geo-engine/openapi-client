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
 * @interface AddRole
 */
export interface AddRole {
    /**
     * 
     * @type {string}
     * @memberof AddRole
     */
    name: string;
}

/**
 * Check if a given object implements the AddRole interface.
 */
export function instanceOfAddRole(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AddRoleFromJSON(json: any): AddRole {
    return AddRoleFromJSONTyped(json, false);
}

export function AddRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function AddRoleToJSON(value?: AddRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
