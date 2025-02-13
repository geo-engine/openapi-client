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
exports.instanceOfLayerCollection = instanceOfLayerCollection;
exports.LayerCollectionFromJSON = LayerCollectionFromJSON;
exports.LayerCollectionFromJSONTyped = LayerCollectionFromJSONTyped;
exports.LayerCollectionToJSON = LayerCollectionToJSON;
exports.LayerCollectionToJSONTyped = LayerCollectionToJSONTyped;
const CollectionItem_1 = require("./CollectionItem");
const ProviderLayerCollectionId_1 = require("./ProviderLayerCollectionId");
/**
 * Check if a given object implements the LayerCollection interface.
 */
function instanceOfLayerCollection(value) {
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('items' in value) || value['items'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('properties' in value) || value['properties'] === undefined)
        return false;
    return true;
}
function LayerCollectionFromJSON(json) {
    return LayerCollectionFromJSONTyped(json, false);
}
function LayerCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'entryLabel': json['entryLabel'] == null ? undefined : json['entryLabel'],
        'id': (0, ProviderLayerCollectionId_1.ProviderLayerCollectionIdFromJSON)(json['id']),
        'items': (json['items'].map(CollectionItem_1.CollectionItemFromJSON)),
        'name': json['name'],
        'properties': json['properties'],
    };
}
function LayerCollectionToJSON(json) {
    return LayerCollectionToJSONTyped(json, false);
}
function LayerCollectionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'entryLabel': value['entryLabel'],
        'id': (0, ProviderLayerCollectionId_1.ProviderLayerCollectionIdToJSON)(value['id']),
        'items': (value['items'].map(CollectionItem_1.CollectionItemToJSON)),
        'name': value['name'],
        'properties': value['properties'],
    };
}
