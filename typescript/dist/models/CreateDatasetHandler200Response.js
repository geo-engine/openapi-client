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
exports.CreateDatasetHandler200ResponseToJSON = exports.CreateDatasetHandler200ResponseFromJSONTyped = exports.CreateDatasetHandler200ResponseFromJSON = exports.instanceOfCreateDatasetHandler200Response = void 0;
/**
 * Check if a given object implements the CreateDatasetHandler200Response interface.
 */
function instanceOfCreateDatasetHandler200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "datasetName" in value;
    return isInstance;
}
exports.instanceOfCreateDatasetHandler200Response = instanceOfCreateDatasetHandler200Response;
function CreateDatasetHandler200ResponseFromJSON(json) {
    return CreateDatasetHandler200ResponseFromJSONTyped(json, false);
}
exports.CreateDatasetHandler200ResponseFromJSON = CreateDatasetHandler200ResponseFromJSON;
function CreateDatasetHandler200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'datasetName': json['datasetName'],
    };
}
exports.CreateDatasetHandler200ResponseFromJSONTyped = CreateDatasetHandler200ResponseFromJSONTyped;
function CreateDatasetHandler200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'datasetName': value.datasetName,
    };
}
exports.CreateDatasetHandler200ResponseToJSON = CreateDatasetHandler200ResponseToJSON;
