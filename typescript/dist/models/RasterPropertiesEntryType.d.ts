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
export declare const RasterPropertiesEntryType: {
    readonly Number: "Number";
    readonly String: "String";
};
export type RasterPropertiesEntryType = typeof RasterPropertiesEntryType[keyof typeof RasterPropertiesEntryType];
export declare function instanceOfRasterPropertiesEntryType(value: any): boolean;
export declare function RasterPropertiesEntryTypeFromJSON(json: any): RasterPropertiesEntryType;
export declare function RasterPropertiesEntryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterPropertiesEntryType;
export declare function RasterPropertiesEntryTypeToJSON(value?: RasterPropertiesEntryType | null): any;
export declare function RasterPropertiesEntryTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): RasterPropertiesEntryType;
