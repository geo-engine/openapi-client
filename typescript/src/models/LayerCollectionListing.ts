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
export function instanceOfLayerCollectionListing(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function LayerCollectionListingFromJSON(json: any): LayerCollectionListing {
    return LayerCollectionListingFromJSONTyped(json, false);
}

export function LayerCollectionListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollectionListing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'id': ProviderLayerCollectionIdFromJSON(json['id']),
        'name': json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
    };
}

export function LayerCollectionListingToJSON(value?: LayerCollectionListing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': ProviderLayerCollectionIdToJSON(value.id),
        'name': value.name,
        'properties': value.properties,
    };
}

