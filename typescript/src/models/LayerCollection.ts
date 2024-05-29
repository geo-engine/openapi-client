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
import type { CollectionItem } from './CollectionItem';
import {
    CollectionItemFromJSON,
    CollectionItemFromJSONTyped,
    CollectionItemToJSON,
} from './CollectionItem';
import type { ProviderLayerCollectionId } from './ProviderLayerCollectionId';
import {
    ProviderLayerCollectionIdFromJSON,
    ProviderLayerCollectionIdFromJSONTyped,
    ProviderLayerCollectionIdToJSON,
} from './ProviderLayerCollectionId';

/**
 * 
 * @export
 * @interface LayerCollection
 */
export interface LayerCollection {
    /**
     * 
     * @type {string}
     * @memberof LayerCollection
     */
    description: string;
    /**
     * a common label for the collection's entries, if there is any
     * @type {string}
     * @memberof LayerCollection
     */
    entryLabel?: string;
    /**
     * 
     * @type {ProviderLayerCollectionId}
     * @memberof LayerCollection
     */
    id: ProviderLayerCollectionId;
    /**
     * 
     * @type {Array<CollectionItem>}
     * @memberof LayerCollection
     */
    items: Array<CollectionItem>;
    /**
     * 
     * @type {string}
     * @memberof LayerCollection
     */
    name: string;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof LayerCollection
     */
    properties: Array<Array<string>>;
}

/**
 * Check if a given object implements the LayerCollection interface.
 */
export function instanceOfLayerCollection(value: object): boolean {
    if (!('description' in value)) return false;
    if (!('id' in value)) return false;
    if (!('items' in value)) return false;
    if (!('name' in value)) return false;
    if (!('properties' in value)) return false;
    return true;
}

export function LayerCollectionFromJSON(json: any): LayerCollection {
    return LayerCollectionFromJSONTyped(json, false);
}

export function LayerCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'entryLabel': json['entryLabel'] == null ? undefined : json['entryLabel'],
        'id': ProviderLayerCollectionIdFromJSON(json['id']),
        'items': ((json['items'] as Array<any>).map(CollectionItemFromJSON)),
        'name': json['name'],
        'properties': json['properties'],
    };
}

export function LayerCollectionToJSON(value?: LayerCollection | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'entryLabel': value['entryLabel'],
        'id': ProviderLayerCollectionIdToJSON(value['id']),
        'items': ((value['items'] as Array<any>).map(CollectionItemToJSON)),
        'name': value['name'],
        'properties': value['properties'],
    };
}

