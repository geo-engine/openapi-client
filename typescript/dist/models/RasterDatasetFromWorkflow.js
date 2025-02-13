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
exports.instanceOfRasterDatasetFromWorkflow = instanceOfRasterDatasetFromWorkflow;
exports.RasterDatasetFromWorkflowFromJSON = RasterDatasetFromWorkflowFromJSON;
exports.RasterDatasetFromWorkflowFromJSONTyped = RasterDatasetFromWorkflowFromJSONTyped;
exports.RasterDatasetFromWorkflowToJSON = RasterDatasetFromWorkflowToJSON;
exports.RasterDatasetFromWorkflowToJSONTyped = RasterDatasetFromWorkflowToJSONTyped;
const RasterQueryRectangle_1 = require("./RasterQueryRectangle");
/**
 * Check if a given object implements the RasterDatasetFromWorkflow interface.
 */
function instanceOfRasterDatasetFromWorkflow(value) {
    if (!('displayName' in value) || value['displayName'] === undefined)
        return false;
    if (!('query' in value) || value['query'] === undefined)
        return false;
    return true;
}
function RasterDatasetFromWorkflowFromJSON(json) {
    return RasterDatasetFromWorkflowFromJSONTyped(json, false);
}
function RasterDatasetFromWorkflowFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'asCog': json['asCog'] == null ? undefined : json['asCog'],
        'description': json['description'] == null ? undefined : json['description'],
        'displayName': json['displayName'],
        'name': json['name'] == null ? undefined : json['name'],
        'query': (0, RasterQueryRectangle_1.RasterQueryRectangleFromJSON)(json['query']),
    };
}
function RasterDatasetFromWorkflowToJSON(json) {
    return RasterDatasetFromWorkflowToJSONTyped(json, false);
}
function RasterDatasetFromWorkflowToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'asCog': value['asCog'],
        'description': value['description'],
        'displayName': value['displayName'],
        'name': value['name'],
        'query': (0, RasterQueryRectangle_1.RasterQueryRectangleToJSON)(value['query']),
    };
}
