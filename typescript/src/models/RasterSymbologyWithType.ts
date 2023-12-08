/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Colorizer } from './Colorizer';
import {
    ColorizerFromJSON,
    ColorizerFromJSONTyped,
    ColorizerToJSON,
} from './Colorizer';

/**
 * 
 * @export
 * @interface RasterSymbologyWithType
 */
export interface RasterSymbologyWithType {
    /**
     * 
     * @type {Colorizer}
     * @memberof RasterSymbologyWithType
     */
    colorizer: Colorizer;
    /**
     * 
     * @type {number}
     * @memberof RasterSymbologyWithType
     */
    opacity: number;
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
    isInstance = isInstance && "colorizer" in value;
    isInstance = isInstance && "opacity" in value;
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
        
        'colorizer': ColorizerFromJSON(json['colorizer']),
        'opacity': json['opacity'],
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
        
        'colorizer': ColorizerToJSON(value.colorizer),
        'opacity': value.opacity,
        'type': value.type,
    };
}
