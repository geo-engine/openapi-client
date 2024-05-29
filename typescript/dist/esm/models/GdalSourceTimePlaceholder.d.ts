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
import type { TimeReference } from './TimeReference';
/**
 *
 * @export
 * @interface GdalSourceTimePlaceholder
 */
export interface GdalSourceTimePlaceholder {
    /**
     *
     * @type {DateTimeParseFormat}
     * @memberof GdalSourceTimePlaceholder
     */
    format: DateTimeParseFormat;
    /**
     *
     * @type {TimeReference}
     * @memberof GdalSourceTimePlaceholder
     */
    reference: TimeReference;
}
/**
 * Check if a given object implements the GdalSourceTimePlaceholder interface.
 */
export declare function instanceOfGdalSourceTimePlaceholder(value: object): boolean;
export declare function GdalSourceTimePlaceholderFromJSON(json: any): GdalSourceTimePlaceholder;
export declare function GdalSourceTimePlaceholderFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalSourceTimePlaceholder;
export declare function GdalSourceTimePlaceholderToJSON(value?: GdalSourceTimePlaceholder | null): any;
