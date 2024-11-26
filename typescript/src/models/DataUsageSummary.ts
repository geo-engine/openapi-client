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

import { exists, mapValues } from '../runtime';
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
     * @type {number}
     * @memberof DataUsageSummary
     */
    month: number;
    /**
     * 
     * @type {number}
     * @memberof DataUsageSummary
     */
    year: number;
}

/**
 * Check if a given object implements the DataUsageSummary interface.
 */
export function instanceOfDataUsageSummary(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "month" in value;
    isInstance = isInstance && "year" in value;

    return isInstance;
}

export function DataUsageSummaryFromJSON(json: any): DataUsageSummary {
    return DataUsageSummaryFromJSONTyped(json, false);
}

export function DataUsageSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataUsageSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'data': json['data'],
        'month': json['month'],
        'year': json['year'],
    };
}

export function DataUsageSummaryToJSON(value?: DataUsageSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'data': value.data,
        'month': value.month,
        'year': value.year,
    };
}
