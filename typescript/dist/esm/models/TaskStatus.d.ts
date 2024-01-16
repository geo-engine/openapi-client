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
import { AbortedTaskStatus } from './AbortedTaskStatus';
import { CompletedTaskStatus } from './CompletedTaskStatus';
import { FailedTaskStatus } from './FailedTaskStatus';
import { RunningTaskStatus } from './RunningTaskStatus';
/**
 * @type TaskStatus
 *
 * @export
 */
export type TaskStatus = {
    status: 'aborted';
} & AbortedTaskStatus | {
    status: 'completed';
} & CompletedTaskStatus | {
    status: 'failed';
} & FailedTaskStatus | {
    status: 'running';
} & RunningTaskStatus;
export declare function TaskStatusFromJSON(json: any): TaskStatus;
export declare function TaskStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStatus;
export declare function TaskStatusToJSON(value?: TaskStatus | null): any;
