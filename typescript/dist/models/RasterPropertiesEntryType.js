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
exports.RasterPropertiesEntryTypeToJSON = exports.RasterPropertiesEntryTypeFromJSONTyped = exports.RasterPropertiesEntryTypeFromJSON = exports.RasterPropertiesEntryType = void 0;
/**
 *
 * @export
 */
exports.RasterPropertiesEntryType = {
    Number: 'Number',
    String: 'String'
};
function RasterPropertiesEntryTypeFromJSON(json) {
    return RasterPropertiesEntryTypeFromJSONTyped(json, false);
}
exports.RasterPropertiesEntryTypeFromJSON = RasterPropertiesEntryTypeFromJSON;
function RasterPropertiesEntryTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RasterPropertiesEntryTypeFromJSONTyped = RasterPropertiesEntryTypeFromJSONTyped;
function RasterPropertiesEntryTypeToJSON(value) {
    return value;
}
exports.RasterPropertiesEntryTypeToJSON = RasterPropertiesEntryTypeToJSON;