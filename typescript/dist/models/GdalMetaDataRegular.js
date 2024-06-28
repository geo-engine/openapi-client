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
exports.GdalMetaDataRegularToJSON = exports.GdalMetaDataRegularFromJSONTyped = exports.GdalMetaDataRegularFromJSON = exports.instanceOfGdalMetaDataRegular = exports.GdalMetaDataRegularTypeEnum = void 0;
const runtime_1 = require("../runtime");
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
const GdalSourceTimePlaceholder_1 = require("./GdalSourceTimePlaceholder");
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
const TimeInterval_1 = require("./TimeInterval");
const TimeStep_1 = require("./TimeStep");
/**
 * @export
 */
exports.GdalMetaDataRegularTypeEnum = {
    GdalMetaDataRegular: 'GdalMetaDataRegular'
};
/**
 * Check if a given object implements the GdalMetaDataRegular interface.
 */
function instanceOfGdalMetaDataRegular(value) {
    if (!('dataTime' in value))
        return false;
    if (!('params' in value))
        return false;
    if (!('resultDescriptor' in value))
        return false;
    if (!('step' in value))
        return false;
    if (!('timePlaceholders' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfGdalMetaDataRegular = instanceOfGdalMetaDataRegular;
function GdalMetaDataRegularFromJSON(json) {
    return GdalMetaDataRegularFromJSONTyped(json, false);
}
exports.GdalMetaDataRegularFromJSON = GdalMetaDataRegularFromJSON;
function GdalMetaDataRegularFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'dataTime': (0, TimeInterval_1.TimeIntervalFromJSON)(json['dataTime']),
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'step': (0, TimeStep_1.TimeStepFromJSON)(json['step']),
        'timePlaceholders': ((0, runtime_1.mapValues)(json['timePlaceholders'], GdalSourceTimePlaceholder_1.GdalSourceTimePlaceholderFromJSON)),
        'type': json['type'],
    };
}
exports.GdalMetaDataRegularFromJSONTyped = GdalMetaDataRegularFromJSONTyped;
function GdalMetaDataRegularToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'cacheTtl': value['cacheTtl'],
        'dataTime': (0, TimeInterval_1.TimeIntervalToJSON)(value['dataTime']),
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value['resultDescriptor']),
        'step': (0, TimeStep_1.TimeStepToJSON)(value['step']),
        'timePlaceholders': ((0, runtime_1.mapValues)(value['timePlaceholders'], GdalSourceTimePlaceholder_1.GdalSourceTimePlaceholderToJSON)),
        'type': value['type'],
    };
}
exports.GdalMetaDataRegularToJSON = GdalMetaDataRegularToJSON;
