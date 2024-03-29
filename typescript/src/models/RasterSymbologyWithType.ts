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
import type { RasterColorizer } from './RasterColorizer';
import {
    RasterColorizerFromJSON,
    RasterColorizerFromJSONTyped,
    RasterColorizerToJSON,
} from './RasterColorizer';

/**
 * 
 * @export
 * @interface RasterSymbologyWithType
 */
export interface RasterSymbologyWithType {
    /**
     * 
     * @type {number}
     * @memberof RasterSymbologyWithType
     */
    opacity: number;
    /**
     * 
     * @type {RasterColorizer}
     * @memberof RasterSymbologyWithType
     */
    rasterColorizer: RasterColorizer;
    /**
     * 
     * @type {string}
     * @memberof RasterSymbologyWithType
     */
    type: RasterSymbologyWithTypeTypeEnum;
}


/**
 * @export
 */
export const RasterSymbologyWithTypeTypeEnum = {
    Raster: 'raster'
} as const;
export type RasterSymbologyWithTypeTypeEnum = typeof RasterSymbologyWithTypeTypeEnum[keyof typeof RasterSymbologyWithTypeTypeEnum];


/**
 * Check if a given object implements the RasterSymbologyWithType interface.
 */
export function instanceOfRasterSymbologyWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "opacity" in value;
    isInstance = isInstance && "rasterColorizer" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function RasterSymbologyWithTypeFromJSON(json: any): RasterSymbologyWithType {
    return RasterSymbologyWithTypeFromJSONTyped(json, false);
}

export function RasterSymbologyWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterSymbologyWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'opacity': json['opacity'],
        'rasterColorizer': RasterColorizerFromJSON(json['rasterColorizer']),
        'type': json['type'],
    };
}

export function RasterSymbologyWithTypeToJSON(value?: RasterSymbologyWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'opacity': value.opacity,
        'rasterColorizer': RasterColorizerToJSON(value.rasterColorizer),
        'type': value.type,
    };
}

