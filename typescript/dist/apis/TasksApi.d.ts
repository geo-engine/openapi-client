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
import * as runtime from '../runtime';
import type { TaskFilter, TaskStatus, TaskStatusWithId } from '../models/index';
export interface AbortHandlerRequest {
    id: string;
    force?: boolean;
}
export interface ListHandlerRequest {
    filter: TaskFilter | null;
    offset: number;
    limit: number;
}
export interface StatusHandlerRequest {
    id: string;
}
/**
 *
 */
export declare class TasksApi extends runtime.BaseAPI {
    /**
     * Abort a running task.  # Parameters  * `force` - If true, the task will be aborted without clean-up. You can abort a task that is already in the process of aborting.
     * Abort a running task.
     */
    abortHandlerRaw(requestParameters: AbortHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Abort a running task.  # Parameters  * `force` - If true, the task will be aborted without clean-up. You can abort a task that is already in the process of aborting.
     * Abort a running task.
     */
    abortHandler(requestParameters: AbortHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Retrieve the status of all tasks.
     * Retrieve the status of all tasks.
     */
    listHandlerRaw(requestParameters: ListHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaskStatusWithId>>>;
    /**
     * Retrieve the status of all tasks.
     * Retrieve the status of all tasks.
     */
    listHandler(requestParameters: ListHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaskStatusWithId>>;
    /**
     * Retrieve the status of a task.
     * Retrieve the status of a task.
     */
    statusHandlerRaw(requestParameters: StatusHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskStatus>>;
    /**
     * Retrieve the status of a task.
     * Retrieve the status of a task.
     */
    statusHandler(requestParameters: StatusHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskStatus>;
}
