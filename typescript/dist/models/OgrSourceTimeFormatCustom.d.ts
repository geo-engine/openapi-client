/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DateTimeParseFormat } from './DateTimeParseFormat';
/**
 *
 * @export
 * @interface OgrSourceTimeFormatCustom
 */
export interface OgrSourceTimeFormatCustom {
    /**
     *
     * @type {DateTimeParseFormat}
     * @memberof OgrSourceTimeFormatCustom
     */
    customFormat: DateTimeParseFormat;
    /**
     *
     * @type {string}
     * @memberof OgrSourceTimeFormatCustom
     */
    format: OgrSourceTimeFormatCustomFormatEnum;
}
/**
 * @export
 */
export declare const OgrSourceTimeFormatCustomFormatEnum: {
    readonly Custom: "custom";
};
export type OgrSourceTimeFormatCustomFormatEnum = typeof OgrSourceTimeFormatCustomFormatEnum[keyof typeof OgrSourceTimeFormatCustomFormatEnum];
/**
 * Check if a given object implements the OgrSourceTimeFormatCustom interface.
 */
export declare function instanceOfOgrSourceTimeFormatCustom(value: object): boolean;
export declare function OgrSourceTimeFormatCustomFromJSON(json: any): OgrSourceTimeFormatCustom;
export declare function OgrSourceTimeFormatCustomFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceTimeFormatCustom;
export declare function OgrSourceTimeFormatCustomToJSON(value?: OgrSourceTimeFormatCustom | null): any;
