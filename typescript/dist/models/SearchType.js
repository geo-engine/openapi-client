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
exports.SearchTypeToJSON = exports.SearchTypeFromJSONTyped = exports.SearchTypeFromJSON = exports.SearchType = void 0;
/**
 *
 * @export
 */
exports.SearchType = {
    Fulltext: 'fulltext',
    Prefix: 'prefix'
};
function SearchTypeFromJSON(json) {
    return SearchTypeFromJSONTyped(json, false);
}
exports.SearchTypeFromJSON = SearchTypeFromJSON;
function SearchTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.SearchTypeFromJSONTyped = SearchTypeFromJSONTyped;
function SearchTypeToJSON(value) {
    return value;
}
exports.SearchTypeToJSON = SearchTypeToJSON;
