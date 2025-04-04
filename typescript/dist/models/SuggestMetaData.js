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
exports.SuggestMetaDataToJSONTyped = exports.SuggestMetaDataToJSON = exports.SuggestMetaDataFromJSONTyped = exports.SuggestMetaDataFromJSON = exports.instanceOfSuggestMetaData = void 0;
const DataPath_1 = require("./DataPath");
/**
 * Check if a given object implements the SuggestMetaData interface.
 */
function instanceOfSuggestMetaData(value) {
    if (!('dataPath' in value) || value['dataPath'] === undefined)
        return false;
    return true;
}
exports.instanceOfSuggestMetaData = instanceOfSuggestMetaData;
function SuggestMetaDataFromJSON(json) {
    return SuggestMetaDataFromJSONTyped(json, false);
}
exports.SuggestMetaDataFromJSON = SuggestMetaDataFromJSON;
function SuggestMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataPath': (0, DataPath_1.DataPathFromJSON)(json['dataPath']),
        'layerName': json['layerName'] == null ? undefined : json['layerName'],
        'mainFile': json['mainFile'] == null ? undefined : json['mainFile'],
    };
}
exports.SuggestMetaDataFromJSONTyped = SuggestMetaDataFromJSONTyped;
function SuggestMetaDataToJSON(json) {
    return SuggestMetaDataToJSONTyped(json, false);
}
exports.SuggestMetaDataToJSON = SuggestMetaDataToJSON;
function SuggestMetaDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'dataPath': (0, DataPath_1.DataPathToJSON)(value['dataPath']),
        'layerName': value['layerName'],
        'mainFile': value['mainFile'],
    };
}
exports.SuggestMetaDataToJSONTyped = SuggestMetaDataToJSONTyped;
