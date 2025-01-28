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

import { exists, mapValues } from '../runtime';
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
} from './Permission';
import type { Resource } from './Resource';
import {
    ResourceFromJSON,
    ResourceFromJSONTyped,
    ResourceToJSON,
} from './Resource';
import type { Role } from './Role';
import {
    RoleFromJSON,
    RoleFromJSONTyped,
    RoleToJSON,
} from './Role';

/**
 * 
 * @export
 * @interface PermissionListing
 */
export interface PermissionListing {
    /**
     * 
     * @type {Permission}
     * @memberof PermissionListing
     */
    permission: Permission;
    /**
     * 
     * @type {Resource}
     * @memberof PermissionListing
     */
    resource: Resource;
    /**
     * 
     * @type {Role}
     * @memberof PermissionListing
     */
    role: Role;
}

/**
 * Check if a given object implements the PermissionListing interface.
 */
export function instanceOfPermissionListing(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "resource" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function PermissionListingFromJSON(json: any): PermissionListing {
    return PermissionListingFromJSONTyped(json, false);
}

export function PermissionListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionListing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permission': PermissionFromJSON(json['permission']),
        'resource': ResourceFromJSON(json['resource']),
        'role': RoleFromJSON(json['role']),
    };
}

export function PermissionListingToJSON(value?: PermissionListing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permission': PermissionToJSON(value.permission),
        'resource': ResourceToJSON(value.resource),
        'role': RoleToJSON(value.role),
    };
}

