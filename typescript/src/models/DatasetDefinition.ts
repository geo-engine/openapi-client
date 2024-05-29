/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
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
import type { AddDataset } from './AddDataset';
import {
    AddDatasetFromJSON,
    AddDatasetFromJSONTyped,
    AddDatasetToJSON,
} from './AddDataset';
import type { MetaDataDefinition } from './MetaDataDefinition';
import {
    MetaDataDefinitionFromJSON,
    MetaDataDefinitionFromJSONTyped,
    MetaDataDefinitionToJSON,
} from './MetaDataDefinition';

/**
 * 
 * @export
 * @interface DatasetDefinition
 */
export interface DatasetDefinition {
    /**
     * 
     * @type {MetaDataDefinition}
     * @memberof DatasetDefinition
     */
    metaData: MetaDataDefinition;
    /**
     * 
     * @type {AddDataset}
     * @memberof DatasetDefinition
     */
    properties: AddDataset;
}

/**
 * Check if a given object implements the DatasetDefinition interface.
 */
export function instanceOfDatasetDefinition(value: object): boolean {
    if (!('metaData' in value)) return false;
    if (!('properties' in value)) return false;
    return true;
}

export function DatasetDefinitionFromJSON(json: any): DatasetDefinition {
    return DatasetDefinitionFromJSONTyped(json, false);
}

export function DatasetDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'metaData': MetaDataDefinitionFromJSON(json['metaData']),
        'properties': AddDatasetFromJSON(json['properties']),
    };
}

export function DatasetDefinitionToJSON(value?: DatasetDefinition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metaData': MetaDataDefinitionToJSON(value['metaData']),
        'properties': AddDatasetToJSON(value['properties']),
    };
}

