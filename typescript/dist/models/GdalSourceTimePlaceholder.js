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
exports.instanceOfGdalSourceTimePlaceholder = instanceOfGdalSourceTimePlaceholder;
exports.GdalSourceTimePlaceholderFromJSON = GdalSourceTimePlaceholderFromJSON;
exports.GdalSourceTimePlaceholderFromJSONTyped = GdalSourceTimePlaceholderFromJSONTyped;
exports.GdalSourceTimePlaceholderToJSON = GdalSourceTimePlaceholderToJSON;
exports.GdalSourceTimePlaceholderToJSONTyped = GdalSourceTimePlaceholderToJSONTyped;
const TimeReference_1 = require("./TimeReference");
/**
 * Check if a given object implements the GdalSourceTimePlaceholder interface.
 */
function instanceOfGdalSourceTimePlaceholder(value) {
    if (!('format' in value) || value['format'] === undefined)
        return false;
    if (!('reference' in value) || value['reference'] === undefined)
        return false;
    return true;
}
function GdalSourceTimePlaceholderFromJSON(json) {
    return GdalSourceTimePlaceholderFromJSONTyped(json, false);
}
function GdalSourceTimePlaceholderFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'format': json['format'],
        'reference': (0, TimeReference_1.TimeReferenceFromJSON)(json['reference']),
    };
}
function GdalSourceTimePlaceholderToJSON(json) {
    return GdalSourceTimePlaceholderToJSONTyped(json, false);
}
function GdalSourceTimePlaceholderToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'format': value['format'],
        'reference': (0, TimeReference_1.TimeReferenceToJSON)(value['reference']),
    };
}
