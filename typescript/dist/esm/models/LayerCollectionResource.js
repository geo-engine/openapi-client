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
 * @export
 */
export const LayerCollectionResourceTypeEnum = {
    LayerCollection: 'layerCollection'
};
/**
 * Check if a given object implements the LayerCollectionResource interface.
 */
export function instanceOfLayerCollectionResource(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
export function LayerCollectionResourceFromJSON(json) {
    return LayerCollectionResourceFromJSONTyped(json, false);
}
export function LayerCollectionResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
export function LayerCollectionResourceToJSON(json) {
    return LayerCollectionResourceToJSONTyped(json, false);
}
export function LayerCollectionResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
