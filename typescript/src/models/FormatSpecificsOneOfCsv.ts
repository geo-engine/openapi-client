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

import { exists, mapValues } from '../runtime';
import type { CsvHeader } from './CsvHeader';
import {
    CsvHeaderFromJSON,
    CsvHeaderFromJSONTyped,
    CsvHeaderToJSON,
} from './CsvHeader';

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
export function instanceOfFormatSpecificsOneOfCsv(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "header" in value;

    return isInstance;
}

export function FormatSpecificsOneOfCsvFromJSON(json: any): FormatSpecificsOneOfCsv {
    return FormatSpecificsOneOfCsvFromJSONTyped(json, false);
}

export function FormatSpecificsOneOfCsvFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatSpecificsOneOfCsv {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'header': CsvHeaderFromJSON(json['header']),
    };
}

export function FormatSpecificsOneOfCsvToJSON(value?: FormatSpecificsOneOfCsv | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'header': CsvHeaderToJSON(value.header),
    };
}

