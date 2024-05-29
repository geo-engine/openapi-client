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
exports.LayerVisibilityToJSON = exports.LayerVisibilityFromJSONTyped = exports.LayerVisibilityFromJSON = exports.instanceOfLayerVisibility = void 0;
/**
 * Check if a given object implements the LayerVisibility interface.
 */
function instanceOfLayerVisibility(value) {
    if (!('data' in value))
        return false;
    if (!('legend' in value))
        return false;
    return true;
}
exports.instanceOfLayerVisibility = instanceOfLayerVisibility;
function LayerVisibilityFromJSON(json) {
    return LayerVisibilityFromJSONTyped(json, false);
}
exports.LayerVisibilityFromJSON = LayerVisibilityFromJSON;
function LayerVisibilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'],
        'legend': json['legend'],
    };
}
exports.LayerVisibilityFromJSONTyped = LayerVisibilityFromJSONTyped;
function LayerVisibilityToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
        'legend': value['legend'],
    };
}
exports.LayerVisibilityToJSON = LayerVisibilityToJSON;
