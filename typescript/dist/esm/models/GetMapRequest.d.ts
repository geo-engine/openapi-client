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
 */
export declare const GetMapRequest: {
    readonly GetMap: "GetMap";
};
export type GetMapRequest = typeof GetMapRequest[keyof typeof GetMapRequest];
export declare function instanceOfGetMapRequest(value: any): boolean;
export declare function GetMapRequestFromJSON(json: any): GetMapRequest;
export declare function GetMapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMapRequest;
export declare function GetMapRequestToJSON(value?: GetMapRequest | null): any;
