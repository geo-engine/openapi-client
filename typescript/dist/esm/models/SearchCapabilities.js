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
import { exists } from '../runtime';
import { SearchTypesFromJSON, SearchTypesToJSON, } from './SearchTypes';
/**
 * Check if a given object implements the SearchCapabilities interface.
 */
export function instanceOfSearchCapabilities(value) {
    let isInstance = true;
    isInstance = isInstance && "autocomplete" in value;
    isInstance = isInstance && "searchTypes" in value;
    return isInstance;
}
export function SearchCapabilitiesFromJSON(json) {
    return SearchCapabilitiesFromJSONTyped(json, false);
}
export function SearchCapabilitiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autocomplete': json['autocomplete'],
        'filters': !exists(json, 'filters') ? undefined : json['filters'],
        'searchTypes': SearchTypesFromJSON(json['searchTypes']),
    };
}
export function SearchCapabilitiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autocomplete': value.autocomplete,
        'filters': value.filters,
        'searchTypes': SearchTypesToJSON(value.searchTypes),
    };
}
