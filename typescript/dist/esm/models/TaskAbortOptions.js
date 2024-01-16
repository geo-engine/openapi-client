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
import { exists } from '../runtime';
/**
 * Check if a given object implements the TaskAbortOptions interface.
 */
export function instanceOfTaskAbortOptions(value) {
    let isInstance = true;
    return isInstance;
}
export function TaskAbortOptionsFromJSON(json) {
    return TaskAbortOptionsFromJSONTyped(json, false);
}
export function TaskAbortOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'force': !exists(json, 'force') ? undefined : json['force'],
    };
}
export function TaskAbortOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'force': value.force,
    };
}
