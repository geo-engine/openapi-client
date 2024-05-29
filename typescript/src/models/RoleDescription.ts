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
import type { Role } from './Role';
import {
    RoleFromJSON,
    RoleFromJSONTyped,
    RoleToJSON,
} from './Role';

/**
 * 
 * @export
 * @interface RoleDescription
 */
export interface RoleDescription {
    /**
     * 
     * @type {boolean}
     * @memberof RoleDescription
     */
    individual: boolean;
    /**
     * 
     * @type {Role}
     * @memberof RoleDescription
     */
    role: Role;
}

/**
 * Check if a given object implements the RoleDescription interface.
 */
export function instanceOfRoleDescription(value: object): boolean {
    if (!('individual' in value)) return false;
    if (!('role' in value)) return false;
    return true;
}

export function RoleDescriptionFromJSON(json: any): RoleDescription {
    return RoleDescriptionFromJSONTyped(json, false);
}

export function RoleDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleDescription {
    if (json == null) {
        return json;
    }
    return {
        
        'individual': json['individual'],
        'role': RoleFromJSON(json['role']),
    };
}

export function RoleDescriptionToJSON(value?: RoleDescription | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'individual': value['individual'],
        'role': RoleToJSON(value['role']),
    };
}

