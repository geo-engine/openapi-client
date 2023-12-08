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

import {
    LayerCollectionListingWithType,
    instanceOfLayerCollectionListingWithType,
    LayerCollectionListingWithTypeFromJSON,
    LayerCollectionListingWithTypeFromJSONTyped,
    LayerCollectionListingWithTypeToJSON,
} from './LayerCollectionListingWithType';
import {
    LayerListingWithType,
    instanceOfLayerListingWithType,
    LayerListingWithTypeFromJSON,
    LayerListingWithTypeFromJSONTyped,
    LayerListingWithTypeToJSON,
} from './LayerListingWithType';

/**
 * @type CollectionItem
 * 
 * @export
 */
export type CollectionItem = { type: 'collection' } & LayerCollectionListingWithType | { type: 'layer' } & LayerListingWithType;

export function CollectionItemFromJSON(json: any): CollectionItem {
    return CollectionItemFromJSONTyped(json, false);
}

export function CollectionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'collection':
            return {...LayerCollectionListingWithTypeFromJSONTyped(json, true), type: 'collection'};
        case 'layer':
            return {...LayerListingWithTypeFromJSONTyped(json, true), type: 'layer'};
        default:
            throw new Error(`No variant of CollectionItem exists with 'type=${json['type']}'`);
    }
}

export function CollectionItemToJSON(value?: CollectionItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'collection':
            return LayerCollectionListingWithTypeToJSON(value);
        case 'layer':
            return LayerListingWithTypeToJSON(value);
        default:
            throw new Error(`No variant of CollectionItem exists with 'type=${value['type']}'`);
    }

}
