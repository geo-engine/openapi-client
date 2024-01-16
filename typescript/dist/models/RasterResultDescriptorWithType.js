"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RasterResultDescriptorWithTypeToJSON = exports.RasterResultDescriptorWithTypeFromJSONTyped = exports.RasterResultDescriptorWithTypeFromJSON = exports.instanceOfRasterResultDescriptorWithType = exports.RasterResultDescriptorWithTypeTypeEnum = void 0;
const runtime_1 = require("../runtime");
const RasterBandDescriptor_1 = require("./RasterBandDescriptor");
const RasterDataType_1 = require("./RasterDataType");
const SpatialPartition2D_1 = require("./SpatialPartition2D");
const SpatialResolution_1 = require("./SpatialResolution");
const TimeInterval_1 = require("./TimeInterval");
/**
 * @export
 */
exports.RasterResultDescriptorWithTypeTypeEnum = {
    Raster: 'raster'
};
/**
 * Check if a given object implements the RasterResultDescriptorWithType interface.
 */
function instanceOfRasterResultDescriptorWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "bands" in value;
    isInstance = isInstance && "dataType" in value;
    isInstance = isInstance && "spatialReference" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfRasterResultDescriptorWithType = instanceOfRasterResultDescriptorWithType;
function RasterResultDescriptorWithTypeFromJSON(json) {
    return RasterResultDescriptorWithTypeFromJSONTyped(json, false);
}
exports.RasterResultDescriptorWithTypeFromJSON = RasterResultDescriptorWithTypeFromJSON;
function RasterResultDescriptorWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bands': (json['bands'].map(RasterBandDescriptor_1.RasterBandDescriptorFromJSON)),
        'bbox': !(0, runtime_1.exists)(json, 'bbox') ? undefined : (0, SpatialPartition2D_1.SpatialPartition2DFromJSON)(json['bbox']),
        'dataType': (0, RasterDataType_1.RasterDataTypeFromJSON)(json['dataType']),
        'resolution': !(0, runtime_1.exists)(json, 'resolution') ? undefined : (0, SpatialResolution_1.SpatialResolutionFromJSON)(json['resolution']),
        'spatialReference': json['spatialReference'],
        'time': !(0, runtime_1.exists)(json, 'time') ? undefined : (0, TimeInterval_1.TimeIntervalFromJSON)(json['time']),
        'type': json['type'],
    };
}
exports.RasterResultDescriptorWithTypeFromJSONTyped = RasterResultDescriptorWithTypeFromJSONTyped;
function RasterResultDescriptorWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bands': (value.bands.map(RasterBandDescriptor_1.RasterBandDescriptorToJSON)),
        'bbox': (0, SpatialPartition2D_1.SpatialPartition2DToJSON)(value.bbox),
        'dataType': (0, RasterDataType_1.RasterDataTypeToJSON)(value.dataType),
        'resolution': (0, SpatialResolution_1.SpatialResolutionToJSON)(value.resolution),
        'spatialReference': value.spatialReference,
        'time': (0, TimeInterval_1.TimeIntervalToJSON)(value.time),
        'type': value.type,
    };
}
exports.RasterResultDescriptorWithTypeToJSON = RasterResultDescriptorWithTypeToJSON;
