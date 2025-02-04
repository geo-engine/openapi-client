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
/**
 * Check if a given object implements the RoleDescription interface.
 */
export function instanceOfRoleDescription(value) {
    let isInstance = true;
    isInstance = isInstance && "individual" in value;
    isInstance = isInstance && "role" in value;
    return isInstance;
}
export function RoleDescriptionFromJSON(json) {
    return RoleDescriptionFromJSONTyped(json, false);
}
export function RoleDescriptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'individual': json['individual'],
        'role': RoleFromJSON(json['role']),
    };
}
export function RoleDescriptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'individual': value.individual,
        'role': RoleToJSON(value.role),
    };
}
