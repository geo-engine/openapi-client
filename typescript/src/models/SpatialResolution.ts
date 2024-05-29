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
/**
 * The spatial resolution in SRS units
 * @export
 * @interface SpatialResolution
 */
export interface SpatialResolution {
    /**
     * 
     * @type {number}
     * @memberof SpatialResolution
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof SpatialResolution
     */
    y: number;
}

/**
 * Check if a given object implements the SpatialResolution interface.
 */
export function instanceOfSpatialResolution(value: object): boolean {
    if (!('x' in value)) return false;
    if (!('y' in value)) return false;
    return true;
}

export function SpatialResolutionFromJSON(json: any): SpatialResolution {
    return SpatialResolutionFromJSONTyped(json, false);
}

export function SpatialResolutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatialResolution {
    if (json == null) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
    };
}

export function SpatialResolutionToJSON(value?: SpatialResolution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'x': value['x'],
        'y': value['y'],
    };
}

