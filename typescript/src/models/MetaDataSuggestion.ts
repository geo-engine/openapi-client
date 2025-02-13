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
import type { MetaDataDefinition } from './MetaDataDefinition';
import {
    MetaDataDefinitionFromJSON,
    MetaDataDefinitionFromJSONTyped,
    MetaDataDefinitionToJSON,
    MetaDataDefinitionToJSONTyped,
} from './MetaDataDefinition';

/**
 * 
 * @export
 * @interface MetaDataSuggestion
 */
export interface MetaDataSuggestion {
    /**
     * 
     * @type {string}
     * @memberof MetaDataSuggestion
     */
    layerName: string;
    /**
     * 
     * @type {string}
     * @memberof MetaDataSuggestion
     */
    mainFile: string;
    /**
     * 
     * @type {MetaDataDefinition}
     * @memberof MetaDataSuggestion
     */
    metaData: MetaDataDefinition;
}

/**
 * Check if a given object implements the MetaDataSuggestion interface.
 */
export function instanceOfMetaDataSuggestion(value: object): value is MetaDataSuggestion {
    if (!('layerName' in value) || value['layerName'] === undefined) return false;
    if (!('mainFile' in value) || value['mainFile'] === undefined) return false;
    if (!('metaData' in value) || value['metaData'] === undefined) return false;
    return true;
}

export function MetaDataSuggestionFromJSON(json: any): MetaDataSuggestion {
    return MetaDataSuggestionFromJSONTyped(json, false);
}

export function MetaDataSuggestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataSuggestion {
    if (json == null) {
        return json;
    }
    return {
        
        'layerName': json['layerName'],
        'mainFile': json['mainFile'],
        'metaData': MetaDataDefinitionFromJSON(json['metaData']),
    };
}

export function MetaDataSuggestionToJSON(json: any): MetaDataSuggestion {
    return MetaDataSuggestionToJSONTyped(json, false);
}

export function MetaDataSuggestionToJSONTyped(value?: MetaDataSuggestion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'layerName': value['layerName'],
        'mainFile': value['mainFile'],
        'metaData': MetaDataDefinitionToJSON(value['metaData']),
    };
}

