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
exports.MultiLineStringToJSON = exports.MultiLineStringFromJSONTyped = exports.MultiLineStringFromJSON = exports.instanceOfMultiLineString = void 0;
/**
 * Check if a given object implements the MultiLineString interface.
 */
function instanceOfMultiLineString(value) {
    let isInstance = true;
    isInstance = isInstance && "coordinates" in value;
    return isInstance;
}
exports.instanceOfMultiLineString = instanceOfMultiLineString;
function MultiLineStringFromJSON(json) {
    return MultiLineStringFromJSONTyped(json, false);
}
exports.MultiLineStringFromJSON = MultiLineStringFromJSON;
function MultiLineStringFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'coordinates': json['coordinates'],
    };
}
exports.MultiLineStringFromJSONTyped = MultiLineStringFromJSONTyped;
function MultiLineStringToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'coordinates': value.coordinates,
    };
}
exports.MultiLineStringToJSON = MultiLineStringToJSON;
