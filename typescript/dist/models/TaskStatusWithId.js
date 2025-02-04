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
exports.TaskStatusWithIdToJSON = exports.TaskStatusWithIdFromJSONTyped = exports.TaskStatusWithIdFromJSON = exports.instanceOfTaskStatusWithId = void 0;
const TaskStatus_1 = require("./TaskStatus");
/**
 * Check if a given object implements the TaskStatusWithId interface.
 */
function instanceOfTaskStatusWithId(value) {
    let isInstance = true;
    isInstance = isInstance && "taskId" in value;
    return isInstance;
}
exports.instanceOfTaskStatusWithId = instanceOfTaskStatusWithId;
function TaskStatusWithIdFromJSON(json) {
    return TaskStatusWithIdFromJSONTyped(json, false);
}
exports.TaskStatusWithIdFromJSON = TaskStatusWithIdFromJSON;
function TaskStatusWithIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, TaskStatus_1.TaskStatusFromJSONTyped)(json, ignoreDiscriminator)), { 'taskId': json['taskId'] });
}
exports.TaskStatusWithIdFromJSONTyped = TaskStatusWithIdFromJSONTyped;
function TaskStatusWithIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign(Object.assign({}, (0, TaskStatus_1.TaskStatusToJSON)(value)), { 'taskId': value.taskId });
}
exports.TaskStatusWithIdToJSON = TaskStatusWithIdToJSON;
