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
import { DatasetDefinitionFromJSON, DatasetDefinitionToJSON, } from './DatasetDefinition';
/**
 * Check if a given object implements the CreateDataset interface.
 */
export function instanceOfCreateDataset(value) {
    let isInstance = true;
    isInstance = isInstance && "dataPath" in value;
    isInstance = isInstance && "definition" in value;
    return isInstance;
}
export function CreateDatasetFromJSON(json) {
    return CreateDatasetFromJSONTyped(json, false);
}
export function CreateDatasetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dataPath': DataPathFromJSON(json['dataPath']),
        'definition': DatasetDefinitionFromJSON(json['definition']),
    };
}
export function CreateDatasetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dataPath': DataPathToJSON(value.dataPath),
        'definition': DatasetDefinitionToJSON(value.definition),
    };
}
