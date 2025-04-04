"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowToJSONTyped = exports.WorkflowToJSON = exports.WorkflowFromJSONTyped = exports.WorkflowFromJSON = exports.instanceOfWorkflow = exports.WorkflowTypeEnum = void 0;
const TypedOperatorOperator_1 = require("./TypedOperatorOperator");
/**
 * @export
 */
exports.WorkflowTypeEnum = {
    Vector: 'Vector',
    Raster: 'Raster',
    Plot: 'Plot'
};
/**
 * Check if a given object implements the Workflow interface.
 */
function instanceOfWorkflow(value) {
    if (!('operator' in value) || value['operator'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfWorkflow = instanceOfWorkflow;
function WorkflowFromJSON(json) {
    return WorkflowFromJSONTyped(json, false);
}
exports.WorkflowFromJSON = WorkflowFromJSON;
function WorkflowFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'operator': (0, TypedOperatorOperator_1.TypedOperatorOperatorFromJSON)(json['operator']),
        'type': json['type'],
    };
}
exports.WorkflowFromJSONTyped = WorkflowFromJSONTyped;
function WorkflowToJSON(json) {
    return WorkflowToJSONTyped(json, false);
}
exports.WorkflowToJSON = WorkflowToJSON;
function WorkflowToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'operator': (0, TypedOperatorOperator_1.TypedOperatorOperatorToJSON)(value['operator']),
        'type': value['type'],
    };
}
exports.WorkflowToJSONTyped = WorkflowToJSONTyped;
