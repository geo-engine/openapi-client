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
exports.CollectionTypeToJSON = exports.CollectionTypeFromJSONTyped = exports.CollectionTypeFromJSON = exports.CollectionType = void 0;
/**
 *
 * @export
 */
exports.CollectionType = {
    FeatureCollection: 'FeatureCollection'
};
function CollectionTypeFromJSON(json) {
    return CollectionTypeFromJSONTyped(json, false);
}
exports.CollectionTypeFromJSON = CollectionTypeFromJSON;
function CollectionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CollectionTypeFromJSONTyped = CollectionTypeFromJSONTyped;
function CollectionTypeToJSON(value) {
    return value;
}
exports.CollectionTypeToJSON = CollectionTypeToJSON;
