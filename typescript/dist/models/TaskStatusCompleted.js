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
exports.TaskStatusCompletedToJSON = exports.TaskStatusCompletedFromJSONTyped = exports.TaskStatusCompletedFromJSON = exports.instanceOfTaskStatusCompleted = exports.TaskStatusCompletedStatusEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.TaskStatusCompletedStatusEnum = {
    Completed: 'completed'
};
/**
 * Check if a given object implements the TaskStatusCompleted interface.
 */
function instanceOfTaskStatusCompleted(value) {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "taskType" in value;
    isInstance = isInstance && "timeStarted" in value;
    isInstance = isInstance && "timeTotal" in value;
    return isInstance;
}
exports.instanceOfTaskStatusCompleted = instanceOfTaskStatusCompleted;
function TaskStatusCompletedFromJSON(json) {
    return TaskStatusCompletedFromJSONTyped(json, false);
}
exports.TaskStatusCompletedFromJSON = TaskStatusCompletedFromJSON;
function TaskStatusCompletedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'info': !(0, runtime_1.exists)(json, 'info') ? undefined : json['info'],
        'status': json['status'],
        'taskType': json['taskType'],
        'timeStarted': json['timeStarted'],
        'timeTotal': json['timeTotal'],
    };
}
exports.TaskStatusCompletedFromJSONTyped = TaskStatusCompletedFromJSONTyped;
function TaskStatusCompletedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'info': value.info,
        'status': value.status,
        'taskType': value.taskType,
        'timeStarted': value.timeStarted,
        'timeTotal': value.timeTotal,
    };
}
exports.TaskStatusCompletedToJSON = TaskStatusCompletedToJSON;
