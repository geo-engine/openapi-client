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
import { MetaDataDefinitionFromJSON, MetaDataDefinitionToJSON, } from './MetaDataDefinition';
import { AddDatasetFromJSON, AddDatasetToJSON, } from './AddDataset';
/**
 * Check if a given object implements the DatasetDefinition interface.
 */
export function instanceOfDatasetDefinition(value) {
    if (!('metaData' in value) || value['metaData'] === undefined)
        return false;
    if (!('properties' in value) || value['properties'] === undefined)
        return false;
    return true;
}
export function DatasetDefinitionFromJSON(json) {
    return DatasetDefinitionFromJSONTyped(json, false);
}
export function DatasetDefinitionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'metaData': MetaDataDefinitionFromJSON(json['metaData']),
        'properties': AddDatasetFromJSON(json['properties']),
    };
}
export function DatasetDefinitionToJSON(json) {
    return DatasetDefinitionToJSONTyped(json, false);
}
export function DatasetDefinitionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'metaData': MetaDataDefinitionToJSON(value['metaData']),
        'properties': AddDatasetToJSON(value['properties']),
    };
}
