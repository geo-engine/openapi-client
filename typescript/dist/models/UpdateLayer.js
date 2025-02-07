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
exports.UpdateLayerToJSON = exports.UpdateLayerFromJSONTyped = exports.UpdateLayerFromJSON = exports.instanceOfUpdateLayer = void 0;
const runtime_1 = require("../runtime");
const Symbology_1 = require("./Symbology");
const Workflow_1 = require("./Workflow");
/**
 * Check if a given object implements the UpdateLayer interface.
 */
function instanceOfUpdateLayer(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "workflow" in value;
    return isInstance;
}
exports.instanceOfUpdateLayer = instanceOfUpdateLayer;
function UpdateLayerFromJSON(json) {
    return UpdateLayerFromJSONTyped(json, false);
}
exports.UpdateLayerFromJSON = UpdateLayerFromJSON;
function UpdateLayerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        'name': json['name'],
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : json['properties'],
        'symbology': !(0, runtime_1.exists)(json, 'symbology') ? undefined : (0, Symbology_1.SymbologyFromJSON)(json['symbology']),
        'workflow': (0, Workflow_1.WorkflowFromJSON)(json['workflow']),
    };
}
exports.UpdateLayerFromJSONTyped = UpdateLayerFromJSONTyped;
function UpdateLayerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'metadata': value.metadata,
        'name': value.name,
        'properties': value.properties,
        'symbology': (0, Symbology_1.SymbologyToJSON)(value.symbology),
        'workflow': (0, Workflow_1.WorkflowToJSON)(value.workflow),
    };
}
exports.UpdateLayerToJSON = UpdateLayerToJSON;
