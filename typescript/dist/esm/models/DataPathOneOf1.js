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
 * Check if a given object implements the DataPathOneOf1 interface.
 */
export function instanceOfDataPathOneOf1(value) {
    let isInstance = true;
    isInstance = isInstance && "upload" in value;
    return isInstance;
}
export function DataPathOneOf1FromJSON(json) {
    return DataPathOneOf1FromJSONTyped(json, false);
}
export function DataPathOneOf1FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'upload': json['upload'],
    };
}
export function DataPathOneOf1ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'upload': value.upload,
    };
}