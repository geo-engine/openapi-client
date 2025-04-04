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
exports.LayerCollectionListingToJSONTyped = exports.LayerCollectionListingToJSON = exports.LayerCollectionListingFromJSONTyped = exports.LayerCollectionListingFromJSON = exports.instanceOfLayerCollectionListing = exports.LayerCollectionListingTypeEnum = void 0;
const ProviderLayerCollectionId_1 = require("./ProviderLayerCollectionId");
/**
 * @export
 */
exports.LayerCollectionListingTypeEnum = {
    Collection: 'collection'
};
/**
 * Check if a given object implements the LayerCollectionListing interface.
 */
function instanceOfLayerCollectionListing(value) {
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfLayerCollectionListing = instanceOfLayerCollectionListing;
function LayerCollectionListingFromJSON(json) {
    return LayerCollectionListingFromJSONTyped(json, false);
}
exports.LayerCollectionListingFromJSON = LayerCollectionListingFromJSON;
function LayerCollectionListingFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'id': (0, ProviderLayerCollectionId_1.ProviderLayerCollectionIdFromJSON)(json['id']),
        'name': json['name'],
        'properties': json['properties'] == null ? undefined : json['properties'],
        'type': json['type'],
    };
}
exports.LayerCollectionListingFromJSONTyped = LayerCollectionListingFromJSONTyped;
function LayerCollectionListingToJSON(json) {
    return LayerCollectionListingToJSONTyped(json, false);
}
exports.LayerCollectionListingToJSON = LayerCollectionListingToJSON;
function LayerCollectionListingToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'id': (0, ProviderLayerCollectionId_1.ProviderLayerCollectionIdToJSON)(value['id']),
        'name': value['name'],
        'properties': value['properties'],
        'type': value['type'],
    };
}
exports.LayerCollectionListingToJSONTyped = LayerCollectionListingToJSONTyped;
