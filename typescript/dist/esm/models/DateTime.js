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
/**
 * Check if a given object implements the DateTime interface.
 */
export function instanceOfDateTime(value) {
    let isInstance = true;
    isInstance = isInstance && "datetime" in value;
    return isInstance;
}
export function DateTimeFromJSON(json) {
    return DateTimeFromJSONTyped(json, false);
}
export function DateTimeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'datetime': (new Date(json['datetime'])),
    };
}
export function DateTimeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'datetime': (value.datetime.toISOString()),
    };
}
