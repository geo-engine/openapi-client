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
 * @interface MultiBandRasterColorizer
 */
export interface MultiBandRasterColorizer {
    /**
     * The band index of the blue channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    blueBand: number;
    /**
     * The maximum value for the red channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    blueMax: number;
    /**
     * The minimum value for the red channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    blueMin: number;
    /**
     * A scaling factor for the blue channel between 0 and 1.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    blueScale?: number;
    /**
     * The band index of the green channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    greenBand: number;
    /**
     * The maximum value for the red channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    greenMax: number;
    /**
     * The minimum value for the red channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    greenMin: number;
    /**
     * A scaling factor for the green channel between 0 and 1.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    greenScale?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof MultiBandRasterColorizer
     */
    noDataColor?: Array<number>;
    /**
     * The band index of the red channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    redBand: number;
    /**
     * The maximum value for the red channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    redMax: number;
    /**
     * The minimum value for the red channel.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    redMin: number;
    /**
     * A scaling factor for the red channel between 0 and 1.
     * @type {number}
     * @memberof MultiBandRasterColorizer
     */
    redScale?: number;
    /**
     * 
     * @type {string}
     * @memberof MultiBandRasterColorizer
     */
    type: MultiBandRasterColorizerTypeEnum;
}


/**
 * @export
 */
export const MultiBandRasterColorizerTypeEnum = {
    MultiBand: 'multiBand'
} as const;
export type MultiBandRasterColorizerTypeEnum = typeof MultiBandRasterColorizerTypeEnum[keyof typeof MultiBandRasterColorizerTypeEnum];


/**
 * Check if a given object implements the MultiBandRasterColorizer interface.
 */
export function instanceOfMultiBandRasterColorizer(value: object): value is MultiBandRasterColorizer {
    if (!('blueBand' in value) || value['blueBand'] === undefined) return false;
    if (!('blueMax' in value) || value['blueMax'] === undefined) return false;
    if (!('blueMin' in value) || value['blueMin'] === undefined) return false;
    if (!('greenBand' in value) || value['greenBand'] === undefined) return false;
    if (!('greenMax' in value) || value['greenMax'] === undefined) return false;
    if (!('greenMin' in value) || value['greenMin'] === undefined) return false;
    if (!('redBand' in value) || value['redBand'] === undefined) return false;
    if (!('redMax' in value) || value['redMax'] === undefined) return false;
    if (!('redMin' in value) || value['redMin'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function MultiBandRasterColorizerFromJSON(json: any): MultiBandRasterColorizer {
    return MultiBandRasterColorizerFromJSONTyped(json, false);
}

export function MultiBandRasterColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiBandRasterColorizer {
    if (json == null) {
        return json;
    }
    return {
        
        'blueBand': json['blueBand'],
        'blueMax': json['blueMax'],
        'blueMin': json['blueMin'],
        'blueScale': json['blueScale'] == null ? undefined : json['blueScale'],
        'greenBand': json['greenBand'],
        'greenMax': json['greenMax'],
        'greenMin': json['greenMin'],
        'greenScale': json['greenScale'] == null ? undefined : json['greenScale'],
        'noDataColor': json['noDataColor'] == null ? undefined : json['noDataColor'],
        'redBand': json['redBand'],
        'redMax': json['redMax'],
        'redMin': json['redMin'],
        'redScale': json['redScale'] == null ? undefined : json['redScale'],
        'type': json['type'],
    };
}

export function MultiBandRasterColorizerToJSON(json: any): MultiBandRasterColorizer {
    return MultiBandRasterColorizerToJSONTyped(json, false);
}

export function MultiBandRasterColorizerToJSONTyped(value?: MultiBandRasterColorizer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'blueBand': value['blueBand'],
        'blueMax': value['blueMax'],
        'blueMin': value['blueMin'],
        'blueScale': value['blueScale'],
        'greenBand': value['greenBand'],
        'greenMax': value['greenMax'],
        'greenMin': value['greenMin'],
        'greenScale': value['greenScale'],
        'noDataColor': value['noDataColor'],
        'redBand': value['redBand'],
        'redMax': value['redMax'],
        'redMin': value['redMin'],
        'redScale': value['redScale'],
        'type': value['type'],
    };
}

