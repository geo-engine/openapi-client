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
exports.instanceOfWcsBoundingbox = instanceOfWcsBoundingbox;
exports.WcsBoundingboxFromJSON = WcsBoundingboxFromJSON;
exports.WcsBoundingboxFromJSONTyped = WcsBoundingboxFromJSONTyped;
exports.WcsBoundingboxToJSON = WcsBoundingboxToJSON;
exports.WcsBoundingboxToJSONTyped = WcsBoundingboxToJSONTyped;
/**
 * Check if a given object implements the WcsBoundingbox interface.
 */
function instanceOfWcsBoundingbox(value) {
    if (!('bbox' in value) || value['bbox'] === undefined)
        return false;
    return true;
}
function WcsBoundingboxFromJSON(json) {
    return WcsBoundingboxFromJSONTyped(json, false);
}
function WcsBoundingboxFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bbox': json['bbox'],
        'spatialReference': json['spatial_reference'] == null ? undefined : json['spatial_reference'],
    };
}
function WcsBoundingboxToJSON(json) {
    return WcsBoundingboxToJSONTyped(json, false);
}
function WcsBoundingboxToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bbox': value['bbox'],
        'spatial_reference': value['spatialReference'],
    };
}
