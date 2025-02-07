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
import type { ProviderLayerCollectionId } from './ProviderLayerCollectionId';
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
    /**
     *
     * @type {string}
     * @memberof LayerCollectionListing
     */
    type: LayerCollectionListingTypeEnum;
}
/**
 * @export
 */
export declare const LayerCollectionListingTypeEnum: {
    readonly Collection: "collection";
    readonly Layer: "layer";
};
export type LayerCollectionListingTypeEnum = typeof LayerCollectionListingTypeEnum[keyof typeof LayerCollectionListingTypeEnum];
/**
 * Check if a given object implements the LayerCollectionListing interface.
 */
export declare function instanceOfLayerCollectionListing(value: object): boolean;
export declare function LayerCollectionListingFromJSON(json: any): LayerCollectionListing;
export declare function LayerCollectionListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollectionListing;
export declare function LayerCollectionListingToJSON(value?: LayerCollectionListing | null): any;
