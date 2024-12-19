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
exports.RoleToJSON = exports.RoleFromJSONTyped = exports.RoleFromJSON = exports.instanceOfRole = void 0;
/**
 * Check if a given object implements the Role interface.
 */
function instanceOfRole(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfRole = instanceOfRole;
function RoleFromJSON(json) {
    return RoleFromJSONTyped(json, false);
}
exports.RoleFromJSON = RoleFromJSON;
function RoleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
    };
}
exports.RoleFromJSONTyped = RoleFromJSONTyped;
function RoleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
    };
}
exports.RoleToJSON = RoleToJSON;
