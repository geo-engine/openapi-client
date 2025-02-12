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
 * @interface DataUsageSummary
 */
export interface DataUsageSummary {
    /**
     *
     * @type {number}
     * @memberof DataUsageSummary
     */
    count: number;
    /**
     *
     * @type {string}
     * @memberof DataUsageSummary
     */
    data: string;
    /**
     *
     * @type {Date}
     * @memberof DataUsageSummary
     */
    timestamp: Date;
}
/**
 * Check if a given object implements the DataUsageSummary interface.
 */
export declare function instanceOfDataUsageSummary(value: object): value is DataUsageSummary;
export declare function DataUsageSummaryFromJSON(json: any): DataUsageSummary;
export declare function DataUsageSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataUsageSummary;
export declare function DataUsageSummaryToJSON(json: any): DataUsageSummary;
export declare function DataUsageSummaryToJSONTyped(value?: DataUsageSummary | null, ignoreDiscriminator?: boolean): any;
