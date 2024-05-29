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
exports.UpdateDatasetToJSON = exports.UpdateDatasetFromJSONTyped = exports.UpdateDatasetFromJSON = exports.instanceOfUpdateDataset = void 0;
/**
 * Check if a given object implements the UpdateDataset interface.
 */
function instanceOfUpdateDataset(value) {
    if (!('description' in value))
        return false;
    if (!('displayName' in value))
        return false;
    if (!('name' in value))
        return false;
    if (!('tags' in value))
        return false;
    return true;
}
exports.instanceOfUpdateDataset = instanceOfUpdateDataset;
function UpdateDatasetFromJSON(json) {
    return UpdateDatasetFromJSONTyped(json, false);
}
exports.UpdateDatasetFromJSON = UpdateDatasetFromJSON;
function UpdateDatasetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'displayName': json['display_name'],
        'name': json['name'],
        'tags': json['tags'],
    };
}
exports.UpdateDatasetFromJSONTyped = UpdateDatasetFromJSONTyped;
function UpdateDatasetToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'display_name': value['displayName'],
        'name': value['name'],
        'tags': value['tags'],
    };
}
exports.UpdateDatasetToJSON = UpdateDatasetToJSON;
