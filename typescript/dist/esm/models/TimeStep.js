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
import { TimeGranularityFromJSON, TimeGranularityToJSON, } from './TimeGranularity';
/**
 * Check if a given object implements the TimeStep interface.
 */
export function instanceOfTimeStep(value) {
    let isInstance = true;
    isInstance = isInstance && "granularity" in value;
    isInstance = isInstance && "step" in value;
    return isInstance;
}
export function TimeStepFromJSON(json) {
    return TimeStepFromJSONTyped(json, false);
}
export function TimeStepFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'granularity': TimeGranularityFromJSON(json['granularity']),
        'step': json['step'],
    };
}
export function TimeStepToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'granularity': TimeGranularityToJSON(value.granularity),
        'step': value.step,
    };
}
