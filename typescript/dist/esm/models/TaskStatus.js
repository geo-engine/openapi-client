/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AbortedTaskStatusFromJSONTyped, AbortedTaskStatusToJSON, } from './AbortedTaskStatus';
import { CompletedTaskStatusFromJSONTyped, CompletedTaskStatusToJSON, } from './CompletedTaskStatus';
import { FailedTaskStatusFromJSONTyped, FailedTaskStatusToJSON, } from './FailedTaskStatus';
import { RunningTaskStatusFromJSONTyped, RunningTaskStatusToJSON, } from './RunningTaskStatus';
export function TaskStatusFromJSON(json) {
    return TaskStatusFromJSONTyped(json, false);
}
export function TaskStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['status']) {
        case 'aborted':
            return Object.assign(Object.assign({}, AbortedTaskStatusFromJSONTyped(json, true)), { status: 'aborted' });
        case 'completed':
            return Object.assign(Object.assign({}, CompletedTaskStatusFromJSONTyped(json, true)), { status: 'completed' });
        case 'failed':
            return Object.assign(Object.assign({}, FailedTaskStatusFromJSONTyped(json, true)), { status: 'failed' });
        case 'running':
            return Object.assign(Object.assign({}, RunningTaskStatusFromJSONTyped(json, true)), { status: 'running' });
        default:
            throw new Error(`No variant of TaskStatus exists with 'status=${json['status']}'`);
    }
}
export function TaskStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['status']) {
        case 'aborted':
            return AbortedTaskStatusToJSON(value);
        case 'completed':
            return CompletedTaskStatusToJSON(value);
        case 'failed':
            return FailedTaskStatusToJSON(value);
        case 'running':
            return RunningTaskStatusToJSON(value);
        default:
            throw new Error(`No variant of TaskStatus exists with 'status=${value['status']}'`);
    }
}
