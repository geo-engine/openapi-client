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
import type { TimeGranularity } from './TimeGranularity';
/**
 *
 * @export
 * @interface TimeStep
 */
export interface TimeStep {
    /**
     *
     * @type {TimeGranularity}
     * @memberof TimeStep
     */
    granularity: TimeGranularity;
    /**
     *
     * @type {number}
     * @memberof TimeStep
     */
    step: number;
}
/**
 * Check if a given object implements the TimeStep interface.
 */
export declare function instanceOfTimeStep(value: object): value is TimeStep;
export declare function TimeStepFromJSON(json: any): TimeStep;
export declare function TimeStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeStep;
export declare function TimeStepToJSON(json: any): TimeStep;
export declare function TimeStepToJSONTyped(value?: TimeStep | null, ignoreDiscriminator?: boolean): any;
