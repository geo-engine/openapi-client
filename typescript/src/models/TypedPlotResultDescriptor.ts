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
import type { BoundingBox2D } from './BoundingBox2D';
import {
    BoundingBox2DFromJSON,
    BoundingBox2DFromJSONTyped,
    BoundingBox2DToJSON,
} from './BoundingBox2D';
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './TimeInterval';

/**
 * A `ResultDescriptor` for plot queries
 * @export
 * @interface TypedPlotResultDescriptor
 */
export interface TypedPlotResultDescriptor {
    /**
     * 
     * @type {BoundingBox2D}
     * @memberof TypedPlotResultDescriptor
     */
    bbox?: BoundingBox2D | null;
    /**
     * 
     * @type {string}
     * @memberof TypedPlotResultDescriptor
     */
    spatialReference: string;
    /**
     * 
     * @type {TimeInterval}
     * @memberof TypedPlotResultDescriptor
     */
    time?: TimeInterval | null;
    /**
     * 
     * @type {string}
     * @memberof TypedPlotResultDescriptor
     */
    type: TypedPlotResultDescriptorTypeEnum;
}


/**
 * @export
 */
export const TypedPlotResultDescriptorTypeEnum = {
    Plot: 'plot'
} as const;
export type TypedPlotResultDescriptorTypeEnum = typeof TypedPlotResultDescriptorTypeEnum[keyof typeof TypedPlotResultDescriptorTypeEnum];


/**
 * Check if a given object implements the TypedPlotResultDescriptor interface.
 */
export function instanceOfTypedPlotResultDescriptor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spatialReference" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TypedPlotResultDescriptorFromJSON(json: any): TypedPlotResultDescriptor {
    return TypedPlotResultDescriptorFromJSONTyped(json, false);
}

export function TypedPlotResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedPlotResultDescriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bbox': !exists(json, 'bbox') ? undefined : BoundingBox2DFromJSON(json['bbox']),
        'spatialReference': json['spatialReference'],
        'time': !exists(json, 'time') ? undefined : TimeIntervalFromJSON(json['time']),
        'type': json['type'],
    };
}

export function TypedPlotResultDescriptorToJSON(value?: TypedPlotResultDescriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bbox': BoundingBox2DToJSON(value.bbox),
        'spatialReference': value.spatialReference,
        'time': TimeIntervalToJSON(value.time),
        'type': value.type,
    };
}

