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
import type { ProviderLayerId } from './ProviderLayerId';
import {
    ProviderLayerIdFromJSON,
    ProviderLayerIdFromJSONTyped,
    ProviderLayerIdToJSON,
} from './ProviderLayerId';

/**
 * 
 * @export
 * @interface LayerListing
 */
export interface LayerListing {
    /**
     * 
     * @type {string}
     * @memberof LayerListing
     */
    description: string;
    /**
     * 
     * @type {ProviderLayerId}
     * @memberof LayerListing
     */
    id: ProviderLayerId;
    /**
     * 
     * @type {string}
     * @memberof LayerListing
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof LayerListing
     */
    properties?: Array<Array<string>>;
}

/**
 * Check if a given object implements the LayerListing interface.
 */
export function instanceOfLayerListing(value: object): boolean {
    if (!('description' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    return true;
}

export function LayerListingFromJSON(json: any): LayerListing {
    return LayerListingFromJSONTyped(json, false);
}

export function LayerListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerListing {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'id': ProviderLayerIdFromJSON(json['id']),
        'name': json['name'],
        'properties': json['properties'] == null ? undefined : json['properties'],
    };
}

export function LayerListingToJSON(value?: LayerListing | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'id': ProviderLayerIdToJSON(value['id']),
        'name': value['name'],
        'properties': value['properties'],
    };
}

