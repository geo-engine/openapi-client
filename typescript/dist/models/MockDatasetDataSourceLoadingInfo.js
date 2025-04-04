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
exports.MockDatasetDataSourceLoadingInfoToJSONTyped = exports.MockDatasetDataSourceLoadingInfoToJSON = exports.MockDatasetDataSourceLoadingInfoFromJSONTyped = exports.MockDatasetDataSourceLoadingInfoFromJSON = exports.instanceOfMockDatasetDataSourceLoadingInfo = void 0;
const Coordinate2D_1 = require("./Coordinate2D");
/**
 * Check if a given object implements the MockDatasetDataSourceLoadingInfo interface.
 */
function instanceOfMockDatasetDataSourceLoadingInfo(value) {
    if (!('points' in value) || value['points'] === undefined)
        return false;
    return true;
}
exports.instanceOfMockDatasetDataSourceLoadingInfo = instanceOfMockDatasetDataSourceLoadingInfo;
function MockDatasetDataSourceLoadingInfoFromJSON(json) {
    return MockDatasetDataSourceLoadingInfoFromJSONTyped(json, false);
}
exports.MockDatasetDataSourceLoadingInfoFromJSON = MockDatasetDataSourceLoadingInfoFromJSON;
function MockDatasetDataSourceLoadingInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'points': (json['points'].map(Coordinate2D_1.Coordinate2DFromJSON)),
    };
}
exports.MockDatasetDataSourceLoadingInfoFromJSONTyped = MockDatasetDataSourceLoadingInfoFromJSONTyped;
function MockDatasetDataSourceLoadingInfoToJSON(json) {
    return MockDatasetDataSourceLoadingInfoToJSONTyped(json, false);
}
exports.MockDatasetDataSourceLoadingInfoToJSON = MockDatasetDataSourceLoadingInfoToJSON;
function MockDatasetDataSourceLoadingInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'points': (value['points'].map(Coordinate2D_1.Coordinate2DToJSON)),
    };
}
exports.MockDatasetDataSourceLoadingInfoToJSONTyped = MockDatasetDataSourceLoadingInfoToJSONTyped;
