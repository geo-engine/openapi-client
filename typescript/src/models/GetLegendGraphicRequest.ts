/* tslint:disable */
/* eslint-disable */
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
export const GetLegendGraphicRequest = {
    GetLegendGraphic: 'GetLegendGraphic'
} as const;
export type GetLegendGraphicRequest = typeof GetLegendGraphicRequest[keyof typeof GetLegendGraphicRequest];


export function GetLegendGraphicRequestFromJSON(json: any): GetLegendGraphicRequest {
    return GetLegendGraphicRequestFromJSONTyped(json, false);
}

export function GetLegendGraphicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLegendGraphicRequest {
    return json as GetLegendGraphicRequest;
}

export function GetLegendGraphicRequestToJSON(value?: GetLegendGraphicRequest | null): any {
    return value as any;
}

