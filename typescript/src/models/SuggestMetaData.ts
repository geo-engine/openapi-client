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

import { mapValues } from '../runtime';
import type { DataPath } from './DataPath';
import {
    DataPathFromJSON,
    DataPathFromJSONTyped,
    DataPathToJSON,
    DataPathToJSONTyped,
} from './DataPath';

/**
 * 
 * @export
 * @interface SuggestMetaData
 */
export interface SuggestMetaData {
    /**
     * 
     * @type {DataPath}
     * @memberof SuggestMetaData
     */
    dataPath: DataPath;
    /**
     * 
     * @type {string}
     * @memberof SuggestMetaData
     */
    layerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SuggestMetaData
     */
    mainFile?: string | null;
}

/**
 * Check if a given object implements the SuggestMetaData interface.
 */
export function instanceOfSuggestMetaData(value: object): value is SuggestMetaData {
    if (!('dataPath' in value) || value['dataPath'] === undefined) return false;
    return true;
}

export function SuggestMetaDataFromJSON(json: any): SuggestMetaData {
    return SuggestMetaDataFromJSONTyped(json, false);
}

export function SuggestMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestMetaData {
    if (json == null) {
        return json;
    }
    return {
        
        'dataPath': DataPathFromJSON(json['dataPath']),
        'layerName': json['layerName'] == null ? undefined : json['layerName'],
        'mainFile': json['mainFile'] == null ? undefined : json['mainFile'],
    };
}

export function SuggestMetaDataToJSON(json: any): SuggestMetaData {
    return SuggestMetaDataToJSONTyped(json, false);
}

export function SuggestMetaDataToJSONTyped(value?: SuggestMetaData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dataPath': DataPathToJSON(value['dataPath']),
        'layerName': value['layerName'],
        'mainFile': value['mainFile'],
    };
}

