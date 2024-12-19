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
import type { ProviderLayerId } from './ProviderLayerId';
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
    /**
     *
     * @type {string}
     * @memberof LayerListing
     */
    type: LayerListingTypeEnum;
}
/**
 * @export
 */
export declare const LayerListingTypeEnum: {
    readonly Layer: "layer";
};
export type LayerListingTypeEnum = typeof LayerListingTypeEnum[keyof typeof LayerListingTypeEnum];
/**
 * Check if a given object implements the LayerListing interface.
 */
export declare function instanceOfLayerListing(value: object): boolean;
export declare function LayerListingFromJSON(json: any): LayerListing;
export declare function LayerListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerListing;
export declare function LayerListingToJSON(value?: LayerListing | null): any;
