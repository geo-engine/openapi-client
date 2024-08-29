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
exports.LayerListingToJSON = exports.LayerListingFromJSONTyped = exports.LayerListingFromJSON = exports.instanceOfLayerListing = exports.LayerListingTypeEnum = void 0;
const runtime_1 = require("../runtime");
const ProviderLayerId_1 = require("./ProviderLayerId");
/**
 * @export
 */
exports.LayerListingTypeEnum = {
    Layer: 'layer'
};
/**
 * Check if a given object implements the LayerListing interface.
 */
function instanceOfLayerListing(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfLayerListing = instanceOfLayerListing;
function LayerListingFromJSON(json) {
    return LayerListingFromJSONTyped(json, false);
}
exports.LayerListingFromJSON = LayerListingFromJSON;
function LayerListingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'id': (0, ProviderLayerId_1.ProviderLayerIdFromJSON)(json['id']),
        'name': json['name'],
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : json['properties'],
        'type': json['type'],
    };
}
exports.LayerListingFromJSONTyped = LayerListingFromJSONTyped;
function LayerListingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'id': (0, ProviderLayerId_1.ProviderLayerIdToJSON)(value.id),
        'name': value.name,
        'properties': value.properties,
        'type': value.type,
    };
}
exports.LayerListingToJSON = LayerListingToJSON;
