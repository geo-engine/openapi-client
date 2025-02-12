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
import { TaskStatusAbortedFromJSONTyped, TaskStatusAbortedToJSON, } from './TaskStatusAborted';
import { TaskStatusCompletedFromJSONTyped, TaskStatusCompletedToJSON, } from './TaskStatusCompleted';
import { TaskStatusFailedFromJSONTyped, TaskStatusFailedToJSON, } from './TaskStatusFailed';
import { TaskStatusRunningFromJSONTyped, TaskStatusRunningToJSON, } from './TaskStatusRunning';
export function TaskStatusFromJSON(json) {
    return TaskStatusFromJSONTyped(json, false);
}
export function TaskStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['status']) {
        case 'aborted':
            return Object.assign({}, TaskStatusAbortedFromJSONTyped(json, true), { status: 'aborted' });
        case 'completed':
            return Object.assign({}, TaskStatusCompletedFromJSONTyped(json, true), { status: 'completed' });
        case 'failed':
            return Object.assign({}, TaskStatusFailedFromJSONTyped(json, true), { status: 'failed' });
        case 'running':
            return Object.assign({}, TaskStatusRunningFromJSONTyped(json, true), { status: 'running' });
        default:
            throw new Error(`No variant of TaskStatus exists with 'status=${json['status']}'`);
    }
}
export function TaskStatusToJSON(json) {
    return TaskStatusToJSONTyped(json, false);
}
export function TaskStatusToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['status']) {
        case 'aborted':
            return Object.assign({}, TaskStatusAbortedToJSON(value), { status: 'aborted' });
        case 'completed':
            return Object.assign({}, TaskStatusCompletedToJSON(value), { status: 'completed' });
        case 'failed':
            return Object.assign({}, TaskStatusFailedToJSON(value), { status: 'failed' });
        case 'running':
            return Object.assign({}, TaskStatusRunningToJSON(value), { status: 'running' });
        default:
            throw new Error(`No variant of TaskStatus exists with 'status=${value['status']}'`);
    }
}
