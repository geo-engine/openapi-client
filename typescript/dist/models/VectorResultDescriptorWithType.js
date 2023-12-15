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
exports.VectorResultDescriptorWithTypeToJSON = exports.VectorResultDescriptorWithTypeFromJSONTyped = exports.VectorResultDescriptorWithTypeFromJSON = exports.instanceOfVectorResultDescriptorWithType = exports.VectorResultDescriptorWithTypeTypeEnum = void 0;
const runtime_1 = require("../runtime");
const BoundingBox2D_1 = require("./BoundingBox2D");
const TimeInterval_1 = require("./TimeInterval");
const VectorColumnInfo_1 = require("./VectorColumnInfo");
const VectorDataType_1 = require("./VectorDataType");
/**
 * @export
 */
exports.VectorResultDescriptorWithTypeTypeEnum = {
    Vector: 'vector'
};
/**
 * Check if a given object implements the VectorResultDescriptorWithType interface.
 */
function instanceOfVectorResultDescriptorWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "columns" in value;
    isInstance = isInstance && "dataType" in value;
    isInstance = isInstance && "spatialReference" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfVectorResultDescriptorWithType = instanceOfVectorResultDescriptorWithType;
function VectorResultDescriptorWithTypeFromJSON(json) {
    return VectorResultDescriptorWithTypeFromJSONTyped(json, false);
}
exports.VectorResultDescriptorWithTypeFromJSON = VectorResultDescriptorWithTypeFromJSON;
function VectorResultDescriptorWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bbox': !(0, runtime_1.exists)(json, 'bbox') ? undefined : (0, BoundingBox2D_1.BoundingBox2DFromJSON)(json['bbox']),
        'columns': ((0, runtime_1.mapValues)(json['columns'], VectorColumnInfo_1.VectorColumnInfoFromJSON)),
        'dataType': (0, VectorDataType_1.VectorDataTypeFromJSON)(json['dataType']),
        'spatialReference': json['spatialReference'],
        'time': !(0, runtime_1.exists)(json, 'time') ? undefined : (0, TimeInterval_1.TimeIntervalFromJSON)(json['time']),
        'type': json['type'],
    };
}
exports.VectorResultDescriptorWithTypeFromJSONTyped = VectorResultDescriptorWithTypeFromJSONTyped;
function VectorResultDescriptorWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bbox': (0, BoundingBox2D_1.BoundingBox2DToJSON)(value.bbox),
        'columns': ((0, runtime_1.mapValues)(value.columns, VectorColumnInfo_1.VectorColumnInfoToJSON)),
        'dataType': (0, VectorDataType_1.VectorDataTypeToJSON)(value.dataType),
        'spatialReference': value.spatialReference,
        'time': (0, TimeInterval_1.TimeIntervalToJSON)(value.time),
        'type': value.type,
    };
}
exports.VectorResultDescriptorWithTypeToJSON = VectorResultDescriptorWithTypeToJSON;
