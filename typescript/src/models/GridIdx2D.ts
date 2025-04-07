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
 * @interface GridIdx2D
 */
export interface GridIdx2D {
    /**
     * 
     * @type {number}
     * @memberof GridIdx2D
     */
    xIdx: number;
    /**
     * 
     * @type {number}
     * @memberof GridIdx2D
     */
    yIdx: number;
}

/**
 * Check if a given object implements the GridIdx2D interface.
 */
export function instanceOfGridIdx2D(value: object): value is GridIdx2D {
    if (!('xIdx' in value) || value['xIdx'] === undefined) return false;
    if (!('yIdx' in value) || value['yIdx'] === undefined) return false;
    return true;
}

export function GridIdx2DFromJSON(json: any): GridIdx2D {
    return GridIdx2DFromJSONTyped(json, false);
}

export function GridIdx2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): GridIdx2D {
    if (json == null) {
        return json;
    }
    return {
        
        'xIdx': json['xIdx'],
        'yIdx': json['yIdx'],
    };
}

export function GridIdx2DToJSON(json: any): GridIdx2D {
    return GridIdx2DToJSONTyped(json, false);
}

export function GridIdx2DToJSONTyped(value?: GridIdx2D | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'xIdx': value['xIdx'],
        'yIdx': value['yIdx'],
    };
}

