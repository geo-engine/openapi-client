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
exports.instanceOfGeoJson = instanceOfGeoJson;
exports.GeoJsonFromJSON = GeoJsonFromJSON;
exports.GeoJsonFromJSONTyped = GeoJsonFromJSONTyped;
exports.GeoJsonToJSON = GeoJsonToJSON;
exports.GeoJsonToJSONTyped = GeoJsonToJSONTyped;
const CollectionType_1 = require("./CollectionType");
/**
 * Check if a given object implements the GeoJson interface.
 */
function instanceOfGeoJson(value) {
    if (!('features' in value) || value['features'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function GeoJsonFromJSON(json) {
    return GeoJsonFromJSONTyped(json, false);
}
function GeoJsonFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'features': json['features'],
        'type': (0, CollectionType_1.CollectionTypeFromJSON)(json['type']),
    };
}
function GeoJsonToJSON(json) {
    return GeoJsonToJSONTyped(json, false);
}
function GeoJsonToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'features': value['features'],
        'type': (0, CollectionType_1.CollectionTypeToJSON)(value['type']),
    };
}
