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
export const GetMapRequest = {
    GetMap: 'GetMap'
} as const;
export type GetMapRequest = typeof GetMapRequest[keyof typeof GetMapRequest];


export function instanceOfGetMapRequest(value: any): boolean {
    for (const key in GetMapRequest) {
        if (Object.prototype.hasOwnProperty.call(GetMapRequest, key)) {
            if (GetMapRequest[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GetMapRequestFromJSON(json: any): GetMapRequest {
    return GetMapRequestFromJSONTyped(json, false);
}

export function GetMapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMapRequest {
    return json as GetMapRequest;
}

export function GetMapRequestToJSON(value?: GetMapRequest | null): any {
    return value as any;
}

