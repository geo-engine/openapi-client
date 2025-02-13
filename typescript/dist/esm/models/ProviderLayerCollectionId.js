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
 * Check if a given object implements the ProviderLayerCollectionId interface.
 */
export function instanceOfProviderLayerCollectionId(value) {
    if (!('collectionId' in value) || value['collectionId'] === undefined)
        return false;
    if (!('providerId' in value) || value['providerId'] === undefined)
        return false;
    return true;
}
export function ProviderLayerCollectionIdFromJSON(json) {
    return ProviderLayerCollectionIdFromJSONTyped(json, false);
}
export function ProviderLayerCollectionIdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'collectionId': json['collectionId'],
        'providerId': json['providerId'],
    };
}
export function ProviderLayerCollectionIdToJSON(json) {
    return ProviderLayerCollectionIdToJSONTyped(json, false);
}
export function ProviderLayerCollectionIdToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'collectionId': value['collectionId'],
        'providerId': value['providerId'],
    };
}
