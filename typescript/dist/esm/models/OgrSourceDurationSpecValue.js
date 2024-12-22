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
import { TimeGranularityFromJSON, TimeGranularityToJSON, } from './TimeGranularity';
/**
 * @export
 */
export const OgrSourceDurationSpecValueTypeEnum = {
    Value: 'value'
};
/**
 * Check if a given object implements the OgrSourceDurationSpecValue interface.
 */
export function instanceOfOgrSourceDurationSpecValue(value) {
    let isInstance = true;
    isInstance = isInstance && "granularity" in value;
    isInstance = isInstance && "step" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function OgrSourceDurationSpecValueFromJSON(json) {
    return OgrSourceDurationSpecValueFromJSONTyped(json, false);
}
export function OgrSourceDurationSpecValueFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'granularity': TimeGranularityFromJSON(json['granularity']),
        'step': json['step'],
        'type': json['type'],
    };
}
export function OgrSourceDurationSpecValueToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'granularity': TimeGranularityToJSON(value.granularity),
        'step': value.step,
        'type': value.type,
    };
}
