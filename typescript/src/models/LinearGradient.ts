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

import { exists, mapValues } from '../runtime';
import type { Breakpoint } from './Breakpoint';
import {
    BreakpointFromJSON,
    BreakpointFromJSONTyped,
    BreakpointToJSON,
} from './Breakpoint';

/**
 * 
 * @export
 * @interface LinearGradient
 */
export interface LinearGradient {
    /**
     * 
     * @type {Array<Breakpoint>}
     * @memberof LinearGradient
     */
    breakpoints: Array<Breakpoint>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LinearGradient
     */
    noDataColor: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LinearGradient
     */
    overColor: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof LinearGradient
     */
    type: LinearGradientTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof LinearGradient
     */
    underColor: Array<number>;
}


/**
 * @export
 */
export const LinearGradientTypeEnum = {
    LinearGradient: 'linearGradient',
    LogarithmicGradient: 'logarithmicGradient',
    Palette: 'palette'
} as const;
export type LinearGradientTypeEnum = typeof LinearGradientTypeEnum[keyof typeof LinearGradientTypeEnum];


/**
 * Check if a given object implements the LinearGradient interface.
 */
export function instanceOfLinearGradient(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "breakpoints" in value;
    isInstance = isInstance && "noDataColor" in value;
    isInstance = isInstance && "overColor" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "underColor" in value;

    return isInstance;
}

export function LinearGradientFromJSON(json: any): LinearGradient {
    return LinearGradientFromJSONTyped(json, false);
}

export function LinearGradientFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinearGradient {
    if ((json === undefined) || (json === null)) {
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

export function LinearGradientToJSON(value?: LinearGradient | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'breakpoints': ((value.breakpoints as Array<any>).map(BreakpointToJSON)),
        'noDataColor': value.noDataColor,
        'overColor': value.overColor,
        'type': value.type,
        'underColor': value.underColor,
    };
}

