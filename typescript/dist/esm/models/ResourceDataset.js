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
export const ResourceDatasetTypeEnum = {
    Dataset: 'dataset'
};
/**
 * Check if a given object implements the ResourceDataset interface.
 */
export function instanceOfResourceDataset(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function ResourceDatasetFromJSON(json) {
    return ResourceDatasetFromJSONTyped(json, false);
}
export function ResourceDatasetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
export function ResourceDatasetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': value.type,
    };
}
