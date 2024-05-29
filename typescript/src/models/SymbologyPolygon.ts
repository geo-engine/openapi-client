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
import type { ColorParam } from './ColorParam';
import {
    ColorParamFromJSON,
    ColorParamFromJSONTyped,
    ColorParamToJSON,
} from './ColorParam';
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
 * @interface SymbologyPolygon
 */
export interface SymbologyPolygon {
    /**
     * 
     * @type {boolean}
     * @memberof SymbologyPolygon
     */
    autoSimplified: boolean;
    /**
     * 
     * @type {ColorParam}
     * @memberof SymbologyPolygon
     */
    fillColor: ColorParam;
    /**
     * 
     * @type {StrokeParam}
     * @memberof SymbologyPolygon
     */
    stroke: StrokeParam;
    /**
     * 
     * @type {TextSymbology}
     * @memberof SymbologyPolygon
     */
    text?: TextSymbology;
    /**
     * 
     * @type {string}
     * @memberof SymbologyPolygon
     */
    type: SymbologyPolygonTypeEnum;
}


/**
 * @export
 */
export const SymbologyPolygonTypeEnum = {
    Polygon: 'polygon'
} as const;
export type SymbologyPolygonTypeEnum = typeof SymbologyPolygonTypeEnum[keyof typeof SymbologyPolygonTypeEnum];


/**
 * Check if a given object implements the SymbologyPolygon interface.
 */
export function instanceOfSymbologyPolygon(value: object): boolean {
    if (!('autoSimplified' in value)) return false;
    if (!('fillColor' in value)) return false;
    if (!('stroke' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function SymbologyPolygonFromJSON(json: any): SymbologyPolygon {
    return SymbologyPolygonFromJSONTyped(json, false);
}

export function SymbologyPolygonFromJSONTyped(json: any, ignoreDiscriminator: boolean): SymbologyPolygon {
    if (json == null) {
        return json;
    }
    return {
        
        'autoSimplified': json['autoSimplified'],
        'fillColor': ColorParamFromJSON(json['fillColor']),
        'stroke': StrokeParamFromJSON(json['stroke']),
        'text': json['text'] == null ? undefined : TextSymbologyFromJSON(json['text']),
        'type': json['type'],
    };
}

export function SymbologyPolygonToJSON(value?: SymbologyPolygon | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'autoSimplified': value['autoSimplified'],
        'fillColor': ColorParamToJSON(value['fillColor']),
        'stroke': StrokeParamToJSON(value['stroke']),
        'text': TextSymbologyToJSON(value['text']),
        'type': value['type'],
    };
}

