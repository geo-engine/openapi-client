/* tslint:disable */
/* eslint-disable */
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
 * 
 * @export
 */
export const CsvHeader = {
    Yes: 'yes',
    No: 'no',
    Auto: 'auto'
} as const;
export type CsvHeader = typeof CsvHeader[keyof typeof CsvHeader];


export function CsvHeaderFromJSON(json: any): CsvHeader {
    return CsvHeaderFromJSONTyped(json, false);
}

export function CsvHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): CsvHeader {
    return json as CsvHeader;
}

export function CsvHeaderToJSON(value?: CsvHeader | null): any {
    return value as any;
}

