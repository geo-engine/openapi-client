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
 * @interface RgbaColorizer
 */
export interface RgbaColorizer {
    /**
     *
     * @type {string}
     * @memberof RgbaColorizer
     */
    type: RgbaColorizerTypeEnum;
}
/**
 * @export
 */
export declare const RgbaColorizerTypeEnum: {
    readonly Rgba: "rgba";
};
export type RgbaColorizerTypeEnum = typeof RgbaColorizerTypeEnum[keyof typeof RgbaColorizerTypeEnum];
/**
 * Check if a given object implements the RgbaColorizer interface.
 */
export declare function instanceOfRgbaColorizer(value: object): boolean;
export declare function RgbaColorizerFromJSON(json: any): RgbaColorizer;
export declare function RgbaColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RgbaColorizer;
export declare function RgbaColorizerToJSON(value?: RgbaColorizer | null): any;
