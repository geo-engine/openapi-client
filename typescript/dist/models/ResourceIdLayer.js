"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceIdLayerTypeEnum = void 0;
exports.instanceOfResourceIdLayer = instanceOfResourceIdLayer;
exports.ResourceIdLayerFromJSON = ResourceIdLayerFromJSON;
exports.ResourceIdLayerFromJSONTyped = ResourceIdLayerFromJSONTyped;
exports.ResourceIdLayerToJSON = ResourceIdLayerToJSON;
exports.ResourceIdLayerToJSONTyped = ResourceIdLayerToJSONTyped;
/**
 * @export
 */
exports.ResourceIdLayerTypeEnum = {
    Layer: 'Layer'
};
/**
 * Check if a given object implements the ResourceIdLayer interface.
 */
function instanceOfResourceIdLayer(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function ResourceIdLayerFromJSON(json) {
    return ResourceIdLayerFromJSONTyped(json, false);
}
function ResourceIdLayerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
function ResourceIdLayerToJSON(json) {
    return ResourceIdLayerToJSONTyped(json, false);
}
function ResourceIdLayerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
