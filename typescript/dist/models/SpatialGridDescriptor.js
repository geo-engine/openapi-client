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
exports.SpatialGridDescriptorToJSON = exports.SpatialGridDescriptorFromJSONTyped = exports.SpatialGridDescriptorFromJSON = exports.instanceOfSpatialGridDescriptor = void 0;
const SpatialGridDefinition_1 = require("./SpatialGridDefinition");
const SpatialGridDescriptorState_1 = require("./SpatialGridDescriptorState");
/**
 * Check if a given object implements the SpatialGridDescriptor interface.
 */
function instanceOfSpatialGridDescriptor(value) {
    let isInstance = true;
    isInstance = isInstance && "descriptor" in value;
    isInstance = isInstance && "spatialGrid" in value;
    return isInstance;
}
exports.instanceOfSpatialGridDescriptor = instanceOfSpatialGridDescriptor;
function SpatialGridDescriptorFromJSON(json) {
    return SpatialGridDescriptorFromJSONTyped(json, false);
}
exports.SpatialGridDescriptorFromJSON = SpatialGridDescriptorFromJSON;
function SpatialGridDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'descriptor': (0, SpatialGridDescriptorState_1.SpatialGridDescriptorStateFromJSON)(json['descriptor']),
        'spatialGrid': (0, SpatialGridDefinition_1.SpatialGridDefinitionFromJSON)(json['spatialGrid']),
    };
}
exports.SpatialGridDescriptorFromJSONTyped = SpatialGridDescriptorFromJSONTyped;
function SpatialGridDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'descriptor': (0, SpatialGridDescriptorState_1.SpatialGridDescriptorStateToJSON)(value.descriptor),
        'spatialGrid': (0, SpatialGridDefinition_1.SpatialGridDefinitionToJSON)(value.spatialGrid),
    };
}
exports.SpatialGridDescriptorToJSON = SpatialGridDescriptorToJSON;
