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
    info?: any | null;
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
export declare const TaskStatusRunningStatusEnum: {
    readonly Running: "running";
};
export type TaskStatusRunningStatusEnum = typeof TaskStatusRunningStatusEnum[keyof typeof TaskStatusRunningStatusEnum];
/**
 * Check if a given object implements the TaskStatusRunning interface.
 */
export declare function instanceOfTaskStatusRunning(value: object): value is TaskStatusRunning;
export declare function TaskStatusRunningFromJSON(json: any): TaskStatusRunning;
export declare function TaskStatusRunningFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStatusRunning;
export declare function TaskStatusRunningToJSON(json: any): TaskStatusRunning;
export declare function TaskStatusRunningToJSONTyped(value?: TaskStatusRunning | null, ignoreDiscriminator?: boolean): any;
