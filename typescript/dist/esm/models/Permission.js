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
/**
 *
 * @export
 */
export const Permission = {
    Read: 'Read',
    Owner: 'Owner'
};
export function instanceOfPermission(value) {
    for (const key in Permission) {
        if (Object.prototype.hasOwnProperty.call(Permission, key)) {
            if (Permission[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function PermissionFromJSON(json) {
    return PermissionFromJSONTyped(json, false);
}
export function PermissionFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function PermissionToJSON(value) {
    return value;
}
export function PermissionToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
