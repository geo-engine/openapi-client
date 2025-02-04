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
exports.WcsBoundingboxToJSON = exports.WcsBoundingboxFromJSONTyped = exports.WcsBoundingboxFromJSON = exports.instanceOfWcsBoundingbox = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the WcsBoundingbox interface.
 */
function instanceOfWcsBoundingbox(value) {
    let isInstance = true;
    isInstance = isInstance && "bbox" in value;
    return isInstance;
}
exports.instanceOfWcsBoundingbox = instanceOfWcsBoundingbox;
function WcsBoundingboxFromJSON(json) {
    return WcsBoundingboxFromJSONTyped(json, false);
}
exports.WcsBoundingboxFromJSON = WcsBoundingboxFromJSON;
function WcsBoundingboxFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bbox': json['bbox'],
        'spatialReference': !(0, runtime_1.exists)(json, 'spatial_reference') ? undefined : json['spatial_reference'],
    };
}
exports.WcsBoundingboxFromJSONTyped = WcsBoundingboxFromJSONTyped;
function WcsBoundingboxToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bbox': value.bbox,
        'spatial_reference': value.spatialReference,
    };
}
exports.WcsBoundingboxToJSON = WcsBoundingboxToJSON;
