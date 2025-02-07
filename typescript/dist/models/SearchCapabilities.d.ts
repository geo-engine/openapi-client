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
import type { SearchTypes } from './SearchTypes';
/**
 *
 * @export
 * @interface SearchCapabilities
 */
export interface SearchCapabilities {
    /**
     *
     * @type {boolean}
     * @memberof SearchCapabilities
     */
    autocomplete: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof SearchCapabilities
     */
    filters?: Array<string> | null;
    /**
     *
     * @type {SearchTypes}
     * @memberof SearchCapabilities
     */
    searchTypes: SearchTypes;
}
/**
 * Check if a given object implements the SearchCapabilities interface.
 */
export declare function instanceOfSearchCapabilities(value: object): boolean;
export declare function SearchCapabilitiesFromJSON(json: any): SearchCapabilities;
export declare function SearchCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchCapabilities;
export declare function SearchCapabilitiesToJSON(value?: SearchCapabilities | null): any;
