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
exports.ProjectUpdateTokenToJSON = exports.ProjectUpdateTokenFromJSONTyped = exports.ProjectUpdateTokenFromJSON = exports.instanceOfProjectUpdateToken = exports.ProjectUpdateToken = void 0;
/**
 *
 * @export
 */
exports.ProjectUpdateToken = {
    None: 'none',
    Delete: 'delete'
};
/**
 * Check if a given object implements the ProjectUpdateToken interface.
 */
function instanceOfProjectUpdateToken(value) {
    return value === exports.ProjectUpdateToken.None || value === exports.ProjectUpdateToken.Delete;
}
exports.instanceOfProjectUpdateToken = instanceOfProjectUpdateToken;
function ProjectUpdateTokenFromJSON(json) {
    return ProjectUpdateTokenFromJSONTyped(json, false);
}
exports.ProjectUpdateTokenFromJSON = ProjectUpdateTokenFromJSON;
function ProjectUpdateTokenFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ProjectUpdateTokenFromJSONTyped = ProjectUpdateTokenFromJSONTyped;
function ProjectUpdateTokenToJSON(value) {
    return value;
}
exports.ProjectUpdateTokenToJSON = ProjectUpdateTokenToJSON;
