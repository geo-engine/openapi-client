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
exports.TaskResponseToJSON = exports.TaskResponseFromJSONTyped = exports.TaskResponseFromJSON = exports.instanceOfTaskResponse = void 0;
/**
 * Check if a given object implements the TaskResponse interface.
 */
function instanceOfTaskResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "taskId" in value;
    return isInstance;
}
exports.instanceOfTaskResponse = instanceOfTaskResponse;
function TaskResponseFromJSON(json) {
    return TaskResponseFromJSONTyped(json, false);
}
exports.TaskResponseFromJSON = TaskResponseFromJSON;
function TaskResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'taskId': json['taskId'],
    };
}
exports.TaskResponseFromJSONTyped = TaskResponseFromJSONTyped;
function TaskResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'taskId': value.taskId,
    };
}
exports.TaskResponseToJSON = TaskResponseToJSON;
