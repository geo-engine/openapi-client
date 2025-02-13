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
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
    PermissionToJSONTyped,
} from './Permission';
import type { Resource } from './Resource';
import {
    ResourceFromJSON,
    ResourceFromJSONTyped,
    ResourceToJSON,
    ResourceToJSONTyped,
} from './Resource';

/**
 * Request for adding a new permission to the given role on the given resource
 * @export
 * @interface PermissionRequest
 */
export interface PermissionRequest {
    /**
     * 
     * @type {Permission}
     * @memberof PermissionRequest
     */
    permission: Permission;
    /**
     * 
     * @type {Resource}
     * @memberof PermissionRequest
     */
    resource: Resource;
    /**
     * 
     * @type {string}
     * @memberof PermissionRequest
     */
    roleId: string;
}



/**
 * Check if a given object implements the PermissionRequest interface.
 */
export function instanceOfPermissionRequest(value: object): value is PermissionRequest {
    if (!('permission' in value) || value['permission'] === undefined) return false;
    if (!('resource' in value) || value['resource'] === undefined) return false;
    if (!('roleId' in value) || value['roleId'] === undefined) return false;
    return true;
}

export function PermissionRequestFromJSON(json: any): PermissionRequest {
    return PermissionRequestFromJSONTyped(json, false);
}

export function PermissionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'permission': PermissionFromJSON(json['permission']),
        'resource': ResourceFromJSON(json['resource']),
        'roleId': json['roleId'],
    };
}

export function PermissionRequestToJSON(json: any): PermissionRequest {
    return PermissionRequestToJSONTyped(json, false);
}

export function PermissionRequestToJSONTyped(value?: PermissionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'permission': PermissionToJSON(value['permission']),
        'resource': ResourceToJSON(value['resource']),
        'roleId': value['roleId'],
    };
}

