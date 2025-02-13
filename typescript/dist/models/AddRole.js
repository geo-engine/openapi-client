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
exports.instanceOfAddRole = instanceOfAddRole;
exports.AddRoleFromJSON = AddRoleFromJSON;
exports.AddRoleFromJSONTyped = AddRoleFromJSONTyped;
exports.AddRoleToJSON = AddRoleToJSON;
exports.AddRoleToJSONTyped = AddRoleToJSONTyped;
/**
 * Check if a given object implements the AddRole interface.
 */
function instanceOfAddRole(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
function AddRoleFromJSON(json) {
    return AddRoleFromJSONTyped(json, false);
}
function AddRoleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
    };
}
function AddRoleToJSON(json) {
    return AddRoleToJSONTyped(json, false);
}
function AddRoleToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
    };
}
