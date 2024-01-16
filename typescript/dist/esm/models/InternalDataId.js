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
 * @export
 */
export const InternalDataIdTypeEnum = {
    Internal: 'internal',
    External: 'external'
};
/**
 * Check if a given object implements the InternalDataId interface.
 */
export function instanceOfInternalDataId(value) {
    let isInstance = true;
    isInstance = isInstance && "datasetId" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function InternalDataIdFromJSON(json) {
    return InternalDataIdFromJSONTyped(json, false);
}
export function InternalDataIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'datasetId': json['datasetId'],
        'type': json['type'],
    };
}
export function InternalDataIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'datasetId': value.datasetId,
        'type': value.type,
    };
}
