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
import type { StrokeParam } from './StrokeParam';
import {
    StrokeParamFromJSON,
    StrokeParamFromJSONTyped,
    StrokeParamToJSON,
} from './StrokeParam';
import type { TextSymbology } from './TextSymbology';
import {
    TextSymbologyFromJSON,
    TextSymbologyFromJSONTyped,
    TextSymbologyToJSON,
} from './TextSymbology';

/**
 * 
 * @export
 * @interface LineSymbology
 */
export interface LineSymbology {
    /**
     * 
     * @type {boolean}
     * @memberof LineSymbology
     */
    autoSimplified: boolean;
    /**
     * 
     * @type {StrokeParam}
     * @memberof LineSymbology
     */
    stroke: StrokeParam;
    /**
     * 
     * @type {TextSymbology}
     * @memberof LineSymbology
     */
    text?: TextSymbology;
    /**
     * 
     * @type {string}
     * @memberof LineSymbology
     */
    type: LineSymbologyTypeEnum;
}


/**
 * @export
 */
export const LineSymbologyTypeEnum = {
    Line: 'line'
} as const;
export type LineSymbologyTypeEnum = typeof LineSymbologyTypeEnum[keyof typeof LineSymbologyTypeEnum];


/**
 * Check if a given object implements the LineSymbology interface.
 */
export function instanceOfLineSymbology(value: object): boolean {
    if (!('autoSimplified' in value)) return false;
    if (!('stroke' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function LineSymbologyFromJSON(json: any): LineSymbology {
    return LineSymbologyFromJSONTyped(json, false);
}

export function LineSymbologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineSymbology {
    if (json == null) {
        return json;
    }
    return {
        
        'autoSimplified': json['autoSimplified'],
        'stroke': StrokeParamFromJSON(json['stroke']),
        'text': json['text'] == null ? undefined : TextSymbologyFromJSON(json['text']),
        'type': json['type'],
    };
}

export function LineSymbologyToJSON(value?: LineSymbology | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'autoSimplified': value['autoSimplified'],
        'stroke': StrokeParamToJSON(value['stroke']),
        'text': TextSymbologyToJSON(value['text']),
        'type': value['type'],
    };
}

