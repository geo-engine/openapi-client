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
/**
 *
 * @export
 */
export declare const FeatureDataType: {
    readonly Category: "category";
    readonly Int: "int";
    readonly Float: "float";
    readonly Text: "text";
    readonly Bool: "bool";
    readonly DateTime: "dateTime";
};
export type FeatureDataType = typeof FeatureDataType[keyof typeof FeatureDataType];
export declare function FeatureDataTypeFromJSON(json: any): FeatureDataType;
export declare function FeatureDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureDataType;
export declare function FeatureDataTypeToJSON(value?: FeatureDataType | null): any;
