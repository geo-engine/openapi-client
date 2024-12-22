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
exports.MetaDataSuggestionToJSON = exports.MetaDataSuggestionFromJSONTyped = exports.MetaDataSuggestionFromJSON = exports.instanceOfMetaDataSuggestion = void 0;
const MetaDataDefinition_1 = require("./MetaDataDefinition");
/**
 * Check if a given object implements the MetaDataSuggestion interface.
 */
function instanceOfMetaDataSuggestion(value) {
    let isInstance = true;
    isInstance = isInstance && "layerName" in value;
    isInstance = isInstance && "mainFile" in value;
    isInstance = isInstance && "metaData" in value;
    return isInstance;
}
exports.instanceOfMetaDataSuggestion = instanceOfMetaDataSuggestion;
function MetaDataSuggestionFromJSON(json) {
    return MetaDataSuggestionFromJSONTyped(json, false);
}
exports.MetaDataSuggestionFromJSON = MetaDataSuggestionFromJSON;
function MetaDataSuggestionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'layerName': json['layerName'],
        'mainFile': json['mainFile'],
        'metaData': (0, MetaDataDefinition_1.MetaDataDefinitionFromJSON)(json['metaData']),
    };
}
exports.MetaDataSuggestionFromJSONTyped = MetaDataSuggestionFromJSONTyped;
function MetaDataSuggestionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'layerName': value.layerName,
        'mainFile': value.mainFile,
        'metaData': (0, MetaDataDefinition_1.MetaDataDefinitionToJSON)(value.metaData),
    };
}
exports.MetaDataSuggestionToJSON = MetaDataSuggestionToJSON;
