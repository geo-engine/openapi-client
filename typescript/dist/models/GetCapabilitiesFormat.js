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
exports.GetCapabilitiesFormatToJSON = exports.GetCapabilitiesFormatFromJSONTyped = exports.GetCapabilitiesFormatFromJSON = exports.GetCapabilitiesFormat = void 0;
/**
 *
 * @export
 */
exports.GetCapabilitiesFormat = {
    TextXml: 'text/xml'
};
function GetCapabilitiesFormatFromJSON(json) {
    return GetCapabilitiesFormatFromJSONTyped(json, false);
}
exports.GetCapabilitiesFormatFromJSON = GetCapabilitiesFormatFromJSON;
function GetCapabilitiesFormatFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.GetCapabilitiesFormatFromJSONTyped = GetCapabilitiesFormatFromJSONTyped;
function GetCapabilitiesFormatToJSON(value) {
    return value;
}
exports.GetCapabilitiesFormatToJSON = GetCapabilitiesFormatToJSON;
