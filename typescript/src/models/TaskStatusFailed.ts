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
 * @interface TaskStatusFailed
 */
export interface TaskStatusFailed {
    /**
     * 
     * @type {any}
     * @memberof TaskStatusFailed
     */
    cleanUp: any | null;
    /**
     * 
     * @type {any}
     * @memberof TaskStatusFailed
     */
    error: any | null;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusFailed
     */
    status: TaskStatusFailedStatusEnum;
}


/**
 * @export
 */
export const TaskStatusFailedStatusEnum = {
    Failed: 'failed'
} as const;
export type TaskStatusFailedStatusEnum = typeof TaskStatusFailedStatusEnum[keyof typeof TaskStatusFailedStatusEnum];


/**
 * Check if a given object implements the TaskStatusFailed interface.
 */
export function instanceOfTaskStatusFailed(value: object): value is TaskStatusFailed {
    if (!('cleanUp' in value) || value['cleanUp'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function TaskStatusFailedFromJSON(json: any): TaskStatusFailed {
    return TaskStatusFailedFromJSONTyped(json, false);
}

export function TaskStatusFailedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStatusFailed {
    if (json == null) {
        return json;
    }
    return {
        
        'cleanUp': json['cleanUp'],
        'error': json['error'],
        'status': json['status'],
    };
}

export function TaskStatusFailedToJSON(value?: TaskStatusFailed | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cleanUp': value['cleanUp'],
        'error': value['error'],
        'status': value['status'],
    };
}

