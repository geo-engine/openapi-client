"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPathOneOfToJSON = exports.DataPathOneOfFromJSONTyped = exports.DataPathOneOfFromJSON = exports.instanceOfDataPathOneOf = void 0;
/**
 * Check if a given object implements the DataPathOneOf interface.
 */
function instanceOfDataPathOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "volume" in value;
    return isInstance;
}
exports.instanceOfDataPathOneOf = instanceOfDataPathOneOf;
function DataPathOneOfFromJSON(json) {
    return DataPathOneOfFromJSONTyped(json, false);
}
exports.DataPathOneOfFromJSON = DataPathOneOfFromJSON;
function DataPathOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'volume': json['volume'],
    };
}
exports.DataPathOneOfFromJSONTyped = DataPathOneOfFromJSONTyped;
function DataPathOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'volume': value.volume,
    };
}
exports.DataPathOneOfToJSON = DataPathOneOfToJSON;
