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
exports.instanceOfUserInfo = instanceOfUserInfo;
exports.UserInfoFromJSON = UserInfoFromJSON;
exports.UserInfoFromJSONTyped = UserInfoFromJSONTyped;
exports.UserInfoToJSON = UserInfoToJSON;
exports.UserInfoToJSONTyped = UserInfoToJSONTyped;
/**
 * Check if a given object implements the UserInfo interface.
 */
function instanceOfUserInfo(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
function UserInfoFromJSON(json) {
    return UserInfoFromJSONTyped(json, false);
}
function UserInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'] == null ? undefined : json['email'],
        'id': json['id'],
        'realName': json['realName'] == null ? undefined : json['realName'],
    };
}
function UserInfoToJSON(json) {
    return UserInfoToJSONTyped(json, false);
}
function UserInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
        'id': value['id'],
        'realName': value['realName'],
    };
}
