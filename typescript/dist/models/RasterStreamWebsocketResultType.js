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
exports.RasterStreamWebsocketResultTypeToJSON = exports.RasterStreamWebsocketResultTypeFromJSONTyped = exports.RasterStreamWebsocketResultTypeFromJSON = exports.RasterStreamWebsocketResultType = void 0;
/**
 * The stream result type for `raster_stream_websocket`.
 * @export
 */
exports.RasterStreamWebsocketResultType = {
    Arrow: 'arrow'
};
function RasterStreamWebsocketResultTypeFromJSON(json) {
    return RasterStreamWebsocketResultTypeFromJSONTyped(json, false);
}
exports.RasterStreamWebsocketResultTypeFromJSON = RasterStreamWebsocketResultTypeFromJSON;
function RasterStreamWebsocketResultTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RasterStreamWebsocketResultTypeFromJSONTyped = RasterStreamWebsocketResultTypeFromJSONTyped;
function RasterStreamWebsocketResultTypeToJSON(value) {
    return value;
}
exports.RasterStreamWebsocketResultTypeToJSON = RasterStreamWebsocketResultTypeToJSON;
