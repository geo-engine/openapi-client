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
export const ResourceIdLayerTypeEnum = {
    Layer: 'Layer',
    LayerCollection: 'LayerCollection',
    Project: 'Project',
    DatasetId: 'DatasetId'
};
/**
 * Check if a given object implements the ResourceIdLayer interface.
 */
export function instanceOfResourceIdLayer(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function ResourceIdLayerFromJSON(json) {
    return ResourceIdLayerFromJSONTyped(json, false);
}
export function ResourceIdLayerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
export function ResourceIdLayerToJSON(value) {
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
