"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdalMetaDataStaticToJSON = exports.GdalMetaDataStaticFromJSONTyped = exports.GdalMetaDataStaticFromJSON = exports.instanceOfGdalMetaDataStatic = exports.GdalMetaDataStaticTypeEnum = void 0;
const runtime_1 = require("../runtime");
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
const TimeInterval_1 = require("./TimeInterval");
/**
 * @export
 */
exports.GdalMetaDataStaticTypeEnum = {
    GdalStatic: 'GdalStatic'
};
/**
 * Check if a given object implements the GdalMetaDataStatic interface.
 */
function instanceOfGdalMetaDataStatic(value) {
    let isInstance = true;
    isInstance = isInstance && "params" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfGdalMetaDataStatic = instanceOfGdalMetaDataStatic;
function GdalMetaDataStaticFromJSON(json) {
    return GdalMetaDataStaticFromJSONTyped(json, false);
}
exports.GdalMetaDataStaticFromJSON = GdalMetaDataStaticFromJSON;
function GdalMetaDataStaticFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cacheTtl': !(0, runtime_1.exists)(json, 'cacheTtl') ? undefined : json['cacheTtl'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'time': !(0, runtime_1.exists)(json, 'time') ? undefined : (0, TimeInterval_1.TimeIntervalFromJSON)(json['time']),
        'type': json['type'],
    };
}
exports.GdalMetaDataStaticFromJSONTyped = GdalMetaDataStaticFromJSONTyped;
function GdalMetaDataStaticToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cacheTtl': value.cacheTtl,
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value.params),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value.resultDescriptor),
        'time': (0, TimeInterval_1.TimeIntervalToJSON)(value.time),
        'type': value.type,
    };
}
exports.GdalMetaDataStaticToJSON = GdalMetaDataStaticToJSON;
