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

import { exists, mapValues } from '../runtime';
import type { SpatialPartition2D } from './SpatialPartition2D';
import {
    SpatialPartition2DFromJSON,
    SpatialPartition2DFromJSONTyped,
    SpatialPartition2DToJSON,
} from './SpatialPartition2D';
import type { SpatialResolution } from './SpatialResolution';
import {
    SpatialResolutionFromJSON,
    SpatialResolutionFromJSONTyped,
    SpatialResolutionToJSON,
} from './SpatialResolution';
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './TimeInterval';

/**
 * A spatio-temporal rectangle with a specified resolution
 * @export
 * @interface RasterQueryRectangle
 */
export interface RasterQueryRectangle {
    /**
     * 
     * @type {SpatialPartition2D}
     * @memberof RasterQueryRectangle
     */
    spatialBounds: SpatialPartition2D;
    /**
     * 
     * @type {SpatialResolution}
     * @memberof RasterQueryRectangle
     */
    spatialResolution: SpatialResolution;
    /**
     * 
     * @type {TimeInterval}
     * @memberof RasterQueryRectangle
     */
    timeInterval: TimeInterval;
}

/**
 * Check if a given object implements the RasterQueryRectangle interface.
 */
export function instanceOfRasterQueryRectangle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spatialBounds" in value;
    isInstance = isInstance && "spatialResolution" in value;
    isInstance = isInstance && "timeInterval" in value;

    return isInstance;
}

export function RasterQueryRectangleFromJSON(json: any): RasterQueryRectangle {
    return RasterQueryRectangleFromJSONTyped(json, false);
}

export function RasterQueryRectangleFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterQueryRectangle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'spatialBounds': SpatialPartition2DFromJSON(json['spatialBounds']),
        'spatialResolution': SpatialResolutionFromJSON(json['spatialResolution']),
        'timeInterval': TimeIntervalFromJSON(json['timeInterval']),
    };
}

export function RasterQueryRectangleToJSON(value?: RasterQueryRectangle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'spatialBounds': SpatialPartition2DToJSON(value.spatialBounds),
        'spatialResolution': SpatialResolutionToJSON(value.spatialResolution),
        'timeInterval': TimeIntervalToJSON(value.timeInterval),
    };
}

