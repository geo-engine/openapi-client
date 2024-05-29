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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SearchTypes
 */
export interface SearchTypes {
    /**
     * 
     * @type {boolean}
     * @memberof SearchTypes
     */
    fulltext: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchTypes
     */
    prefix: boolean;
}

/**
 * Check if a given object implements the SearchTypes interface.
 */
export function instanceOfSearchTypes(value: object): boolean {
    if (!('fulltext' in value)) return false;
    if (!('prefix' in value)) return false;
    return true;
}

export function SearchTypesFromJSON(json: any): SearchTypes {
    return SearchTypesFromJSONTyped(json, false);
}

export function SearchTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchTypes {
    if (json == null) {
        return json;
    }
    return {
        
        'fulltext': json['fulltext'],
        'prefix': json['prefix'],
    };
}

export function SearchTypesToJSON(value?: SearchTypes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fulltext': value['fulltext'],
        'prefix': value['prefix'],
    };
}

