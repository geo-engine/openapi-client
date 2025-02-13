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
exports.GetMapRequest = void 0;
exports.instanceOfGetMapRequest = instanceOfGetMapRequest;
exports.GetMapRequestFromJSON = GetMapRequestFromJSON;
exports.GetMapRequestFromJSONTyped = GetMapRequestFromJSONTyped;
exports.GetMapRequestToJSON = GetMapRequestToJSON;
exports.GetMapRequestToJSONTyped = GetMapRequestToJSONTyped;
/**
 *
 * @export
 */
exports.GetMapRequest = {
    GetMap: 'GetMap'
};
function instanceOfGetMapRequest(value) {
    for (const key in exports.GetMapRequest) {
        if (Object.prototype.hasOwnProperty.call(exports.GetMapRequest, key)) {
            if (exports.GetMapRequest[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function GetMapRequestFromJSON(json) {
    return GetMapRequestFromJSONTyped(json, false);
}
function GetMapRequestFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function GetMapRequestToJSON(value) {
    return value;
}
function GetMapRequestToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
