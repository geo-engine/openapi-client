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
/**
 *
 * @export
 * @interface ResourceIdLayer
 */
export interface ResourceIdLayer {
    /**
     *
     * @type {string}
     * @memberof ResourceIdLayer
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResourceIdLayer
     */
    type: ResourceIdLayerTypeEnum;
}
/**
 * @export
 */
export declare const ResourceIdLayerTypeEnum: {
    readonly Layer: "Layer";
    readonly LayerCollection: "LayerCollection";
    readonly Project: "Project";
    readonly DatasetId: "DatasetId";
    readonly ModelId: "ModelId";
};
export type ResourceIdLayerTypeEnum = typeof ResourceIdLayerTypeEnum[keyof typeof ResourceIdLayerTypeEnum];
/**
 * Check if a given object implements the ResourceIdLayer interface.
 */
export declare function instanceOfResourceIdLayer(value: object): boolean;
export declare function ResourceIdLayerFromJSON(json: any): ResourceIdLayer;
export declare function ResourceIdLayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdLayer;
export declare function ResourceIdLayerToJSON(value?: ResourceIdLayer | null): any;
