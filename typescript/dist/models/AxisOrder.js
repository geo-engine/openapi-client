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
exports.AxisOrderToJSON = exports.AxisOrderFromJSONTyped = exports.AxisOrderFromJSON = exports.AxisOrder = void 0;
/**
 *
 * @export
 */
exports.AxisOrder = {
    NorthEast: 'northEast',
    EastNorth: 'eastNorth'
};
function AxisOrderFromJSON(json) {
    return AxisOrderFromJSONTyped(json, false);
}
exports.AxisOrderFromJSON = AxisOrderFromJSON;
function AxisOrderFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AxisOrderFromJSONTyped = AxisOrderFromJSONTyped;
function AxisOrderToJSON(value) {
    return value;
}
exports.AxisOrderToJSON = AxisOrderToJSON;
