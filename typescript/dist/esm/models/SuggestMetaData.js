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
import { exists } from '../runtime';
import { DataPathFromJSON, DataPathToJSON, } from './DataPath';
/**
 * Check if a given object implements the SuggestMetaData interface.
 */
export function instanceOfSuggestMetaData(value) {
    let isInstance = true;
    isInstance = isInstance && "dataPath" in value;
    return isInstance;
}
export function SuggestMetaDataFromJSON(json) {
    return SuggestMetaDataFromJSONTyped(json, false);
}
export function SuggestMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dataPath': DataPathFromJSON(json['dataPath']),
        'layerName': !exists(json, 'layerName') ? undefined : json['layerName'],
        'mainFile': !exists(json, 'mainFile') ? undefined : json['mainFile'],
    };
}
export function SuggestMetaDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dataPath': DataPathToJSON(value.dataPath),
        'layerName': value.layerName,
        'mainFile': value.mainFile,
    };
}
