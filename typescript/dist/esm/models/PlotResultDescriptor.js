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
import { exists } from '../runtime';
import { BoundingBox2DFromJSON, BoundingBox2DToJSON, } from './BoundingBox2D';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * Check if a given object implements the PlotResultDescriptor interface.
 */
export function instanceOfPlotResultDescriptor(value) {
    let isInstance = true;
    isInstance = isInstance && "spatialReference" in value;
    return isInstance;
}
export function PlotResultDescriptorFromJSON(json) {
    return PlotResultDescriptorFromJSONTyped(json, false);
}
export function PlotResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bbox': !exists(json, 'bbox') ? undefined : BoundingBox2DFromJSON(json['bbox']),
        'spatialReference': json['spatialReference'],
        'time': !exists(json, 'time') ? undefined : TimeIntervalFromJSON(json['time']),
    };
}
export function PlotResultDescriptorToJSON(value) {
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
    };
}
