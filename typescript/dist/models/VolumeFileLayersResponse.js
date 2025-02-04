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
exports.VolumeFileLayersResponseToJSON = exports.VolumeFileLayersResponseFromJSONTyped = exports.VolumeFileLayersResponseFromJSON = exports.instanceOfVolumeFileLayersResponse = void 0;
/**
 * Check if a given object implements the VolumeFileLayersResponse interface.
 */
function instanceOfVolumeFileLayersResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "layers" in value;
    return isInstance;
}
exports.instanceOfVolumeFileLayersResponse = instanceOfVolumeFileLayersResponse;
function VolumeFileLayersResponseFromJSON(json) {
    return VolumeFileLayersResponseFromJSONTyped(json, false);
}
exports.VolumeFileLayersResponseFromJSON = VolumeFileLayersResponseFromJSON;
function VolumeFileLayersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'layers': json['layers'],
    };
}
exports.VolumeFileLayersResponseFromJSONTyped = VolumeFileLayersResponseFromJSONTyped;
function VolumeFileLayersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'layers': value.layers,
    };
}
exports.VolumeFileLayersResponseToJSON = VolumeFileLayersResponseToJSON;
