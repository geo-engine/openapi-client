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
import { TypedOperatorOperatorFromJSON, TypedOperatorOperatorToJSON, } from './TypedOperatorOperator';
/**
 * @export
 */
export const WorkflowTypeEnum = {
    Vector: 'Vector',
    Raster: 'Raster',
    Plot: 'Plot'
};
/**
 * Check if a given object implements the Workflow interface.
 */
export function instanceOfWorkflow(value) {
    if (!('operator' in value) || value['operator'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
export function WorkflowFromJSON(json) {
    return WorkflowFromJSONTyped(json, false);
}
export function WorkflowFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'operator': TypedOperatorOperatorFromJSON(json['operator']),
        'type': json['type'],
    };
}
export function WorkflowToJSON(json) {
    return WorkflowToJSONTyped(json, false);
}
export function WorkflowToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'operator': TypedOperatorOperatorToJSON(value['operator']),
        'type': value['type'],
    };
}
