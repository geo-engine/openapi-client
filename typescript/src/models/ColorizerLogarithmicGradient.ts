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
 * @interface ColorizerLogarithmicGradient
 */
export interface ColorizerLogarithmicGradient {
    /**
     * 
     * @type {Array<Breakpoint>}
     * @memberof ColorizerLogarithmicGradient
     */
    breakpoints: Array<Breakpoint>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ColorizerLogarithmicGradient
     */
    noDataColor: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ColorizerLogarithmicGradient
     */
    overColor: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ColorizerLogarithmicGradient
     */
    type: ColorizerLogarithmicGradientTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof ColorizerLogarithmicGradient
     */
    underColor: Array<number>;
}


/**
 * @export
 */
export const ColorizerLogarithmicGradientTypeEnum = {
    LogarithmicGradient: 'logarithmicGradient'
} as const;
export type ColorizerLogarithmicGradientTypeEnum = typeof ColorizerLogarithmicGradientTypeEnum[keyof typeof ColorizerLogarithmicGradientTypeEnum];


/**
 * Check if a given object implements the ColorizerLogarithmicGradient interface.
 */
export function instanceOfColorizerLogarithmicGradient(value: object): boolean {
    if (!('breakpoints' in value)) return false;
    if (!('noDataColor' in value)) return false;
    if (!('overColor' in value)) return false;
    if (!('type' in value)) return false;
    if (!('underColor' in value)) return false;
    return true;
}

export function ColorizerLogarithmicGradientFromJSON(json: any): ColorizerLogarithmicGradient {
    return ColorizerLogarithmicGradientFromJSONTyped(json, false);
}

export function ColorizerLogarithmicGradientFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorizerLogarithmicGradient {
    if (json == null) {
        return json;
    }
    return {
        
        'breakpoints': ((json['breakpoints'] as Array<any>).map(BreakpointFromJSON)),
        'noDataColor': json['noDataColor'],
        'overColor': json['overColor'],
        'type': json['type'],
        'underColor': json['underColor'],
    };
}

export function ColorizerLogarithmicGradientToJSON(value?: ColorizerLogarithmicGradient | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'breakpoints': ((value['breakpoints'] as Array<any>).map(BreakpointToJSON)),
        'noDataColor': value['noDataColor'],
        'overColor': value['overColor'],
        'type': value['type'],
        'underColor': value['underColor'],
    };
}

