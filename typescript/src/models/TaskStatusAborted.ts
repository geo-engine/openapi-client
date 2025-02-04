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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TaskStatusAborted
 */
export interface TaskStatusAborted {
    /**
     * 
     * @type {any}
     * @memberof TaskStatusAborted
     */
    cleanUp: any | null;
    /**
     * 
     * @type {string}
     * @memberof TaskStatusAborted
     */
    status: TaskStatusAbortedStatusEnum;
}


/**
 * @export
 */
export const TaskStatusAbortedStatusEnum = {
    Aborted: 'aborted'
} as const;
export type TaskStatusAbortedStatusEnum = typeof TaskStatusAbortedStatusEnum[keyof typeof TaskStatusAbortedStatusEnum];


/**
 * Check if a given object implements the TaskStatusAborted interface.
 */
export function instanceOfTaskStatusAborted(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cleanUp" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function TaskStatusAbortedFromJSON(json: any): TaskStatusAborted {
    return TaskStatusAbortedFromJSONTyped(json, false);
}

export function TaskStatusAbortedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStatusAborted {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cleanUp': json['cleanUp'],
        'status': json['status'],
    };
}

export function TaskStatusAbortedToJSON(value?: TaskStatusAborted | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cleanUp': value.cleanUp,
        'status': value.status,
    };
}

