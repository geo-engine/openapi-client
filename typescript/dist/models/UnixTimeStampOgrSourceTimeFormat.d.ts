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
import type { UnixTimeStampType } from './UnixTimeStampType';
/**
 *
 * @export
 * @interface UnixTimeStampOgrSourceTimeFormat
 */
export interface UnixTimeStampOgrSourceTimeFormat {
    /**
     *
     * @type {string}
     * @memberof UnixTimeStampOgrSourceTimeFormat
     */
    format: UnixTimeStampOgrSourceTimeFormatFormatEnum;
    /**
     *
     * @type {UnixTimeStampType}
     * @memberof UnixTimeStampOgrSourceTimeFormat
     */
    timestampType: UnixTimeStampType;
}
/**
 * @export
 */
export declare const UnixTimeStampOgrSourceTimeFormatFormatEnum: {
    readonly UnixTimeStamp: "unixTimeStamp";
};
export type UnixTimeStampOgrSourceTimeFormatFormatEnum = typeof UnixTimeStampOgrSourceTimeFormatFormatEnum[keyof typeof UnixTimeStampOgrSourceTimeFormatFormatEnum];
/**
 * Check if a given object implements the UnixTimeStampOgrSourceTimeFormat interface.
 */
export declare function instanceOfUnixTimeStampOgrSourceTimeFormat(value: object): boolean;
export declare function UnixTimeStampOgrSourceTimeFormatFromJSON(json: any): UnixTimeStampOgrSourceTimeFormat;
export declare function UnixTimeStampOgrSourceTimeFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnixTimeStampOgrSourceTimeFormat;
export declare function UnixTimeStampOgrSourceTimeFormatToJSON(value?: UnixTimeStampOgrSourceTimeFormat | null): any;
