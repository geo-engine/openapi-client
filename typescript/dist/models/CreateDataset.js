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
exports.CreateDatasetToJSONTyped = exports.CreateDatasetToJSON = exports.CreateDatasetFromJSONTyped = exports.CreateDatasetFromJSON = exports.instanceOfCreateDataset = void 0;
const DataPath_1 = require("./DataPath");
const DatasetDefinition_1 = require("./DatasetDefinition");
/**
 * Check if a given object implements the CreateDataset interface.
 */
function instanceOfCreateDataset(value) {
    if (!('dataPath' in value) || value['dataPath'] === undefined)
        return false;
    if (!('definition' in value) || value['definition'] === undefined)
        return false;
    return true;
}
exports.instanceOfCreateDataset = instanceOfCreateDataset;
function CreateDatasetFromJSON(json) {
    return CreateDatasetFromJSONTyped(json, false);
}
exports.CreateDatasetFromJSON = CreateDatasetFromJSON;
function CreateDatasetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataPath': (0, DataPath_1.DataPathFromJSON)(json['dataPath']),
        'definition': (0, DatasetDefinition_1.DatasetDefinitionFromJSON)(json['definition']),
    };
}
exports.CreateDatasetFromJSONTyped = CreateDatasetFromJSONTyped;
function CreateDatasetToJSON(json) {
    return CreateDatasetToJSONTyped(json, false);
}
exports.CreateDatasetToJSON = CreateDatasetToJSON;
function CreateDatasetToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'dataPath': (0, DataPath_1.DataPathToJSON)(value['dataPath']),
        'definition': (0, DatasetDefinition_1.DatasetDefinitionToJSON)(value['definition']),
    };
}
exports.CreateDatasetToJSONTyped = CreateDatasetToJSONTyped;
