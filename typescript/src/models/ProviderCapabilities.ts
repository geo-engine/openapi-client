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

import { exists, mapValues } from '../runtime';
import type { SearchCapabilities } from './SearchCapabilities';
import {
    SearchCapabilitiesFromJSON,
    SearchCapabilitiesFromJSONTyped,
    SearchCapabilitiesToJSON,
} from './SearchCapabilities';

/**
 * 
 * @export
 * @interface ProviderCapabilities
 */
export interface ProviderCapabilities {
    /**
     * 
     * @type {boolean}
     * @memberof ProviderCapabilities
     */
    listing: boolean;
    /**
     * 
     * @type {SearchCapabilities}
     * @memberof ProviderCapabilities
     */
    search: SearchCapabilities;
}

/**
 * Check if a given object implements the ProviderCapabilities interface.
 */
export function instanceOfProviderCapabilities(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "listing" in value;
    isInstance = isInstance && "search" in value;

    return isInstance;
}

export function ProviderCapabilitiesFromJSON(json: any): ProviderCapabilities {
    return ProviderCapabilitiesFromJSONTyped(json, false);
}

export function ProviderCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderCapabilities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'listing': json['listing'],
        'search': SearchCapabilitiesFromJSON(json['search']),
    };
}

export function ProviderCapabilitiesToJSON(value?: ProviderCapabilities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'listing': value.listing,
        'search': SearchCapabilitiesToJSON(value.search),
    };
}

