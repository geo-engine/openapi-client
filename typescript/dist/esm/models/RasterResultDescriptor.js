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
import { exists } from '../runtime';
import { RasterBandDescriptorFromJSON, RasterBandDescriptorToJSON, } from './RasterBandDescriptor';
import { RasterDataTypeFromJSON, RasterDataTypeToJSON, } from './RasterDataType';
import { SpatialPartition2DFromJSON, SpatialPartition2DToJSON, } from './SpatialPartition2D';
import { SpatialResolutionFromJSON, SpatialResolutionToJSON, } from './SpatialResolution';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * Check if a given object implements the RasterResultDescriptor interface.
 */
export function instanceOfRasterResultDescriptor(value) {
    let isInstance = true;
    isInstance = isInstance && "bands" in value;
    isInstance = isInstance && "dataType" in value;
    isInstance = isInstance && "spatialReference" in value;
    return isInstance;
}
export function RasterResultDescriptorFromJSON(json) {
    return RasterResultDescriptorFromJSONTyped(json, false);
}
export function RasterResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bands': (json['bands'].map(RasterBandDescriptorFromJSON)),
        'bbox': !exists(json, 'bbox') ? undefined : SpatialPartition2DFromJSON(json['bbox']),
        'dataType': RasterDataTypeFromJSON(json['dataType']),
        'resolution': !exists(json, 'resolution') ? undefined : SpatialResolutionFromJSON(json['resolution']),
        'spatialReference': json['spatialReference'],
        'time': !exists(json, 'time') ? undefined : TimeIntervalFromJSON(json['time']),
    };
}
export function RasterResultDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bands': (value.bands.map(RasterBandDescriptorToJSON)),
        'bbox': SpatialPartition2DToJSON(value.bbox),
        'dataType': RasterDataTypeToJSON(value.dataType),
        'resolution': SpatialResolutionToJSON(value.resolution),
        'spatialReference': value.spatialReference,
        'time': TimeIntervalToJSON(value.time),
    };
}
