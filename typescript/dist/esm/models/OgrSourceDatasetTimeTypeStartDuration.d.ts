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
import type { OgrSourceTimeFormat } from './OgrSourceTimeFormat';
/**
 *
 * @export
 * @interface OgrSourceDatasetTimeTypeStartDuration
 */
export interface OgrSourceDatasetTimeTypeStartDuration {
    /**
     *
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    durationField: string;
    /**
     *
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    startField: string;
    /**
     *
     * @type {OgrSourceTimeFormat}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    startFormat: OgrSourceTimeFormat;
    /**
     *
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStartDuration
     */
    type: OgrSourceDatasetTimeTypeStartDurationTypeEnum;
}
/**
 * @export
 */
export declare const OgrSourceDatasetTimeTypeStartDurationTypeEnum: {
    readonly Startduration: "start+duration";
};
export type OgrSourceDatasetTimeTypeStartDurationTypeEnum = typeof OgrSourceDatasetTimeTypeStartDurationTypeEnum[keyof typeof OgrSourceDatasetTimeTypeStartDurationTypeEnum];
/**
 * Check if a given object implements the OgrSourceDatasetTimeTypeStartDuration interface.
 */
export declare function instanceOfOgrSourceDatasetTimeTypeStartDuration(value: object): value is OgrSourceDatasetTimeTypeStartDuration;
export declare function OgrSourceDatasetTimeTypeStartDurationFromJSON(json: any): OgrSourceDatasetTimeTypeStartDuration;
export declare function OgrSourceDatasetTimeTypeStartDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDatasetTimeTypeStartDuration;
export declare function OgrSourceDatasetTimeTypeStartDurationToJSON(json: any): OgrSourceDatasetTimeTypeStartDuration;
export declare function OgrSourceDatasetTimeTypeStartDurationToJSONTyped(value?: OgrSourceDatasetTimeTypeStartDuration | null, ignoreDiscriminator?: boolean): any;
