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
exports.instanceOfProjectListing = instanceOfProjectListing;
exports.ProjectListingFromJSON = ProjectListingFromJSON;
exports.ProjectListingFromJSONTyped = ProjectListingFromJSONTyped;
exports.ProjectListingToJSON = ProjectListingToJSON;
exports.ProjectListingToJSONTyped = ProjectListingToJSONTyped;
/**
 * Check if a given object implements the ProjectListing interface.
 */
function instanceOfProjectListing(value) {
    if (!('changed' in value) || value['changed'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('layerNames' in value) || value['layerNames'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('plotNames' in value) || value['plotNames'] === undefined)
        return false;
    return true;
}
function ProjectListingFromJSON(json) {
    return ProjectListingFromJSONTyped(json, false);
}
function ProjectListingFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'changed': (new Date(json['changed'])),
        'description': json['description'],
        'id': json['id'],
        'layerNames': json['layerNames'],
        'name': json['name'],
        'plotNames': json['plotNames'],
    };
}
function ProjectListingToJSON(json) {
    return ProjectListingToJSONTyped(json, false);
}
function ProjectListingToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'changed': ((value['changed']).toISOString()),
        'description': value['description'],
        'id': value['id'],
        'layerNames': value['layerNames'],
        'name': value['name'],
        'plotNames': value['plotNames'],
    };
}
