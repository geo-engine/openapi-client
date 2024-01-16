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
import type { TimeGranularity } from './TimeGranularity';
/**
 *
 * @export
 * @interface TimeStepWithType
 */
export interface TimeStepWithType {
    /**
     *
     * @type {TimeGranularity}
     * @memberof TimeStepWithType
     */
    granularity: TimeGranularity;
    /**
     *
     * @type {number}
     * @memberof TimeStepWithType
     */
    step: number;
    /**
     *
     * @type {string}
     * @memberof TimeStepWithType
     */
    type: TimeStepWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const TimeStepWithTypeTypeEnum: {
    readonly Value: "value";
};
export type TimeStepWithTypeTypeEnum = typeof TimeStepWithTypeTypeEnum[keyof typeof TimeStepWithTypeTypeEnum];
/**
 * Check if a given object implements the TimeStepWithType interface.
 */
export declare function instanceOfTimeStepWithType(value: object): boolean;
export declare function TimeStepWithTypeFromJSON(json: any): TimeStepWithType;
export declare function TimeStepWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeStepWithType;
export declare function TimeStepWithTypeToJSON(value?: TimeStepWithType | null): any;
