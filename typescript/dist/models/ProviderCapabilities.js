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
exports.ProviderCapabilitiesToJSON = exports.ProviderCapabilitiesFromJSONTyped = exports.ProviderCapabilitiesFromJSON = exports.instanceOfProviderCapabilities = void 0;
const SearchCapabilities_1 = require("./SearchCapabilities");
/**
 * Check if a given object implements the ProviderCapabilities interface.
 */
function instanceOfProviderCapabilities(value) {
    let isInstance = true;
    isInstance = isInstance && "listing" in value;
    isInstance = isInstance && "search" in value;
    return isInstance;
}
exports.instanceOfProviderCapabilities = instanceOfProviderCapabilities;
function ProviderCapabilitiesFromJSON(json) {
    return ProviderCapabilitiesFromJSONTyped(json, false);
}
exports.ProviderCapabilitiesFromJSON = ProviderCapabilitiesFromJSON;
function ProviderCapabilitiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'listing': json['listing'],
        'search': (0, SearchCapabilities_1.SearchCapabilitiesFromJSON)(json['search']),
    };
}
exports.ProviderCapabilitiesFromJSONTyped = ProviderCapabilitiesFromJSONTyped;
function ProviderCapabilitiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'listing': value.listing,
        'search': (0, SearchCapabilities_1.SearchCapabilitiesToJSON)(value.search),
    };
}
exports.ProviderCapabilitiesToJSON = ProviderCapabilitiesToJSON;
