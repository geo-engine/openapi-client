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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TaskStatusRunning
 */
export interface TaskStatusRunning {
    /**
     * 
     * @type {string}
     * @memberof TaskStatusRunning
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusRunning
     */
    estimatedTimeRemaining: string;
    /**
     * 
     * @type {any}
     * @memberof TaskStatusRunning
     */
    info?: any;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusRunning
     */
    pctComplete: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusRunning
     */
    status: TaskStatusRunningStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusRunning
     */
    taskType: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusRunning
     */
    timeStarted: string;
}


/**
 * @export
 */
export const TaskStatusRunningStatusEnum = {
    Running: 'running'
} as const;
export type TaskStatusRunningStatusEnum = typeof TaskStatusRunningStatusEnum[keyof typeof TaskStatusRunningStatusEnum];


/**
 * Check if a given object implements the TaskStatusRunning interface.
 */
export function instanceOfTaskStatusRunning(value: object): boolean {
    if (!('estimatedTimeRemaining' in value)) return false;
    if (!('pctComplete' in value)) return false;
    if (!('status' in value)) return false;
    if (!('taskType' in value)) return false;
    if (!('timeStarted' in value)) return false;
    return true;
}

export function TaskStatusRunningFromJSON(json: any): TaskStatusRunning {
    return TaskStatusRunningFromJSONTyped(json, false);
}

export function TaskStatusRunningFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStatusRunning {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'estimatedTimeRemaining': json['estimatedTimeRemaining'],
        'info': json['info'] == null ? undefined : json['info'],
        'pctComplete': json['pctComplete'],
        'status': json['status'],
        'taskType': json['taskType'],
        'timeStarted': json['timeStarted'],
    };
}

export function TaskStatusRunningToJSON(value?: TaskStatusRunning | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'estimatedTimeRemaining': value['estimatedTimeRemaining'],
        'info': value['info'],
        'pctComplete': value['pctComplete'],
        'status': value['status'],
        'taskType': value['taskType'],
        'timeStarted': value['timeStarted'],
    };
}

