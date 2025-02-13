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
import type { OgrSourceDurationSpec } from './OgrSourceDurationSpec';
/**
 *
 * @export
 * @interface OgrSourceDatasetTimeTypeStart
 */
export interface OgrSourceDatasetTimeTypeStart {
    /**
     *
     * @type {OgrSourceDurationSpec}
     * @memberof OgrSourceDatasetTimeTypeStart
     */
    duration: OgrSourceDurationSpec;
    /**
     *
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStart
     */
    startField: string;
    /**
     *
     * @type {OgrSourceTimeFormat}
     * @memberof OgrSourceDatasetTimeTypeStart
     */
    startFormat: OgrSourceTimeFormat;
    /**
     *
     * @type {string}
     * @memberof OgrSourceDatasetTimeTypeStart
     */
    type: OgrSourceDatasetTimeTypeStartTypeEnum;
}
/**
 * @export
 */
export declare const OgrSourceDatasetTimeTypeStartTypeEnum: {
    readonly Start: "start";
};
export type OgrSourceDatasetTimeTypeStartTypeEnum = typeof OgrSourceDatasetTimeTypeStartTypeEnum[keyof typeof OgrSourceDatasetTimeTypeStartTypeEnum];
/**
 * Check if a given object implements the OgrSourceDatasetTimeTypeStart interface.
 */
export declare function instanceOfOgrSourceDatasetTimeTypeStart(value: object): value is OgrSourceDatasetTimeTypeStart;
export declare function OgrSourceDatasetTimeTypeStartFromJSON(json: any): OgrSourceDatasetTimeTypeStart;
export declare function OgrSourceDatasetTimeTypeStartFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDatasetTimeTypeStart;
export declare function OgrSourceDatasetTimeTypeStartToJSON(json: any): OgrSourceDatasetTimeTypeStart;
export declare function OgrSourceDatasetTimeTypeStartToJSONTyped(value?: OgrSourceDatasetTimeTypeStart | null, ignoreDiscriminator?: boolean): any;
