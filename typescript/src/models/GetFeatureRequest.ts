/* tslint:disable */
/* eslint-disable */
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
export const GetFeatureRequest = {
    GetFeature: 'GetFeature'
} as const;
export type GetFeatureRequest = typeof GetFeatureRequest[keyof typeof GetFeatureRequest];


export function GetFeatureRequestFromJSON(json: any): GetFeatureRequest {
    return GetFeatureRequestFromJSONTyped(json, false);
}

export function GetFeatureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFeatureRequest {
    return json as GetFeatureRequest;
}

export function GetFeatureRequestToJSON(value?: GetFeatureRequest | null): any {
    return value as any;
}

