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
} as const;
export type SearchType = typeof SearchType[keyof typeof SearchType];


export function SearchTypeFromJSON(json: any): SearchType {
    return SearchTypeFromJSONTyped(json, false);
}

export function SearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchType {
    return json as SearchType;
}

export function SearchTypeToJSON(value?: SearchType | null): any {
    return value as any;
}
