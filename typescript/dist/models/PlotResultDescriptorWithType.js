"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlotResultDescriptorWithTypeToJSON = exports.PlotResultDescriptorWithTypeFromJSONTyped = exports.PlotResultDescriptorWithTypeFromJSON = exports.instanceOfPlotResultDescriptorWithType = exports.PlotResultDescriptorWithTypeTypeEnum = void 0;
const runtime_1 = require("../runtime");
const BoundingBox2D_1 = require("./BoundingBox2D");
const TimeInterval_1 = require("./TimeInterval");
/**
 * @export
 */
exports.PlotResultDescriptorWithTypeTypeEnum = {
    Plot: 'plot'
};
/**
 * Check if a given object implements the PlotResultDescriptorWithType interface.
 */
function instanceOfPlotResultDescriptorWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "spatialReference" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfPlotResultDescriptorWithType = instanceOfPlotResultDescriptorWithType;
function PlotResultDescriptorWithTypeFromJSON(json) {
    return PlotResultDescriptorWithTypeFromJSONTyped(json, false);
}
exports.PlotResultDescriptorWithTypeFromJSON = PlotResultDescriptorWithTypeFromJSON;
function PlotResultDescriptorWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bbox': !(0, runtime_1.exists)(json, 'bbox') ? undefined : (0, BoundingBox2D_1.BoundingBox2DFromJSON)(json['bbox']),
        'spatialReference': json['spatialReference'],
        'time': !(0, runtime_1.exists)(json, 'time') ? undefined : (0, TimeInterval_1.TimeIntervalFromJSON)(json['time']),
        'type': json['type'],
    };
}
exports.PlotResultDescriptorWithTypeFromJSONTyped = PlotResultDescriptorWithTypeFromJSONTyped;
function PlotResultDescriptorWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bbox': (0, BoundingBox2D_1.BoundingBox2DToJSON)(value.bbox),
        'spatialReference': value.spatialReference,
        'time': (0, TimeInterval_1.TimeIntervalToJSON)(value.time),
        'type': value.type,
    };
}
exports.PlotResultDescriptorWithTypeToJSON = PlotResultDescriptorWithTypeToJSON;