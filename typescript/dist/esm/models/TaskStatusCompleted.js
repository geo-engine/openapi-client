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
import { exists } from '../runtime';
/**
 * @export
 */
export const TaskStatusCompletedStatusEnum = {
    Completed: 'completed'
};
/**
 * Check if a given object implements the TaskStatusCompleted interface.
 */
export function instanceOfTaskStatusCompleted(value) {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "taskType" in value;
    isInstance = isInstance && "timeStarted" in value;
    isInstance = isInstance && "timeTotal" in value;
    return isInstance;
}
export function TaskStatusCompletedFromJSON(json) {
    return TaskStatusCompletedFromJSONTyped(json, false);
}
export function TaskStatusCompletedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !exists(json, 'description') ? undefined : json['description'],
        'info': !exists(json, 'info') ? undefined : json['info'],
        'status': json['status'],
        'taskType': json['taskType'],
        'timeStarted': json['timeStarted'],
        'timeTotal': json['timeTotal'],
    };
}
export function TaskStatusCompletedToJSON(value) {
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
