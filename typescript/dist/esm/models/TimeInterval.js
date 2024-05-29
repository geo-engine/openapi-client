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
    if (!('end' in value))
        return false;
    if (!('start' in value))
        return false;
    return true;
}
export function TimeIntervalFromJSON(json) {
    return TimeIntervalFromJSONTyped(json, false);
}
export function TimeIntervalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'end': json['end'],
        'start': json['start'],
    };
}
export function TimeIntervalToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'end': value['end'],
        'start': value['start'],
    };
}
