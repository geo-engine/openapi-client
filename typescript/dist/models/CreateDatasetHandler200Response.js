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
exports.instanceOfCreateDatasetHandler200Response = instanceOfCreateDatasetHandler200Response;
exports.CreateDatasetHandler200ResponseFromJSON = CreateDatasetHandler200ResponseFromJSON;
exports.CreateDatasetHandler200ResponseFromJSONTyped = CreateDatasetHandler200ResponseFromJSONTyped;
exports.CreateDatasetHandler200ResponseToJSON = CreateDatasetHandler200ResponseToJSON;
exports.CreateDatasetHandler200ResponseToJSONTyped = CreateDatasetHandler200ResponseToJSONTyped;
/**
 * Check if a given object implements the CreateDatasetHandler200Response interface.
 */
function instanceOfCreateDatasetHandler200Response(value) {
    if (!('datasetName' in value) || value['datasetName'] === undefined)
        return false;
    return true;
}
function CreateDatasetHandler200ResponseFromJSON(json) {
    return CreateDatasetHandler200ResponseFromJSONTyped(json, false);
}
function CreateDatasetHandler200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'datasetName': json['datasetName'],
    };
}
function CreateDatasetHandler200ResponseToJSON(json) {
    return CreateDatasetHandler200ResponseToJSONTyped(json, false);
}
function CreateDatasetHandler200ResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'datasetName': value['datasetName'],
    };
}
