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
 * Check if a given object implements the ProjectVersion interface.
 */
export function instanceOfProjectVersion(value) {
    let isInstance = true;
    isInstance = isInstance && "changed" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
export function ProjectVersionFromJSON(json) {
    return ProjectVersionFromJSONTyped(json, false);
}
export function ProjectVersionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'changed': (new Date(json['changed'])),
        'id': json['id'],
    };
}
export function ProjectVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'changed': (value.changed.toISOString()),
        'id': value.id,
    };
}
