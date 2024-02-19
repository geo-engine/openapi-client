/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TaskStatusFromJSONTyped, TaskStatusToJSON, } from './TaskStatus';
/**
 * Check if a given object implements the TaskStatusWithId interface.
 */
export function instanceOfTaskStatusWithId(value) {
    let isInstance = true;
    isInstance = isInstance && "taskId" in value;
    return isInstance;
}
export function TaskStatusWithIdFromJSON(json) {
    return TaskStatusWithIdFromJSONTyped(json, false);
}
export function TaskStatusWithIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, TaskStatusFromJSONTyped(json, ignoreDiscriminator)), { 'taskId': json['taskId'] });
}
export function TaskStatusWithIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign(Object.assign({}, TaskStatusToJSON(value)), { 'taskId': value.taskId });
}