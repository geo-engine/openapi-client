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
exports.CollectionItemToJSON = exports.CollectionItemFromJSONTyped = exports.CollectionItemFromJSON = void 0;
const LayerCollectionListingWithType_1 = require("./LayerCollectionListingWithType");
const LayerListingWithType_1 = require("./LayerListingWithType");
function CollectionItemFromJSON(json) {
    return CollectionItemFromJSONTyped(json, false);
}
exports.CollectionItemFromJSON = CollectionItemFromJSON;
function CollectionItemFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'collection':
            return Object.assign(Object.assign({}, (0, LayerCollectionListingWithType_1.LayerCollectionListingWithTypeFromJSONTyped)(json, true)), { type: 'collection' });
        case 'layer':
            return Object.assign(Object.assign({}, (0, LayerListingWithType_1.LayerListingWithTypeFromJSONTyped)(json, true)), { type: 'layer' });
        default:
            throw new Error(`No variant of CollectionItem exists with 'type=${json['type']}'`);
    }
}
exports.CollectionItemFromJSONTyped = CollectionItemFromJSONTyped;
function CollectionItemToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'collection':
            return (0, LayerCollectionListingWithType_1.LayerCollectionListingWithTypeToJSON)(value);
        case 'layer':
            return (0, LayerListingWithType_1.LayerListingWithTypeToJSON)(value);
        default:
            throw new Error(`No variant of CollectionItem exists with 'type=${value['type']}'`);
    }
}
exports.CollectionItemToJSON = CollectionItemToJSON;
