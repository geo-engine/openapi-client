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
 * @export
 */
export const InfiniteOgrSourceDurationSpecTypeEnum = {
    Infinite: 'infinite'
};
/**
 * Check if a given object implements the InfiniteOgrSourceDurationSpec interface.
 */
export function instanceOfInfiniteOgrSourceDurationSpec(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function InfiniteOgrSourceDurationSpecFromJSON(json) {
    return InfiniteOgrSourceDurationSpecFromJSONTyped(json, false);
}
export function InfiniteOgrSourceDurationSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
export function InfiniteOgrSourceDurationSpecToJSON(value) {
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
