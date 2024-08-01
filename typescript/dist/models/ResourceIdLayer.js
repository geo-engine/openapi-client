"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceIdLayerToJSON = exports.ResourceIdLayerFromJSONTyped = exports.ResourceIdLayerFromJSON = exports.instanceOfResourceIdLayer = exports.ResourceIdLayerTypeEnum = void 0;
/**
 * @export
 */
exports.ResourceIdLayerTypeEnum = {
    Layer: 'Layer',
    LayerCollection: 'LayerCollection',
    Project: 'Project',
    DatasetId: 'DatasetId',
    ModelId: 'ModelId'
};
/**
 * Check if a given object implements the ResourceIdLayer interface.
 */
function instanceOfResourceIdLayer(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfResourceIdLayer = instanceOfResourceIdLayer;
function ResourceIdLayerFromJSON(json) {
    return ResourceIdLayerFromJSONTyped(json, false);
}
exports.ResourceIdLayerFromJSON = ResourceIdLayerFromJSON;
function ResourceIdLayerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
exports.ResourceIdLayerFromJSONTyped = ResourceIdLayerFromJSONTyped;
function ResourceIdLayerToJSON(value) {
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
exports.ResourceIdLayerToJSON = ResourceIdLayerToJSON;
