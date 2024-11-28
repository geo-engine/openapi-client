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
 * Check if a given object implements the DataUsageSummary interface.
 */
export function instanceOfDataUsageSummary(value) {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "dataset" in value;
    isInstance = isInstance && "timestamp" in value;
    return isInstance;
}
export function DataUsageSummaryFromJSON(json) {
    return DataUsageSummaryFromJSONTyped(json, false);
}
export function DataUsageSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'dataset': json['dataset'],
        'timestamp': (new Date(json['timestamp'])),
    };
}
export function DataUsageSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'dataset': value.dataset,
        'timestamp': (value.timestamp.toISOString()),
    };
}
