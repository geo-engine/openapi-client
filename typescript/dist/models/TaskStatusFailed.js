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
exports.TaskStatusFailedToJSON = exports.TaskStatusFailedFromJSONTyped = exports.TaskStatusFailedFromJSON = exports.instanceOfTaskStatusFailed = exports.TaskStatusFailedStatusEnum = void 0;
/**
 * @export
 */
exports.TaskStatusFailedStatusEnum = {
    Failed: 'failed'
};
/**
 * Check if a given object implements the TaskStatusFailed interface.
 */
function instanceOfTaskStatusFailed(value) {
    let isInstance = true;
    isInstance = isInstance && "cleanUp" in value;
    isInstance = isInstance && "error" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
exports.instanceOfTaskStatusFailed = instanceOfTaskStatusFailed;
function TaskStatusFailedFromJSON(json) {
    return TaskStatusFailedFromJSONTyped(json, false);
}
exports.TaskStatusFailedFromJSON = TaskStatusFailedFromJSON;
function TaskStatusFailedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cleanUp': json['cleanUp'],
        'error': json['error'],
        'status': json['status'],
    };
}
exports.TaskStatusFailedFromJSONTyped = TaskStatusFailedFromJSONTyped;
function TaskStatusFailedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cleanUp': value.cleanUp,
        'error': value.error,
        'status': value.status,
    };
}
exports.TaskStatusFailedToJSON = TaskStatusFailedToJSON;
