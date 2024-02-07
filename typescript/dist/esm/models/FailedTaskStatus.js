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
export const FailedTaskStatusStatusEnum = {
    Failed: 'failed'
};
/**
 * Check if a given object implements the FailedTaskStatus interface.
 */
export function instanceOfFailedTaskStatus(value) {
    let isInstance = true;
    isInstance = isInstance && "cleanUp" in value;
    isInstance = isInstance && "error" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
export function FailedTaskStatusFromJSON(json) {
    return FailedTaskStatusFromJSONTyped(json, false);
}
export function FailedTaskStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cleanUp': json['cleanUp'],
        'error': json['error'],
        'status': json['status'],
    };
}
export function FailedTaskStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cleanUp': value.cleanUp,
        'error': value.error,
        'status': value.status,
    };
}
