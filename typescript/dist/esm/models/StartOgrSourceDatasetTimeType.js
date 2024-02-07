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
import { OgrSourceDurationSpecFromJSON, OgrSourceDurationSpecToJSON, } from './OgrSourceDurationSpec';
import { OgrSourceTimeFormatFromJSON, OgrSourceTimeFormatToJSON, } from './OgrSourceTimeFormat';
/**
 * @export
 */
export const StartOgrSourceDatasetTimeTypeTypeEnum = {
    Start: 'start'
};
/**
 * Check if a given object implements the StartOgrSourceDatasetTimeType interface.
 */
export function instanceOfStartOgrSourceDatasetTimeType(value) {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "startField" in value;
    isInstance = isInstance && "startFormat" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function StartOgrSourceDatasetTimeTypeFromJSON(json) {
    return StartOgrSourceDatasetTimeTypeFromJSONTyped(json, false);
}
export function StartOgrSourceDatasetTimeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'duration': OgrSourceDurationSpecFromJSON(json['duration']),
        'startField': json['startField'],
        'startFormat': OgrSourceTimeFormatFromJSON(json['startFormat']),
        'type': json['type'],
    };
}
export function StartOgrSourceDatasetTimeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'duration': OgrSourceDurationSpecToJSON(value.duration),
        'startField': value.startField,
        'startFormat': OgrSourceTimeFormatToJSON(value.startFormat),
        'type': value.type,
    };
}
