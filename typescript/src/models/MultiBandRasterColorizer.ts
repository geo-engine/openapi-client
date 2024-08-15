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
export function instanceOfMultiBandRasterColorizer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "blueBand" in value;
    isInstance = isInstance && "blueMax" in value;
    isInstance = isInstance && "blueMin" in value;
    isInstance = isInstance && "greenBand" in value;
    isInstance = isInstance && "greenMax" in value;
    isInstance = isInstance && "greenMin" in value;
    isInstance = isInstance && "redBand" in value;
    isInstance = isInstance && "redMax" in value;
    isInstance = isInstance && "redMin" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function MultiBandRasterColorizerFromJSON(json: any): MultiBandRasterColorizer {
    return MultiBandRasterColorizerFromJSONTyped(json, false);
}

export function MultiBandRasterColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiBandRasterColorizer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blueBand': json['blueBand'],
        'blueMax': json['blueMax'],
        'blueMin': json['blueMin'],
        'blueScale': !exists(json, 'blueScale') ? undefined : json['blueScale'],
        'greenBand': json['greenBand'],
        'greenMax': json['greenMax'],
        'greenMin': json['greenMin'],
        'greenScale': !exists(json, 'greenScale') ? undefined : json['greenScale'],
        'redBand': json['redBand'],
        'redMax': json['redMax'],
        'redMin': json['redMin'],
        'redScale': !exists(json, 'redScale') ? undefined : json['redScale'],
        'type': json['type'],
    };
}

export function MultiBandRasterColorizerToJSON(value?: MultiBandRasterColorizer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blueBand': value.blueBand,
        'blueMax': value.blueMax,
        'blueMin': value.blueMin,
        'blueScale': value.blueScale,
        'greenBand': value.greenBand,
        'greenMax': value.greenMax,
        'greenMin': value.greenMin,
        'greenScale': value.greenScale,
        'redBand': value.redBand,
        'redMax': value.redMax,
        'redMin': value.redMin,
        'redScale': value.redScale,
        'type': value.type,
    };
}
