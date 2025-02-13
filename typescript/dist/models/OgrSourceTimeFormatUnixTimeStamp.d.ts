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
import type { UnixTimeStampType } from './UnixTimeStampType';
/**
 *
 * @export
 * @interface OgrSourceTimeFormatUnixTimeStamp
 */
export interface OgrSourceTimeFormatUnixTimeStamp {
    /**
     *
     * @type {string}
     * @memberof OgrSourceTimeFormatUnixTimeStamp
     */
    format: OgrSourceTimeFormatUnixTimeStampFormatEnum;
    /**
     *
     * @type {UnixTimeStampType}
     * @memberof OgrSourceTimeFormatUnixTimeStamp
     */
    timestampType: UnixTimeStampType;
}
/**
 * @export
 */
export declare const OgrSourceTimeFormatUnixTimeStampFormatEnum: {
    readonly UnixTimeStamp: "unixTimeStamp";
};
export type OgrSourceTimeFormatUnixTimeStampFormatEnum = typeof OgrSourceTimeFormatUnixTimeStampFormatEnum[keyof typeof OgrSourceTimeFormatUnixTimeStampFormatEnum];
/**
 * Check if a given object implements the OgrSourceTimeFormatUnixTimeStamp interface.
 */
export declare function instanceOfOgrSourceTimeFormatUnixTimeStamp(value: object): value is OgrSourceTimeFormatUnixTimeStamp;
export declare function OgrSourceTimeFormatUnixTimeStampFromJSON(json: any): OgrSourceTimeFormatUnixTimeStamp;
export declare function OgrSourceTimeFormatUnixTimeStampFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceTimeFormatUnixTimeStamp;
export declare function OgrSourceTimeFormatUnixTimeStampToJSON(json: any): OgrSourceTimeFormatUnixTimeStamp;
export declare function OgrSourceTimeFormatUnixTimeStampToJSONTyped(value?: OgrSourceTimeFormatUnixTimeStamp | null, ignoreDiscriminator?: boolean): any;
