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
 * Stores time intervals in ms in close-open semantic [start, end)
 * @export
 * @interface TimeInterval
 */
export interface TimeInterval {
    /**
     *
     * @type {number}
     * @memberof TimeInterval
     */
    end: number;
    /**
     *
     * @type {number}
     * @memberof TimeInterval
     */
    start: number;
}
/**
 * Check if a given object implements the TimeInterval interface.
 */
export declare function instanceOfTimeInterval(value: object): value is TimeInterval;
export declare function TimeIntervalFromJSON(json: any): TimeInterval;
export declare function TimeIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeInterval;
export declare function TimeIntervalToJSON(json: any): TimeInterval;
export declare function TimeIntervalToJSONTyped(value?: TimeInterval | null, ignoreDiscriminator?: boolean): any;
