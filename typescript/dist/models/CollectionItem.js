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
exports.CollectionItemToJSON = exports.CollectionItemFromJSONTyped = exports.CollectionItemFromJSON = void 0;
const CollectionItemCollection_1 = require("./CollectionItemCollection");
const CollectionItemLayer_1 = require("./CollectionItemLayer");
function CollectionItemFromJSON(json) {
    return CollectionItemFromJSONTyped(json, false);
}
exports.CollectionItemFromJSON = CollectionItemFromJSON;
function CollectionItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'collection':
            return Object.assign(Object.assign({}, (0, CollectionItemCollection_1.CollectionItemCollectionFromJSONTyped)(json, true)), { type: 'collection' });
        case 'layer':
            return Object.assign(Object.assign({}, (0, CollectionItemLayer_1.CollectionItemLayerFromJSONTyped)(json, true)), { type: 'layer' });
        default:
            throw new Error(`No variant of CollectionItem exists with 'type=${json['type']}'`);
    }
}
exports.CollectionItemFromJSONTyped = CollectionItemFromJSONTyped;
function CollectionItemToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'collection':
            return (0, CollectionItemCollection_1.CollectionItemCollectionToJSON)(value);
        case 'layer':
            return (0, CollectionItemLayer_1.CollectionItemLayerToJSON)(value);
        default:
            throw new Error(`No variant of CollectionItem exists with 'type=${value['type']}'`);
    }
}
exports.CollectionItemToJSON = CollectionItemToJSON;
