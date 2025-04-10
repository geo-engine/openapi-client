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
import type { DatasetDefinition } from './DatasetDefinition';
import {
    DatasetDefinitionFromJSON,
    DatasetDefinitionFromJSONTyped,
    DatasetDefinitionToJSON,
    DatasetDefinitionToJSONTyped,
} from './DatasetDefinition';

/**
 * 
 * @export
 * @interface CreateDataset
 */
export interface CreateDataset {
    /**
     * 
     * @type {DataPath}
     * @memberof CreateDataset
     */
    dataPath: DataPath;
    /**
     * 
     * @type {DatasetDefinition}
     * @memberof CreateDataset
     */
    definition: DatasetDefinition;
}

/**
 * Check if a given object implements the CreateDataset interface.
 */
export function instanceOfCreateDataset(value: object): value is CreateDataset {
    if (!('dataPath' in value) || value['dataPath'] === undefined) return false;
    if (!('definition' in value) || value['definition'] === undefined) return false;
    return true;
}

export function CreateDatasetFromJSON(json: any): CreateDataset {
    return CreateDatasetFromJSONTyped(json, false);
}

export function CreateDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDataset {
    if (json == null) {
        return json;
    }
    return {
        
        'dataPath': DataPathFromJSON(json['dataPath']),
        'definition': DatasetDefinitionFromJSON(json['definition']),
    };
}

export function CreateDatasetToJSON(json: any): CreateDataset {
    return CreateDatasetToJSONTyped(json, false);
}

export function CreateDatasetToJSONTyped(value?: CreateDataset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dataPath': DataPathToJSON(value['dataPath']),
        'definition': DatasetDefinitionToJSON(value['definition']),
    };
}

