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
/**
 *
 * @export
 * @interface AddLayerCollection
 */
export interface AddLayerCollection {
    /**
     *
     * @type {string}
     * @memberof AddLayerCollection
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof AddLayerCollection
     */
    name: string;
    /**
     *
     * @type {Array<Array<string>>}
     * @memberof AddLayerCollection
     */
    properties?: Array<Array<string>>;
}
/**
 * Check if a given object implements the AddLayerCollection interface.
 */
export declare function instanceOfAddLayerCollection(value: object): boolean;
export declare function AddLayerCollectionFromJSON(json: any): AddLayerCollection;
export declare function AddLayerCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddLayerCollection;
export declare function AddLayerCollectionToJSON(value?: AddLayerCollection | null): any;
