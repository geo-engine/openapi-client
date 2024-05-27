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
/**
 *
 * @export
 */
export const SearchType = {
    Fulltext: 'fulltext',
    Prefix: 'prefix'
};
export function instanceOfSearchType(value) {
    for (const key in SearchType) {
        if (Object.prototype.hasOwnProperty.call(SearchType, key)) {
            if (SearchType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function SearchTypeFromJSON(json) {
    return SearchTypeFromJSONTyped(json, false);
}
export function SearchTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function SearchTypeToJSON(value) {
    return value;
}
