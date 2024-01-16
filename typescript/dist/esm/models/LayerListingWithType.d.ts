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
import type { ProviderLayerId } from './ProviderLayerId';
/**
 *
 * @export
 * @interface LayerListingWithType
 */
export interface LayerListingWithType {
    /**
     *
     * @type {string}
     * @memberof LayerListingWithType
     */
    description: string;
    /**
     *
     * @type {ProviderLayerId}
     * @memberof LayerListingWithType
     */
    id: ProviderLayerId;
    /**
     *
     * @type {string}
     * @memberof LayerListingWithType
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof LayerListingWithType
     */
    properties?: Array<Array<string>>;
    /**
     *
     * @type {string}
     * @memberof LayerListingWithType
     */
    type: LayerListingWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const LayerListingWithTypeTypeEnum: {
    readonly Layer: "layer";
};
export type LayerListingWithTypeTypeEnum = typeof LayerListingWithTypeTypeEnum[keyof typeof LayerListingWithTypeTypeEnum];
/**
 * Check if a given object implements the LayerListingWithType interface.
 */
export declare function instanceOfLayerListingWithType(value: object): boolean;
export declare function LayerListingWithTypeFromJSON(json: any): LayerListingWithType;
export declare function LayerListingWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerListingWithType;
export declare function LayerListingWithTypeToJSON(value?: LayerListingWithType | null): any;
