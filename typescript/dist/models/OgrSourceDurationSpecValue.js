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
exports.OgrSourceDurationSpecValueToJSONTyped = exports.OgrSourceDurationSpecValueToJSON = exports.OgrSourceDurationSpecValueFromJSONTyped = exports.OgrSourceDurationSpecValueFromJSON = exports.instanceOfOgrSourceDurationSpecValue = exports.OgrSourceDurationSpecValueTypeEnum = void 0;
const TimeStep_1 = require("./TimeStep");
/**
 * @export
 */
exports.OgrSourceDurationSpecValueTypeEnum = {
    Value: 'value'
};
/**
 * Check if a given object implements the OgrSourceDurationSpecValue interface.
 */
function instanceOfOgrSourceDurationSpecValue(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfOgrSourceDurationSpecValue = instanceOfOgrSourceDurationSpecValue;
function OgrSourceDurationSpecValueFromJSON(json) {
    return OgrSourceDurationSpecValueFromJSONTyped(json, false);
}
exports.OgrSourceDurationSpecValueFromJSON = OgrSourceDurationSpecValueFromJSON;
function OgrSourceDurationSpecValueFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, TimeStep_1.TimeStepFromJSONTyped)(json, true)), { 'type': json['type'] });
}
exports.OgrSourceDurationSpecValueFromJSONTyped = OgrSourceDurationSpecValueFromJSONTyped;
function OgrSourceDurationSpecValueToJSON(json) {
    return OgrSourceDurationSpecValueToJSONTyped(json, false);
}
exports.OgrSourceDurationSpecValueToJSON = OgrSourceDurationSpecValueToJSON;
function OgrSourceDurationSpecValueToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, TimeStep_1.TimeStepToJSONTyped)(value, true)), { 'type': value['type'] });
}
exports.OgrSourceDurationSpecValueToJSONTyped = OgrSourceDurationSpecValueToJSONTyped;
