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
import { PermissionFromJSON, PermissionToJSON, } from './Permission';
import { ResourceFromJSON, ResourceToJSON, } from './Resource';
/**
 * Check if a given object implements the PermissionRequest interface.
 */
export function instanceOfPermissionRequest(value) {
    if (!('permission' in value) || value['permission'] === undefined)
        return false;
    if (!('resource' in value) || value['resource'] === undefined)
        return false;
    if (!('roleId' in value) || value['roleId'] === undefined)
        return false;
    return true;
}
export function PermissionRequestFromJSON(json) {
    return PermissionRequestFromJSONTyped(json, false);
}
export function PermissionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'permission': PermissionFromJSON(json['permission']),
        'resource': ResourceFromJSON(json['resource']),
        'roleId': json['roleId'],
    };
}
export function PermissionRequestToJSON(json) {
    return PermissionRequestToJSONTyped(json, false);
}
export function PermissionRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'permission': PermissionToJSON(value['permission']),
        'resource': ResourceToJSON(value['resource']),
        'roleId': value['roleId'],
    };
}
