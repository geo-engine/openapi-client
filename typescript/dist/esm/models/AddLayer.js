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
import { SymbologyFromJSON, SymbologyToJSON, } from './Symbology';
import { WorkflowFromJSON, WorkflowToJSON, } from './Workflow';
/**
 * Check if a given object implements the AddLayer interface.
 */
export function instanceOfAddLayer(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "workflow" in value;
    return isInstance;
}
export function AddLayerFromJSON(json) {
    return AddLayerFromJSONTyped(json, false);
}
export function AddLayerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'symbology': !exists(json, 'symbology') ? undefined : SymbologyFromJSON(json['symbology']),
        'workflow': WorkflowFromJSON(json['workflow']),
    };
}
export function AddLayerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'metadata': value.metadata,
        'name': value.name,
        'properties': value.properties,
        'symbology': SymbologyToJSON(value.symbology),
        'workflow': WorkflowToJSON(value.workflow),
    };
}
