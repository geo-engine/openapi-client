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
import type { ResourceId } from './ResourceId';
import {
    ResourceIdFromJSON,
    ResourceIdFromJSONTyped,
    ResourceIdToJSON,
} from './ResourceId';
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
} from './Permission';

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
     * @type {ResourceId}
     * @memberof PermissionListing
     */
    resourceId: ResourceId;
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
export function instanceOfPermissionListing(value: object): value is PermissionListing {
    if (!('permission' in value) || value['permission'] === undefined) return false;
    if (!('resourceId' in value) || value['resourceId'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function PermissionListingFromJSON(json: any): PermissionListing {
    return PermissionListingFromJSONTyped(json, false);
}

export function PermissionListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionListing {
    if (json == null) {
        return json;
    }
    return {
        
        'permission': PermissionFromJSON(json['permission']),
        'resourceId': ResourceIdFromJSON(json['resourceId']),
        'role': RoleFromJSON(json['role']),
    };
}

export function PermissionListingToJSON(value?: PermissionListing | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'permission': PermissionToJSON(value['permission']),
        'resourceId': ResourceIdToJSON(value['resourceId']),
        'role': RoleToJSON(value['role']),
    };
}

