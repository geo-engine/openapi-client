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

import { mapValues } from '../runtime';
import type { Breakpoint } from './Breakpoint';
import {
    BreakpointFromJSON,
    BreakpointFromJSONTyped,
    BreakpointToJSON,
} from './Breakpoint';

/**
 * 
 * @export
 * @interface LogarithmicGradient
 */
export interface LogarithmicGradient {
    /**
     * 
     * @type {Array<Breakpoint>}
     * @memberof LogarithmicGradient
     */
    breakpoints: Array<Breakpoint>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LogarithmicGradient
     */
    noDataColor: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LogarithmicGradient
     */
    overColor: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LogarithmicGradient
     */
    underColor: Array<number>;
}

/**
 * Check if a given object implements the LogarithmicGradient interface.
 */
export function instanceOfLogarithmicGradient(value: object): boolean {
    if (!('breakpoints' in value)) return false;
    if (!('noDataColor' in value)) return false;
    if (!('overColor' in value)) return false;
    if (!('underColor' in value)) return false;
    return true;
}

export function LogarithmicGradientFromJSON(json: any): LogarithmicGradient {
    return LogarithmicGradientFromJSONTyped(json, false);
}

export function LogarithmicGradientFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogarithmicGradient {
    if (json == null) {
        return json;
    }
    return {
        
        'breakpoints': ((json['breakpoints'] as Array<any>).map(BreakpointFromJSON)),
        'noDataColor': json['noDataColor'],
        'overColor': json['overColor'],
        'underColor': json['underColor'],
    };
}

export function LogarithmicGradientToJSON(value?: LogarithmicGradient | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'breakpoints': ((value['breakpoints'] as Array<any>).map(BreakpointToJSON)),
        'noDataColor': value['noDataColor'],
        'overColor': value['overColor'],
        'underColor': value['underColor'],
    };
}

