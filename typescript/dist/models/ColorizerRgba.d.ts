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
 * @interface ColorizerRgba
 */
export interface ColorizerRgba {
    /**
     *
     * @type {string}
     * @memberof ColorizerRgba
     */
    type: ColorizerRgbaTypeEnum;
}
/**
 * @export
 */
export declare const ColorizerRgbaTypeEnum: {
    readonly Rgba: "rgba";
};
export type ColorizerRgbaTypeEnum = typeof ColorizerRgbaTypeEnum[keyof typeof ColorizerRgbaTypeEnum];
/**
 * Check if a given object implements the ColorizerRgba interface.
 */
export declare function instanceOfColorizerRgba(value: object): boolean;
export declare function ColorizerRgbaFromJSON(json: any): ColorizerRgba;
export declare function ColorizerRgbaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorizerRgba;
export declare function ColorizerRgbaToJSON(value?: ColorizerRgba | null): any;