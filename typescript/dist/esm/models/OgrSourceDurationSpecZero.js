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
 * @export
 */
export const OgrSourceDurationSpecZeroTypeEnum = {
    Zero: 'zero'
};
/**
 * Check if a given object implements the OgrSourceDurationSpecZero interface.
 */
export function instanceOfOgrSourceDurationSpecZero(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function OgrSourceDurationSpecZeroFromJSON(json) {
    return OgrSourceDurationSpecZeroFromJSONTyped(json, false);
}
export function OgrSourceDurationSpecZeroFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
export function OgrSourceDurationSpecZeroToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
