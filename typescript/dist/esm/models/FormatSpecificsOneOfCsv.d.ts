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
import type { CsvHeader } from './CsvHeader';
/**
 *
 * @export
 * @interface FormatSpecificsOneOfCsv
 */
export interface FormatSpecificsOneOfCsv {
    /**
     *
     * @type {CsvHeader}
     * @memberof FormatSpecificsOneOfCsv
     */
    header: CsvHeader;
}
/**
 * Check if a given object implements the FormatSpecificsOneOfCsv interface.
 */
export declare function instanceOfFormatSpecificsOneOfCsv(value: object): boolean;
export declare function FormatSpecificsOneOfCsvFromJSON(json: any): FormatSpecificsOneOfCsv;
export declare function FormatSpecificsOneOfCsvFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatSpecificsOneOfCsv;
export declare function FormatSpecificsOneOfCsvToJSON(value?: FormatSpecificsOneOfCsv | null): any;
