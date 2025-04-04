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
exports.DatasetDefinitionToJSONTyped = exports.DatasetDefinitionToJSON = exports.DatasetDefinitionFromJSONTyped = exports.DatasetDefinitionFromJSON = exports.instanceOfDatasetDefinition = void 0;
const MetaDataDefinition_1 = require("./MetaDataDefinition");
const AddDataset_1 = require("./AddDataset");
/**
 * Check if a given object implements the DatasetDefinition interface.
 */
function instanceOfDatasetDefinition(value) {
    if (!('metaData' in value) || value['metaData'] === undefined)
        return false;
    if (!('properties' in value) || value['properties'] === undefined)
        return false;
    return true;
}
exports.instanceOfDatasetDefinition = instanceOfDatasetDefinition;
function DatasetDefinitionFromJSON(json) {
    return DatasetDefinitionFromJSONTyped(json, false);
}
exports.DatasetDefinitionFromJSON = DatasetDefinitionFromJSON;
function DatasetDefinitionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'metaData': (0, MetaDataDefinition_1.MetaDataDefinitionFromJSON)(json['metaData']),
        'properties': (0, AddDataset_1.AddDatasetFromJSON)(json['properties']),
    };
}
exports.DatasetDefinitionFromJSONTyped = DatasetDefinitionFromJSONTyped;
function DatasetDefinitionToJSON(json) {
    return DatasetDefinitionToJSONTyped(json, false);
}
exports.DatasetDefinitionToJSON = DatasetDefinitionToJSON;
function DatasetDefinitionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'metaData': (0, MetaDataDefinition_1.MetaDataDefinitionToJSON)(value['metaData']),
        'properties': (0, AddDataset_1.AddDatasetToJSON)(value['properties']),
    };
}
exports.DatasetDefinitionToJSONTyped = DatasetDefinitionToJSONTyped;
