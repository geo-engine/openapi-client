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
exports.RasterDatasetFromWorkflowResultToJSON = exports.RasterDatasetFromWorkflowResultFromJSONTyped = exports.RasterDatasetFromWorkflowResultFromJSON = exports.instanceOfRasterDatasetFromWorkflowResult = void 0;
/**
 * Check if a given object implements the RasterDatasetFromWorkflowResult interface.
 */
function instanceOfRasterDatasetFromWorkflowResult(value) {
    let isInstance = true;
    isInstance = isInstance && "dataset" in value;
    isInstance = isInstance && "upload" in value;
    return isInstance;
}
exports.instanceOfRasterDatasetFromWorkflowResult = instanceOfRasterDatasetFromWorkflowResult;
function RasterDatasetFromWorkflowResultFromJSON(json) {
    return RasterDatasetFromWorkflowResultFromJSONTyped(json, false);
}
exports.RasterDatasetFromWorkflowResultFromJSON = RasterDatasetFromWorkflowResultFromJSON;
function RasterDatasetFromWorkflowResultFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dataset': json['dataset'],
        'upload': json['upload'],
    };
}
exports.RasterDatasetFromWorkflowResultFromJSONTyped = RasterDatasetFromWorkflowResultFromJSONTyped;
function RasterDatasetFromWorkflowResultToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dataset': value.dataset,
        'upload': value.upload,
    };
}
exports.RasterDatasetFromWorkflowResultToJSON = RasterDatasetFromWorkflowResultToJSON;
