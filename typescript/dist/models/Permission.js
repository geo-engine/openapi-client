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
exports.PermissionToJSON = exports.PermissionFromJSONTyped = exports.PermissionFromJSON = exports.Permission = void 0;
/**
 *
 * @export
 */
exports.Permission = {
    Read: 'Read',
    Owner: 'Owner'
};
function PermissionFromJSON(json) {
    return PermissionFromJSONTyped(json, false);
}
exports.PermissionFromJSON = PermissionFromJSON;
function PermissionFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PermissionFromJSONTyped = PermissionFromJSONTyped;
function PermissionToJSON(value) {
    return value;
}
exports.PermissionToJSON = PermissionToJSON;
