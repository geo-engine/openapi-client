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
 * Check if a given object implements the TimeInterval interface.
 */
export function instanceOfTimeInterval(value) {
    let isInstance = true;
    isInstance = isInstance && "end" in value;
    isInstance = isInstance && "start" in value;
    return isInstance;
}
export function TimeIntervalFromJSON(json) {
    return TimeIntervalFromJSONTyped(json, false);
}
export function TimeIntervalFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'end': json['end'],
        'start': json['start'],
    };
}
export function TimeIntervalToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'end': value.end,
        'start': value.start,
    };
}
