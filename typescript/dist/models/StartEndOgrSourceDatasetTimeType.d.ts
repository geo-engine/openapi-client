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
import type { OgrSourceTimeFormat } from './OgrSourceTimeFormat';
/**
 *
 * @export
 * @interface StartEndOgrSourceDatasetTimeType
 */
export interface StartEndOgrSourceDatasetTimeType {
    /**
     *
     * @type {string}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    endField: string;
    /**
     *
     * @type {OgrSourceTimeFormat}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    endFormat: OgrSourceTimeFormat;
    /**
     *
     * @type {string}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    startField: string;
    /**
     *
     * @type {OgrSourceTimeFormat}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    startFormat: OgrSourceTimeFormat;
    /**
     *
     * @type {string}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    type: StartEndOgrSourceDatasetTimeTypeTypeEnum;
}
/**
 * @export
 */
export declare const StartEndOgrSourceDatasetTimeTypeTypeEnum: {
    readonly StartEnd: "startEnd";
};
export type StartEndOgrSourceDatasetTimeTypeTypeEnum = typeof StartEndOgrSourceDatasetTimeTypeTypeEnum[keyof typeof StartEndOgrSourceDatasetTimeTypeTypeEnum];
/**
 * Check if a given object implements the StartEndOgrSourceDatasetTimeType interface.
 */
export declare function instanceOfStartEndOgrSourceDatasetTimeType(value: object): boolean;
export declare function StartEndOgrSourceDatasetTimeTypeFromJSON(json: any): StartEndOgrSourceDatasetTimeType;
export declare function StartEndOgrSourceDatasetTimeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartEndOgrSourceDatasetTimeType;
export declare function StartEndOgrSourceDatasetTimeTypeToJSON(value?: StartEndOgrSourceDatasetTimeType | null): any;
