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
 * A time granularity.
 * @export
 */
export declare const TimeGranularity: {
    readonly Millis: "millis";
    readonly Seconds: "seconds";
    readonly Minutes: "minutes";
    readonly Hours: "hours";
    readonly Days: "days";
    readonly Months: "months";
    readonly Years: "years";
};
export type TimeGranularity = typeof TimeGranularity[keyof typeof TimeGranularity];
export declare function instanceOfTimeGranularity(value: any): boolean;
export declare function TimeGranularityFromJSON(json: any): TimeGranularity;
export declare function TimeGranularityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeGranularity;
export declare function TimeGranularityToJSON(value?: TimeGranularity | null): any;
export declare function TimeGranularityToJSONTyped(value: any, ignoreDiscriminator: boolean): TimeGranularity;
