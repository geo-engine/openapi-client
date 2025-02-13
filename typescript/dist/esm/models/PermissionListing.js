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
import { RoleFromJSON, RoleToJSON, } from './Role';
import { PermissionFromJSON, PermissionToJSON, } from './Permission';
import { ResourceFromJSON, ResourceToJSON, } from './Resource';
/**
 * Check if a given object implements the PermissionListing interface.
 */
export function instanceOfPermissionListing(value) {
    if (!('permission' in value) || value['permission'] === undefined)
        return false;
    if (!('resource' in value) || value['resource'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    return true;
}
export function PermissionListingFromJSON(json) {
    return PermissionListingFromJSONTyped(json, false);
}
export function PermissionListingFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'permission': PermissionFromJSON(json['permission']),
        'resource': ResourceFromJSON(json['resource']),
        'role': RoleFromJSON(json['role']),
    };
}
export function PermissionListingToJSON(json) {
    return PermissionListingToJSONTyped(json, false);
}
export function PermissionListingToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'permission': PermissionToJSON(value['permission']),
        'resource': ResourceToJSON(value['resource']),
        'role': RoleToJSON(value['role']),
    };
}
