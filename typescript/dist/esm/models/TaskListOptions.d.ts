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
import type { TaskFilter } from './TaskFilter';
/**
 *
 * @export
 * @interface TaskListOptions
 */
export interface TaskListOptions {
    /**
     *
     * @type {TaskFilter}
     * @memberof TaskListOptions
     */
    filter?: TaskFilter | null;
    /**
     *
     * @type {number}
     * @memberof TaskListOptions
     */
    limit?: number;
    /**
     *
     * @type {number}
     * @memberof TaskListOptions
     */
    offset?: number;
}
/**
 * Check if a given object implements the TaskListOptions interface.
 */
export declare function instanceOfTaskListOptions(value: object): value is TaskListOptions;
export declare function TaskListOptionsFromJSON(json: any): TaskListOptions;
export declare function TaskListOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskListOptions;
export declare function TaskListOptionsToJSON(json: any): TaskListOptions;
export declare function TaskListOptionsToJSONTyped(value?: TaskListOptions | null, ignoreDiscriminator?: boolean): any;
