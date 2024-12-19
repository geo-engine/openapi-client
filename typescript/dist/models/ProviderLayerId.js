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
exports.ProviderLayerIdToJSON = exports.ProviderLayerIdFromJSONTyped = exports.ProviderLayerIdFromJSON = exports.instanceOfProviderLayerId = void 0;
/**
 * Check if a given object implements the ProviderLayerId interface.
 */
function instanceOfProviderLayerId(value) {
    let isInstance = true;
    isInstance = isInstance && "layerId" in value;
    isInstance = isInstance && "providerId" in value;
    return isInstance;
}
exports.instanceOfProviderLayerId = instanceOfProviderLayerId;
function ProviderLayerIdFromJSON(json) {
    return ProviderLayerIdFromJSONTyped(json, false);
}
exports.ProviderLayerIdFromJSON = ProviderLayerIdFromJSON;
function ProviderLayerIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'layerId': json['layerId'],
        'providerId': json['providerId'],
    };
}
exports.ProviderLayerIdFromJSONTyped = ProviderLayerIdFromJSONTyped;
function ProviderLayerIdToJSON(value) {
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
exports.ProviderLayerIdToJSON = ProviderLayerIdToJSON;
