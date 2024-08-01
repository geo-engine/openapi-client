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
 * Check if a given object implements the ProviderLayerId interface.
 */
export function instanceOfProviderLayerId(value) {
    let isInstance = true;
    isInstance = isInstance && "layerId" in value;
    isInstance = isInstance && "providerId" in value;
    return isInstance;
}
export function ProviderLayerIdFromJSON(json) {
    return ProviderLayerIdFromJSONTyped(json, false);
}
export function ProviderLayerIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'layerId': json['layerId'],
        'providerId': json['providerId'],
    };
}
export function ProviderLayerIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'layerId': value.layerId,
        'providerId': value.providerId,
    };
}
