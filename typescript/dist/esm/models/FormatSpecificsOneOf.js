/* tslint:disable */
/* eslint-disable */
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
import { FormatSpecificsOneOfCsvFromJSON, FormatSpecificsOneOfCsvToJSON, } from './FormatSpecificsOneOfCsv';
/**
 * Check if a given object implements the FormatSpecificsOneOf interface.
 */
export function instanceOfFormatSpecificsOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "csv" in value;
    return isInstance;
}
export function FormatSpecificsOneOfFromJSON(json) {
    return FormatSpecificsOneOfFromJSONTyped(json, false);
}
export function FormatSpecificsOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'csv': FormatSpecificsOneOfCsvFromJSON(json['csv']),
    };
}
export function FormatSpecificsOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'csv': FormatSpecificsOneOfCsvToJSON(value.csv),
    };
}
