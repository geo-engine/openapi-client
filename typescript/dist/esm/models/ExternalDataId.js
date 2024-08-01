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
    let isInstance = true;
    isInstance = isInstance && "layerId" in value;
    isInstance = isInstance && "providerId" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function ExternalDataIdFromJSON(json) {
    return ExternalDataIdFromJSONTyped(json, false);
}
export function ExternalDataIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'layerId': json['layerId'],
        'providerId': json['providerId'],
        'type': json['type'],
    };
}
export function ExternalDataIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'layerId': value.layerId,
        'providerId': value.providerId,
        'type': value.type,
    };
}
