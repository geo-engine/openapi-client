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


/**
 * 
 * @export
 */
export const TaskFilter = {
    Running: 'running',
    Aborted: 'aborted',
    Failed: 'failed',
    Completed: 'completed'
} as const;
export type TaskFilter = typeof TaskFilter[keyof typeof TaskFilter];


export function instanceOfTaskFilter(value: any): boolean {
    for (const key in TaskFilter) {
        if (Object.prototype.hasOwnProperty.call(TaskFilter, key)) {
            if (TaskFilter[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TaskFilterFromJSON(json: any): TaskFilter {
    return TaskFilterFromJSONTyped(json, false);
}

export function TaskFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskFilter {
    return json as TaskFilter;
}

export function TaskFilterToJSON(value?: TaskFilter | null): any {
    return value as any;
}

