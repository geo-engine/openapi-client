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
/**
 * Create a task somewhere and respond with a task id to query the task status.
 * @export
 * @interface TaskResponse
 */
export interface TaskResponse {
    /**
     *
     * @type {string}
     * @memberof TaskResponse
     */
    taskId: string;
}
/**
 * Check if a given object implements the TaskResponse interface.
 */
export declare function instanceOfTaskResponse(value: object): value is TaskResponse;
export declare function TaskResponseFromJSON(json: any): TaskResponse;
export declare function TaskResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskResponse;
export declare function TaskResponseToJSON(json: any): TaskResponse;
export declare function TaskResponseToJSONTyped(value?: TaskResponse | null, ignoreDiscriminator?: boolean): any;
