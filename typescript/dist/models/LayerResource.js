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
exports.LayerResourceTypeEnum = void 0;
exports.instanceOfLayerResource = instanceOfLayerResource;
exports.LayerResourceFromJSON = LayerResourceFromJSON;
exports.LayerResourceFromJSONTyped = LayerResourceFromJSONTyped;
exports.LayerResourceToJSON = LayerResourceToJSON;
exports.LayerResourceToJSONTyped = LayerResourceToJSONTyped;
/**
 * @export
 */
exports.LayerResourceTypeEnum = {
    Layer: 'layer'
};
/**
 * Check if a given object implements the LayerResource interface.
 */
function instanceOfLayerResource(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function LayerResourceFromJSON(json) {
    return LayerResourceFromJSONTyped(json, false);
}
function LayerResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
function LayerResourceToJSON(json) {
    return LayerResourceToJSONTyped(json, false);
}
function LayerResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
