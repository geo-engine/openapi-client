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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TaskStatusCompleted
 */
export interface TaskStatusCompleted {
    /**
     * 
     * @type {string}
     * @memberof TaskStatusCompleted
     */
    description?: string;
    /**
     * 
     * @type {any}
     * @memberof TaskStatusCompleted
     */
    info?: any | null;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusCompleted
     */
    status: TaskStatusCompletedStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusCompleted
     */
    taskType: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusCompleted
     */
    timeStarted: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusCompleted
     */
    timeTotal: string;
}


/**
 * @export
 */
export const TaskStatusCompletedStatusEnum = {
    Completed: 'completed'
} as const;
export type TaskStatusCompletedStatusEnum = typeof TaskStatusCompletedStatusEnum[keyof typeof TaskStatusCompletedStatusEnum];


/**
 * Check if a given object implements the TaskStatusCompleted interface.
 */
export function instanceOfTaskStatusCompleted(value: object): value is TaskStatusCompleted {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('taskType' in value) || value['taskType'] === undefined) return false;
    if (!('timeStarted' in value) || value['timeStarted'] === undefined) return false;
    if (!('timeTotal' in value) || value['timeTotal'] === undefined) return false;
    return true;
}

export function TaskStatusCompletedFromJSON(json: any): TaskStatusCompleted {
    return TaskStatusCompletedFromJSONTyped(json, false);
}

export function TaskStatusCompletedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStatusCompleted {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'info': json['info'] == null ? undefined : json['info'],
        'status': json['status'],
        'taskType': json['taskType'],
        'timeStarted': json['timeStarted'],
        'timeTotal': json['timeTotal'],
    };
}

export function TaskStatusCompletedToJSON(json: any): TaskStatusCompleted {
    return TaskStatusCompletedToJSONTyped(json, false);
}

export function TaskStatusCompletedToJSONTyped(value?: TaskStatusCompleted | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'info': value['info'],
        'status': value['status'],
        'taskType': value['taskType'],
        'timeStarted': value['timeStarted'],
        'timeTotal': value['timeTotal'],
    };
}

