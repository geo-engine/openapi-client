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
exports.UpdateLayerCollectionToJSONTyped = exports.UpdateLayerCollectionToJSON = exports.UpdateLayerCollectionFromJSONTyped = exports.UpdateLayerCollectionFromJSON = exports.instanceOfUpdateLayerCollection = void 0;
/**
 * Check if a given object implements the UpdateLayerCollection interface.
 */
function instanceOfUpdateLayerCollection(value) {
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
exports.instanceOfUpdateLayerCollection = instanceOfUpdateLayerCollection;
function UpdateLayerCollectionFromJSON(json) {
    return UpdateLayerCollectionFromJSONTyped(json, false);
}
exports.UpdateLayerCollectionFromJSON = UpdateLayerCollectionFromJSON;
function UpdateLayerCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'name': json['name'],
        'properties': json['properties'] == null ? undefined : json['properties'],
    };
}
exports.UpdateLayerCollectionFromJSONTyped = UpdateLayerCollectionFromJSONTyped;
function UpdateLayerCollectionToJSON(json) {
    return UpdateLayerCollectionToJSONTyped(json, false);
}
exports.UpdateLayerCollectionToJSON = UpdateLayerCollectionToJSON;
function UpdateLayerCollectionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'name': value['name'],
        'properties': value['properties'],
    };
}
exports.UpdateLayerCollectionToJSONTyped = UpdateLayerCollectionToJSONTyped;
