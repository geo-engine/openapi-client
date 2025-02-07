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
export const AxisOrder = {
    NorthEast: 'northEast',
    EastNorth: 'eastNorth'
} as const;
export type AxisOrder = typeof AxisOrder[keyof typeof AxisOrder];


export function AxisOrderFromJSON(json: any): AxisOrder {
    return AxisOrderFromJSONTyped(json, false);
}

export function AxisOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): AxisOrder {
    return json as AxisOrder;
}

export function AxisOrderToJSON(value?: AxisOrder | null): any {
    return value as any;
}

