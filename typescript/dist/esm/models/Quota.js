/* tslint:disable */
/* eslint-disable */
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
/**
 * Check if a given object implements the Quota interface.
 */
export function instanceOfQuota(value) {
    let isInstance = true;
    isInstance = isInstance && "available" in value;
    isInstance = isInstance && "used" in value;
    return isInstance;
}
export function QuotaFromJSON(json) {
    return QuotaFromJSONTyped(json, false);
}
export function QuotaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'available': json['available'],
        'used': json['used'],
    };
}
export function QuotaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'available': value.available,
        'used': value.used,
    };
}
