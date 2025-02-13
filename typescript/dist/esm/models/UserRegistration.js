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
 * Check if a given object implements the UserRegistration interface.
 */
export function instanceOfUserRegistration(value) {
    if (!('email' in value) || value['email'] === undefined)
        return false;
    if (!('password' in value) || value['password'] === undefined)
        return false;
    if (!('realName' in value) || value['realName'] === undefined)
        return false;
    return true;
}
export function UserRegistrationFromJSON(json) {
    return UserRegistrationFromJSONTyped(json, false);
}
export function UserRegistrationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'],
        'password': json['password'],
        'realName': json['realName'],
    };
}
export function UserRegistrationToJSON(json) {
    return UserRegistrationToJSONTyped(json, false);
}
export function UserRegistrationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
        'password': value['password'],
        'realName': value['realName'],
    };
}
