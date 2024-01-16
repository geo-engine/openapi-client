"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerCollectionListingWithTypeToJSON = exports.LayerCollectionListingWithTypeFromJSONTyped = exports.LayerCollectionListingWithTypeFromJSON = exports.instanceOfLayerCollectionListingWithType = exports.LayerCollectionListingWithTypeTypeEnum = void 0;
const runtime_1 = require("../runtime");
const ProviderLayerCollectionId_1 = require("./ProviderLayerCollectionId");
/**
 * @export
 */
exports.LayerCollectionListingWithTypeTypeEnum = {
    Collection: 'collection',
    Layer: 'layer'
};
/**
 * Check if a given object implements the LayerCollectionListingWithType interface.
 */
function instanceOfLayerCollectionListingWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfLayerCollectionListingWithType = instanceOfLayerCollectionListingWithType;
function LayerCollectionListingWithTypeFromJSON(json) {
    return LayerCollectionListingWithTypeFromJSONTyped(json, false);
}
exports.LayerCollectionListingWithTypeFromJSON = LayerCollectionListingWithTypeFromJSON;
function LayerCollectionListingWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'id': (0, ProviderLayerCollectionId_1.ProviderLayerCollectionIdFromJSON)(json['id']),
        'name': json['name'],
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : json['properties'],
        'type': json['type'],
    };
}
exports.LayerCollectionListingWithTypeFromJSONTyped = LayerCollectionListingWithTypeFromJSONTyped;
function LayerCollectionListingWithTypeToJSON(value) {
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
        'type': value.type,
    };
}
exports.LayerCollectionListingWithTypeToJSON = LayerCollectionListingWithTypeToJSON;
