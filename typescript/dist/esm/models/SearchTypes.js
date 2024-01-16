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
/**
 * Check if a given object implements the SearchTypes interface.
 */
export function instanceOfSearchTypes(value) {
    let isInstance = true;
    isInstance = isInstance && "fulltext" in value;
    isInstance = isInstance && "prefix" in value;
    return isInstance;
}
export function SearchTypesFromJSON(json) {
    return SearchTypesFromJSONTyped(json, false);
}
export function SearchTypesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fulltext': json['fulltext'],
        'prefix': json['prefix'],
    };
}
export function SearchTypesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fulltext': value.fulltext,
        'prefix': value.prefix,
    };
}
