"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
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
exports.MultiPolygonToJSON = exports.MultiPolygonFromJSONTyped = exports.MultiPolygonFromJSON = exports.instanceOfMultiPolygon = void 0;
/**
 * Check if a given object implements the MultiPolygon interface.
 */
function instanceOfMultiPolygon(value) {
    let isInstance = true;
    isInstance = isInstance && "polygons" in value;
    return isInstance;
}
exports.instanceOfMultiPolygon = instanceOfMultiPolygon;
function MultiPolygonFromJSON(json) {
    return MultiPolygonFromJSONTyped(json, false);
}
exports.MultiPolygonFromJSON = MultiPolygonFromJSON;
function MultiPolygonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'polygons': json['polygons'],
    };
}
exports.MultiPolygonFromJSONTyped = MultiPolygonFromJSONTyped;
function MultiPolygonToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'polygons': value.polygons,
    };
}
exports.MultiPolygonToJSON = MultiPolygonToJSON;
