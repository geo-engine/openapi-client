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
 * @interface OgrSourceDurationSpecZero
 */
export interface OgrSourceDurationSpecZero {
    /**
     *
     * @type {string}
     * @memberof OgrSourceDurationSpecZero
     */
    type: OgrSourceDurationSpecZeroTypeEnum;
}
/**
 * @export
 */
export declare const OgrSourceDurationSpecZeroTypeEnum: {
    readonly Zero: "zero";
};
export type OgrSourceDurationSpecZeroTypeEnum = typeof OgrSourceDurationSpecZeroTypeEnum[keyof typeof OgrSourceDurationSpecZeroTypeEnum];
/**
 * Check if a given object implements the OgrSourceDurationSpecZero interface.
 */
export declare function instanceOfOgrSourceDurationSpecZero(value: object): value is OgrSourceDurationSpecZero;
export declare function OgrSourceDurationSpecZeroFromJSON(json: any): OgrSourceDurationSpecZero;
export declare function OgrSourceDurationSpecZeroFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDurationSpecZero;
export declare function OgrSourceDurationSpecZeroToJSON(json: any): OgrSourceDurationSpecZero;
export declare function OgrSourceDurationSpecZeroToJSONTyped(value?: OgrSourceDurationSpecZero | null, ignoreDiscriminator?: boolean): any;
