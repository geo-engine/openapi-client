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
exports.ProvenanceOutputToJSON = exports.ProvenanceOutputFromJSONTyped = exports.ProvenanceOutputFromJSON = exports.instanceOfProvenanceOutput = void 0;
const runtime_1 = require("../runtime");
const DataId_1 = require("./DataId");
const Provenance_1 = require("./Provenance");
/**
 * Check if a given object implements the ProvenanceOutput interface.
 */
function instanceOfProvenanceOutput(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfProvenanceOutput = instanceOfProvenanceOutput;
function ProvenanceOutputFromJSON(json) {
    return ProvenanceOutputFromJSONTyped(json, false);
}
exports.ProvenanceOutputFromJSON = ProvenanceOutputFromJSON;
function ProvenanceOutputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, DataId_1.DataIdFromJSON)(json['data']),
        'provenance': !(0, runtime_1.exists)(json, 'provenance') ? undefined : (json['provenance'] === null ? null : json['provenance'].map(Provenance_1.ProvenanceFromJSON)),
    };
}
exports.ProvenanceOutputFromJSONTyped = ProvenanceOutputFromJSONTyped;
function ProvenanceOutputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, DataId_1.DataIdToJSON)(value.data),
        'provenance': value.provenance === undefined ? undefined : (value.provenance === null ? null : value.provenance.map(Provenance_1.ProvenanceToJSON)),
    };
}
exports.ProvenanceOutputToJSON = ProvenanceOutputToJSON;