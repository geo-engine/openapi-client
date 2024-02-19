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
 * An enum that contains all possible vector data types
 * @export
 */
export declare const VectorDataType: {
    readonly Data: "Data";
    readonly MultiPoint: "MultiPoint";
    readonly MultiLineString: "MultiLineString";
    readonly MultiPolygon: "MultiPolygon";
};
export type VectorDataType = typeof VectorDataType[keyof typeof VectorDataType];
export declare function VectorDataTypeFromJSON(json: any): VectorDataType;
export declare function VectorDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VectorDataType;
export declare function VectorDataTypeToJSON(value?: VectorDataType | null): any;