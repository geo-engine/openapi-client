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
/**
 * An object that composes the date and a timestamp with time zone.
 * @export
 * @interface DateTime
 */
export interface DateTime {
    /**
     *
     * @type {Date}
     * @memberof DateTime
     */
    datetime: Date;
}
/**
 * Check if a given object implements the DateTime interface.
 */
export declare function instanceOfDateTime(value: object): value is DateTime;
export declare function DateTimeFromJSON(json: any): DateTime;
export declare function DateTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateTime;
export declare function DateTimeToJSON(value?: DateTime | null): any;
