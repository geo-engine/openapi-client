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
 * @interface RasterPropertiesKey
 */
export interface RasterPropertiesKey {
    /**
     *
     * @type {string}
     * @memberof RasterPropertiesKey
     */
    domain?: string | null;
    /**
     *
     * @type {string}
     * @memberof RasterPropertiesKey
     */
    key: string;
}
/**
 * Check if a given object implements the RasterPropertiesKey interface.
 */
export declare function instanceOfRasterPropertiesKey(value: object): boolean;
export declare function RasterPropertiesKeyFromJSON(json: any): RasterPropertiesKey;
export declare function RasterPropertiesKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterPropertiesKey;
export declare function RasterPropertiesKeyToJSON(value?: RasterPropertiesKey | null): any;
