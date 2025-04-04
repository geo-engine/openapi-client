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
exports.MetaDataSuggestionToJSONTyped = exports.MetaDataSuggestionToJSON = exports.MetaDataSuggestionFromJSONTyped = exports.MetaDataSuggestionFromJSON = exports.instanceOfMetaDataSuggestion = void 0;
const MetaDataDefinition_1 = require("./MetaDataDefinition");
/**
 * Check if a given object implements the MetaDataSuggestion interface.
 */
function instanceOfMetaDataSuggestion(value) {
    if (!('layerName' in value) || value['layerName'] === undefined)
        return false;
    if (!('mainFile' in value) || value['mainFile'] === undefined)
        return false;
    if (!('metaData' in value) || value['metaData'] === undefined)
        return false;
    return true;
}
exports.instanceOfMetaDataSuggestion = instanceOfMetaDataSuggestion;
function MetaDataSuggestionFromJSON(json) {
    return MetaDataSuggestionFromJSONTyped(json, false);
}
exports.MetaDataSuggestionFromJSON = MetaDataSuggestionFromJSON;
function MetaDataSuggestionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'layerName': json['layerName'],
        'mainFile': json['mainFile'],
        'metaData': (0, MetaDataDefinition_1.MetaDataDefinitionFromJSON)(json['metaData']),
    };
}
exports.MetaDataSuggestionFromJSONTyped = MetaDataSuggestionFromJSONTyped;
function MetaDataSuggestionToJSON(json) {
    return MetaDataSuggestionToJSONTyped(json, false);
}
exports.MetaDataSuggestionToJSON = MetaDataSuggestionToJSON;
function MetaDataSuggestionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'layerName': value['layerName'],
        'mainFile': value['mainFile'],
        'metaData': (0, MetaDataDefinition_1.MetaDataDefinitionToJSON)(value['metaData']),
    };
}
exports.MetaDataSuggestionToJSONTyped = MetaDataSuggestionToJSONTyped;
