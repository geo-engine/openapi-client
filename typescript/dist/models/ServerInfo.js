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
exports.instanceOfServerInfo = instanceOfServerInfo;
exports.ServerInfoFromJSON = ServerInfoFromJSON;
exports.ServerInfoFromJSONTyped = ServerInfoFromJSONTyped;
exports.ServerInfoToJSON = ServerInfoToJSON;
exports.ServerInfoToJSONTyped = ServerInfoToJSONTyped;
/**
 * Check if a given object implements the ServerInfo interface.
 */
function instanceOfServerInfo(value) {
    if (!('buildDate' in value) || value['buildDate'] === undefined)
        return false;
    if (!('commitHash' in value) || value['commitHash'] === undefined)
        return false;
    if (!('features' in value) || value['features'] === undefined)
        return false;
    if (!('version' in value) || value['version'] === undefined)
        return false;
    return true;
}
function ServerInfoFromJSON(json) {
    return ServerInfoFromJSONTyped(json, false);
}
function ServerInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'buildDate': json['buildDate'],
        'commitHash': json['commitHash'],
        'features': json['features'],
        'version': json['version'],
    };
}
function ServerInfoToJSON(json) {
    return ServerInfoToJSONTyped(json, false);
}
function ServerInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'buildDate': value['buildDate'],
        'commitHash': value['commitHash'],
        'features': value['features'],
        'version': value['version'],
    };
}
