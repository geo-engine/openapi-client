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
import { SpatialResolutionFromJSON, SpatialResolutionToJSON, } from './SpatialResolution';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
import { RasterBandDescriptorFromJSON, RasterBandDescriptorToJSON, } from './RasterBandDescriptor';
import { RasterDataTypeFromJSON, RasterDataTypeToJSON, } from './RasterDataType';
import { SpatialPartition2DFromJSON, SpatialPartition2DToJSON, } from './SpatialPartition2D';
/**
 * Check if a given object implements the RasterResultDescriptor interface.
 */
export function instanceOfRasterResultDescriptor(value) {
    if (!('bands' in value) || value['bands'] === undefined)
        return false;
    if (!('dataType' in value) || value['dataType'] === undefined)
        return false;
    if (!('spatialReference' in value) || value['spatialReference'] === undefined)
        return false;
    return true;
}
export function RasterResultDescriptorFromJSON(json) {
    return RasterResultDescriptorFromJSONTyped(json, false);
}
export function RasterResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bands': (json['bands'].map(RasterBandDescriptorFromJSON)),
        'bbox': json['bbox'] == null ? undefined : SpatialPartition2DFromJSON(json['bbox']),
        'dataType': RasterDataTypeFromJSON(json['dataType']),
        'resolution': json['resolution'] == null ? undefined : SpatialResolutionFromJSON(json['resolution']),
        'spatialReference': json['spatialReference'],
        'time': json['time'] == null ? undefined : TimeIntervalFromJSON(json['time']),
    };
}
export function RasterResultDescriptorToJSON(json) {
    return RasterResultDescriptorToJSONTyped(json, false);
}
export function RasterResultDescriptorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bands': (value['bands'].map(RasterBandDescriptorToJSON)),
        'bbox': SpatialPartition2DToJSON(value['bbox']),
        'dataType': RasterDataTypeToJSON(value['dataType']),
        'resolution': SpatialResolutionToJSON(value['resolution']),
        'spatialReference': value['spatialReference'],
        'time': TimeIntervalToJSON(value['time']),
    };
}
