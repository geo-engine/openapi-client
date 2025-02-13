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
import { DataPathFromJSON, DataPathToJSON, } from './DataPath';
/**
 * Check if a given object implements the SuggestMetaData interface.
 */
export function instanceOfSuggestMetaData(value) {
    if (!('dataPath' in value) || value['dataPath'] === undefined)
        return false;
    return true;
}
export function SuggestMetaDataFromJSON(json) {
    return SuggestMetaDataFromJSONTyped(json, false);
}
export function SuggestMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataPath': DataPathFromJSON(json['dataPath']),
        'layerName': json['layerName'] == null ? undefined : json['layerName'],
        'mainFile': json['mainFile'] == null ? undefined : json['mainFile'],
    };
}
export function SuggestMetaDataToJSON(json) {
    return SuggestMetaDataToJSONTyped(json, false);
}
export function SuggestMetaDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'dataPath': DataPathToJSON(value['dataPath']),
        'layerName': value['layerName'],
        'mainFile': value['mainFile'],
    };
}
