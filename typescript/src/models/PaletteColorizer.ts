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
 * @interface PaletteColorizer
 */
export interface PaletteColorizer {
    /**
     * A map from value to color
     * 
     * It is assumed that is has at least one and at most 256 entries.
     * @type {{ [key: string]: Array<number>; }}
     * @memberof PaletteColorizer
     */
    colors: { [key: string]: Array<number>; };
    /**
     * 
     * @type {Array<number>}
     * @memberof PaletteColorizer
     */
    defaultColor: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof PaletteColorizer
     */
    noDataColor: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PaletteColorizer
     */
    type: PaletteColorizerTypeEnum;
}


/**
 * @export
 */
export const PaletteColorizerTypeEnum = {
    Palette: 'palette'
} as const;
export type PaletteColorizerTypeEnum = typeof PaletteColorizerTypeEnum[keyof typeof PaletteColorizerTypeEnum];


/**
 * Check if a given object implements the PaletteColorizer interface.
 */
export function instanceOfPaletteColorizer(value: object): value is PaletteColorizer {
    if (!('colors' in value) || value['colors'] === undefined) return false;
    if (!('defaultColor' in value) || value['defaultColor'] === undefined) return false;
    if (!('noDataColor' in value) || value['noDataColor'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function PaletteColorizerFromJSON(json: any): PaletteColorizer {
    return PaletteColorizerFromJSONTyped(json, false);
}

export function PaletteColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaletteColorizer {
    if (json == null) {
        return json;
    }
    return {
        
        'colors': json['colors'],
        'defaultColor': json['defaultColor'],
        'noDataColor': json['noDataColor'],
        'type': json['type'],
    };
}

export function PaletteColorizerToJSON(json: any): PaletteColorizer {
    return PaletteColorizerToJSONTyped(json, false);
}

export function PaletteColorizerToJSONTyped(value?: PaletteColorizer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'colors': value['colors'],
        'defaultColor': value['defaultColor'],
        'noDataColor': value['noDataColor'],
        'type': value['type'],
    };
}

