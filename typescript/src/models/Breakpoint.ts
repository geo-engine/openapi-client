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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Breakpoint
 */
export interface Breakpoint {
    /**
     * 
     * @type {Array<number>}
     * @memberof Breakpoint
     */
    color: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof Breakpoint
     */
    value: number;
}

/**
 * Check if a given object implements the Breakpoint interface.
 */
export function instanceOfBreakpoint(value: object): value is Breakpoint {
    if (!('color' in value) || value['color'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function BreakpointFromJSON(json: any): Breakpoint {
    return BreakpointFromJSONTyped(json, false);
}

export function BreakpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): Breakpoint {
    if (json == null) {
        return json;
    }
    return {
        
        'color': json['color'],
        'value': json['value'],
    };
}

export function BreakpointToJSON(json: any): Breakpoint {
    return BreakpointToJSONTyped(json, false);
}

export function BreakpointToJSONTyped(value?: Breakpoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'color': value['color'],
        'value': value['value'],
    };
}

