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
exports.LayerCollectionListingToJSON = exports.LayerCollectionListingFromJSONTyped = exports.LayerCollectionListingFromJSON = exports.instanceOfLayerCollectionListing = void 0;
const runtime_1 = require("../runtime");
const ProviderLayerCollectionId_1 = require("./ProviderLayerCollectionId");
/**
 * Check if a given object implements the LayerCollectionListing interface.
 */
function instanceOfLayerCollectionListing(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfLayerCollectionListing = instanceOfLayerCollectionListing;
function LayerCollectionListingFromJSON(json) {
    return LayerCollectionListingFromJSONTyped(json, false);
}
exports.LayerCollectionListingFromJSON = LayerCollectionListingFromJSON;
function LayerCollectionListingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'id': (0, ProviderLayerCollectionId_1.ProviderLayerCollectionIdFromJSON)(json['id']),
        'name': json['name'],
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : json['properties'],
    };
}
exports.LayerCollectionListingFromJSONTyped = LayerCollectionListingFromJSONTyped;
function LayerCollectionListingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'id': (0, ProviderLayerCollectionId_1.ProviderLayerCollectionIdToJSON)(value.id),
        'name': value.name,
        'properties': value.properties,
    };
}
exports.LayerCollectionListingToJSON = LayerCollectionListingToJSON;
