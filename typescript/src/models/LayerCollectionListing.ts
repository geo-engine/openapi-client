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
import type { ProviderLayerCollectionId } from './ProviderLayerCollectionId';
import {
    ProviderLayerCollectionIdFromJSON,
    ProviderLayerCollectionIdFromJSONTyped,
    ProviderLayerCollectionIdToJSON,
} from './ProviderLayerCollectionId';

/**
 * 
 * @export
 * @interface LayerCollectionListing
 */
export interface LayerCollectionListing {
    /**
     * 
     * @type {string}
     * @memberof LayerCollectionListing
     */
    description: string;
    /**
     * 
     * @type {ProviderLayerCollectionId}
     * @memberof LayerCollectionListing
     */
    id: ProviderLayerCollectionId;
    /**
     * 
     * @type {string}
     * @memberof LayerCollectionListing
     */
    name: string;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof LayerCollectionListing
     */
    properties?: Array<Array<string>>;
}

/**
 * Check if a given object implements the LayerCollectionListing interface.
 */
export function instanceOfLayerCollectionListing(value: object): value is LayerCollectionListing {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function LayerCollectionListingFromJSON(json: any): LayerCollectionListing {
    return LayerCollectionListingFromJSONTyped(json, false);
}

export function LayerCollectionListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollectionListing {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'id': ProviderLayerCollectionIdFromJSON(json['id']),
        'name': json['name'],
        'properties': json['properties'] == null ? undefined : json['properties'],
    };
}

export function LayerCollectionListingToJSON(value?: LayerCollectionListing | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'id': ProviderLayerCollectionIdToJSON(value['id']),
        'name': value['name'],
        'properties': value['properties'],
    };
}

