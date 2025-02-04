"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationToJSON = exports.UserRegistrationFromJSONTyped = exports.UserRegistrationFromJSON = exports.instanceOfUserRegistration = void 0;
/**
 * Check if a given object implements the UserRegistration interface.
 */
function instanceOfUserRegistration(value) {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "realName" in value;
    return isInstance;
}
exports.instanceOfUserRegistration = instanceOfUserRegistration;
function UserRegistrationFromJSON(json) {
    return UserRegistrationFromJSONTyped(json, false);
}
exports.UserRegistrationFromJSON = UserRegistrationFromJSON;
function UserRegistrationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'password': json['password'],
        'realName': json['realName'],
    };
}
exports.UserRegistrationFromJSONTyped = UserRegistrationFromJSONTyped;
function UserRegistrationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'password': value.password,
        'realName': value.realName,
    };
}
exports.UserRegistrationToJSON = UserRegistrationToJSON;
