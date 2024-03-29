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
import type { ProviderLayerCollectionId } from './ProviderLayerCollectionId';
/**
 *
 * @export
 * @interface LayerCollectionListingWithType
 */
export interface LayerCollectionListingWithType {
    /**
     *
     * @type {string}
     * @memberof LayerCollectionListingWithType
     */
    description: string;
    /**
     *
     * @type {ProviderLayerCollectionId}
     * @memberof LayerCollectionListingWithType
     */
    id: ProviderLayerCollectionId;
    /**
     *
     * @type {string}
     * @memberof LayerCollectionListingWithType
     */
    name: string;
    /**
     *
     * @type {Array<Array<string>>}
     * @memberof LayerCollectionListingWithType
     */
    properties?: Array<Array<string>>;
    /**
     *
     * @type {string}
     * @memberof LayerCollectionListingWithType
     */
    type: LayerCollectionListingWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const LayerCollectionListingWithTypeTypeEnum: {
    readonly Collection: "collection";
    readonly Layer: "layer";
};
export type LayerCollectionListingWithTypeTypeEnum = typeof LayerCollectionListingWithTypeTypeEnum[keyof typeof LayerCollectionListingWithTypeTypeEnum];
/**
 * Check if a given object implements the LayerCollectionListingWithType interface.
 */
export declare function instanceOfLayerCollectionListingWithType(value: object): boolean;
export declare function LayerCollectionListingWithTypeFromJSON(json: any): LayerCollectionListingWithType;
export declare function LayerCollectionListingWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollectionListingWithType;
export declare function LayerCollectionListingWithTypeToJSON(value?: LayerCollectionListingWithType | null): any;
