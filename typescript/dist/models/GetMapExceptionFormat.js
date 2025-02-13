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
exports.GetMapExceptionFormat = void 0;
exports.instanceOfGetMapExceptionFormat = instanceOfGetMapExceptionFormat;
exports.GetMapExceptionFormatFromJSON = GetMapExceptionFormatFromJSON;
exports.GetMapExceptionFormatFromJSONTyped = GetMapExceptionFormatFromJSONTyped;
exports.GetMapExceptionFormatToJSON = GetMapExceptionFormatToJSON;
exports.GetMapExceptionFormatToJSONTyped = GetMapExceptionFormatToJSONTyped;
/**
 *
 * @export
 */
exports.GetMapExceptionFormat = {
    Xml: 'XML',
    Json: 'JSON'
};
function instanceOfGetMapExceptionFormat(value) {
    for (const key in exports.GetMapExceptionFormat) {
        if (Object.prototype.hasOwnProperty.call(exports.GetMapExceptionFormat, key)) {
            if (exports.GetMapExceptionFormat[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function GetMapExceptionFormatFromJSON(json) {
    return GetMapExceptionFormatFromJSONTyped(json, false);
}
function GetMapExceptionFormatFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function GetMapExceptionFormatToJSON(value) {
    return value;
}
function GetMapExceptionFormatToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
