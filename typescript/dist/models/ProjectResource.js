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
exports.ProjectResourceTypeEnum = void 0;
exports.instanceOfProjectResource = instanceOfProjectResource;
exports.ProjectResourceFromJSON = ProjectResourceFromJSON;
exports.ProjectResourceFromJSONTyped = ProjectResourceFromJSONTyped;
exports.ProjectResourceToJSON = ProjectResourceToJSON;
exports.ProjectResourceToJSONTyped = ProjectResourceToJSONTyped;
/**
 * @export
 */
exports.ProjectResourceTypeEnum = {
    Project: 'project'
};
/**
 * Check if a given object implements the ProjectResource interface.
 */
function instanceOfProjectResource(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function ProjectResourceFromJSON(json) {
    return ProjectResourceFromJSONTyped(json, false);
}
function ProjectResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
function ProjectResourceToJSON(json) {
    return ProjectResourceToJSONTyped(json, false);
}
function ProjectResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
