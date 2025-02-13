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
 */
export declare const UsageSummaryGranularity: {
    readonly Minutes: "minutes";
    readonly Hours: "hours";
    readonly Days: "days";
    readonly Months: "months";
    readonly Years: "years";
};
export type UsageSummaryGranularity = typeof UsageSummaryGranularity[keyof typeof UsageSummaryGranularity];
export declare function instanceOfUsageSummaryGranularity(value: any): boolean;
export declare function UsageSummaryGranularityFromJSON(json: any): UsageSummaryGranularity;
export declare function UsageSummaryGranularityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageSummaryGranularity;
export declare function UsageSummaryGranularityToJSON(value?: UsageSummaryGranularity | null): any;
export declare function UsageSummaryGranularityToJSONTyped(value: any, ignoreDiscriminator: boolean): UsageSummaryGranularity;
