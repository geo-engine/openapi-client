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
export const ExternalDataIdTypeEnum = {
    External: 'external'
};
/**
 * Check if a given object implements the ExternalDataId interface.
 */
export function instanceOfExternalDataId(value) {
    if (!('layerId' in value))
        return false;
    if (!('providerId' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function ExternalDataIdFromJSON(json) {
    return ExternalDataIdFromJSONTyped(json, false);
}
export function ExternalDataIdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'layerId': json['layerId'],
        'providerId': json['providerId'],
        'type': json['type'],
    };
}
export function ExternalDataIdToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'layerId': value['layerId'],
        'providerId': value['providerId'],
        'type': value['type'],
    };
}
