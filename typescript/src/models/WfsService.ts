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
export const WfsService = {
    Wfs: 'WFS'
} as const;
export type WfsService = typeof WfsService[keyof typeof WfsService];


export function WfsServiceFromJSON(json: any): WfsService {
    return WfsServiceFromJSONTyped(json, false);
}

export function WfsServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WfsService {
    return json as WfsService;
}

export function WfsServiceToJSON(value?: WfsService | null): any {
    return value as any;
}

