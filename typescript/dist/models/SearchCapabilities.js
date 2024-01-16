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
exports.SearchCapabilitiesToJSON = exports.SearchCapabilitiesFromJSONTyped = exports.SearchCapabilitiesFromJSON = exports.instanceOfSearchCapabilities = void 0;
const runtime_1 = require("../runtime");
const SearchTypes_1 = require("./SearchTypes");
/**
 * Check if a given object implements the SearchCapabilities interface.
 */
function instanceOfSearchCapabilities(value) {
    let isInstance = true;
    isInstance = isInstance && "autocomplete" in value;
    isInstance = isInstance && "searchTypes" in value;
    return isInstance;
}
exports.instanceOfSearchCapabilities = instanceOfSearchCapabilities;
function SearchCapabilitiesFromJSON(json) {
    return SearchCapabilitiesFromJSONTyped(json, false);
}
exports.SearchCapabilitiesFromJSON = SearchCapabilitiesFromJSON;
function SearchCapabilitiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autocomplete': json['autocomplete'],
        'filters': !(0, runtime_1.exists)(json, 'filters') ? undefined : json['filters'],
        'searchTypes': (0, SearchTypes_1.SearchTypesFromJSON)(json['searchTypes']),
    };
}
exports.SearchCapabilitiesFromJSONTyped = SearchCapabilitiesFromJSONTyped;
function SearchCapabilitiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autocomplete': value.autocomplete,
        'filters': value.filters,
        'searchTypes': (0, SearchTypes_1.SearchTypesToJSON)(value.searchTypes),
    };
}
exports.SearchCapabilitiesToJSON = SearchCapabilitiesToJSON;
