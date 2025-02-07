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
import type { CollectionItem } from './CollectionItem';
import type { ProviderLayerCollectionId } from './ProviderLayerCollectionId';
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
    entryLabel?: string | null;
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
export declare function instanceOfLayerCollection(value: object): boolean;
export declare function LayerCollectionFromJSON(json: any): LayerCollection;
export declare function LayerCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollection;
export declare function LayerCollectionToJSON(value?: LayerCollection | null): any;
