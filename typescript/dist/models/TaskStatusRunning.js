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
exports.TaskStatusRunningToJSON = exports.TaskStatusRunningFromJSONTyped = exports.TaskStatusRunningFromJSON = exports.instanceOfTaskStatusRunning = exports.TaskStatusRunningStatusEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.TaskStatusRunningStatusEnum = {
    Running: 'running'
};
/**
 * Check if a given object implements the TaskStatusRunning interface.
 */
function instanceOfTaskStatusRunning(value) {
    let isInstance = true;
    isInstance = isInstance && "estimatedTimeRemaining" in value;
    isInstance = isInstance && "pctComplete" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "taskType" in value;
    isInstance = isInstance && "timeStarted" in value;
    return isInstance;
}
exports.instanceOfTaskStatusRunning = instanceOfTaskStatusRunning;
function TaskStatusRunningFromJSON(json) {
    return TaskStatusRunningFromJSONTyped(json, false);
}
exports.TaskStatusRunningFromJSON = TaskStatusRunningFromJSON;
function TaskStatusRunningFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'estimatedTimeRemaining': json['estimatedTimeRemaining'],
        'info': !(0, runtime_1.exists)(json, 'info') ? undefined : json['info'],
        'pctComplete': json['pctComplete'],
        'status': json['status'],
        'taskType': json['taskType'],
        'timeStarted': json['timeStarted'],
    };
}
exports.TaskStatusRunningFromJSONTyped = TaskStatusRunningFromJSONTyped;
function TaskStatusRunningToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'estimatedTimeRemaining': value.estimatedTimeRemaining,
        'info': value.info,
        'pctComplete': value.pctComplete,
        'status': value.status,
        'taskType': value.taskType,
        'timeStarted': value.timeStarted,
    };
}
exports.TaskStatusRunningToJSON = TaskStatusRunningToJSON;
