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
 */
export declare const GetMapFormat: {
    readonly ImagePng: "image/png";
};
export type GetMapFormat = typeof GetMapFormat[keyof typeof GetMapFormat];
export declare function instanceOfGetMapFormat(value: any): boolean;
export declare function GetMapFormatFromJSON(json: any): GetMapFormat;
export declare function GetMapFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMapFormat;
export declare function GetMapFormatToJSON(value?: GetMapFormat | null): any;
export declare function GetMapFormatToJSONTyped(value: any, ignoreDiscriminator: boolean): GetMapFormat;
