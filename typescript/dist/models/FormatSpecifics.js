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
exports.FormatSpecificsFromJSON = FormatSpecificsFromJSON;
exports.FormatSpecificsFromJSONTyped = FormatSpecificsFromJSONTyped;
exports.FormatSpecificsToJSON = FormatSpecificsToJSON;
exports.FormatSpecificsToJSONTyped = FormatSpecificsToJSONTyped;
const FormatSpecificsOneOf_1 = require("./FormatSpecificsOneOf");
function FormatSpecificsFromJSON(json) {
    return FormatSpecificsFromJSONTyped(json, false);
}
function FormatSpecificsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if ((0, FormatSpecificsOneOf_1.instanceOfFormatSpecificsOneOf)(json)) {
        return (0, FormatSpecificsOneOf_1.FormatSpecificsOneOfFromJSONTyped)(json, true);
    }
    return {};
}
function FormatSpecificsToJSON(json) {
    return FormatSpecificsToJSONTyped(json, false);
}
function FormatSpecificsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    if ((0, FormatSpecificsOneOf_1.instanceOfFormatSpecificsOneOf)(value)) {
        return (0, FormatSpecificsOneOf_1.FormatSpecificsOneOfToJSON)(value);
    }
    return {};
}
