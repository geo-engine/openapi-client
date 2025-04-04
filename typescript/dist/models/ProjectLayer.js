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
exports.ProjectLayerToJSONTyped = exports.ProjectLayerToJSON = exports.ProjectLayerFromJSONTyped = exports.ProjectLayerFromJSON = exports.instanceOfProjectLayer = void 0;
const LayerVisibility_1 = require("./LayerVisibility");
const Symbology_1 = require("./Symbology");
/**
 * Check if a given object implements the ProjectLayer interface.
 */
function instanceOfProjectLayer(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('symbology' in value) || value['symbology'] === undefined)
        return false;
    if (!('visibility' in value) || value['visibility'] === undefined)
        return false;
    if (!('workflow' in value) || value['workflow'] === undefined)
        return false;
    return true;
}
exports.instanceOfProjectLayer = instanceOfProjectLayer;
function ProjectLayerFromJSON(json) {
    return ProjectLayerFromJSONTyped(json, false);
}
exports.ProjectLayerFromJSON = ProjectLayerFromJSON;
function ProjectLayerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'symbology': (0, Symbology_1.SymbologyFromJSON)(json['symbology']),
        'visibility': (0, LayerVisibility_1.LayerVisibilityFromJSON)(json['visibility']),
        'workflow': json['workflow'],
    };
}
exports.ProjectLayerFromJSONTyped = ProjectLayerFromJSONTyped;
function ProjectLayerToJSON(json) {
    return ProjectLayerToJSONTyped(json, false);
}
exports.ProjectLayerToJSON = ProjectLayerToJSON;
function ProjectLayerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'symbology': (0, Symbology_1.SymbologyToJSON)(value['symbology']),
        'visibility': (0, LayerVisibility_1.LayerVisibilityToJSON)(value['visibility']),
        'workflow': value['workflow'],
    };
}
exports.ProjectLayerToJSONTyped = ProjectLayerToJSONTyped;
