"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredentialsToJSON = exports.UserCredentialsFromJSONTyped = exports.UserCredentialsFromJSON = exports.instanceOfUserCredentials = void 0;
/**
 * Check if a given object implements the UserCredentials interface.
 */
function instanceOfUserCredentials(value) {
    if (!('email' in value))
        return false;
    if (!('password' in value))
        return false;
    return true;
}
exports.instanceOfUserCredentials = instanceOfUserCredentials;
function UserCredentialsFromJSON(json) {
    return UserCredentialsFromJSONTyped(json, false);
}
exports.UserCredentialsFromJSON = UserCredentialsFromJSON;
function UserCredentialsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'],
        'password': json['password'],
    };
}
exports.UserCredentialsFromJSONTyped = UserCredentialsFromJSONTyped;
function UserCredentialsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
        'password': value['password'],
    };
}
exports.UserCredentialsToJSON = UserCredentialsToJSON;
