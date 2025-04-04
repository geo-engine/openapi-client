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
exports.UnixTimeStampTypeToJSONTyped = exports.UnixTimeStampTypeToJSON = exports.UnixTimeStampTypeFromJSONTyped = exports.UnixTimeStampTypeFromJSON = exports.instanceOfUnixTimeStampType = exports.UnixTimeStampType = void 0;
/**
 *
 * @export
 */
exports.UnixTimeStampType = {
    EpochSeconds: 'epochSeconds',
    EpochMilliseconds: 'epochMilliseconds'
};
function instanceOfUnixTimeStampType(value) {
    for (const key in exports.UnixTimeStampType) {
        if (Object.prototype.hasOwnProperty.call(exports.UnixTimeStampType, key)) {
            if (exports.UnixTimeStampType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
exports.instanceOfUnixTimeStampType = instanceOfUnixTimeStampType;
function UnixTimeStampTypeFromJSON(json) {
    return UnixTimeStampTypeFromJSONTyped(json, false);
}
exports.UnixTimeStampTypeFromJSON = UnixTimeStampTypeFromJSON;
function UnixTimeStampTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.UnixTimeStampTypeFromJSONTyped = UnixTimeStampTypeFromJSONTyped;
function UnixTimeStampTypeToJSON(value) {
    return value;
}
exports.UnixTimeStampTypeToJSON = UnixTimeStampTypeToJSON;
function UnixTimeStampTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
exports.UnixTimeStampTypeToJSONTyped = UnixTimeStampTypeToJSONTyped;
