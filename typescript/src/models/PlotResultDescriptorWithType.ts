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
 * @interface PlotResultDescriptorWithType
 */
export interface PlotResultDescriptorWithType {
    /**
     * 
     * @type {BoundingBox2D}
     * @memberof PlotResultDescriptorWithType
     */
    bbox?: BoundingBox2D | null;
    /**
     * 
     * @type {string}
     * @memberof PlotResultDescriptorWithType
     */
    spatialReference: string;
    /**
     * 
     * @type {TimeInterval}
     * @memberof PlotResultDescriptorWithType
     */
    time?: TimeInterval | null;
    /**
     * 
     * @type {string}
     * @memberof PlotResultDescriptorWithType
     */
    type: PlotResultDescriptorWithTypeTypeEnum;
}


/**
 * @export
 */
export const PlotResultDescriptorWithTypeTypeEnum = {
    Plot: 'plot'
} as const;
export type PlotResultDescriptorWithTypeTypeEnum = typeof PlotResultDescriptorWithTypeTypeEnum[keyof typeof PlotResultDescriptorWithTypeTypeEnum];


/**
 * Check if a given object implements the PlotResultDescriptorWithType interface.
 */
export function instanceOfPlotResultDescriptorWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spatialReference" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function PlotResultDescriptorWithTypeFromJSON(json: any): PlotResultDescriptorWithType {
    return PlotResultDescriptorWithTypeFromJSONTyped(json, false);
}

export function PlotResultDescriptorWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotResultDescriptorWithType {
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

export function PlotResultDescriptorWithTypeToJSON(value?: PlotResultDescriptorWithType | null): any {
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
