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
exports.ProvenancesToJSONTyped = exports.ProvenancesToJSON = exports.ProvenancesFromJSONTyped = exports.ProvenancesFromJSON = exports.instanceOfProvenances = void 0;
const Provenance_1 = require("./Provenance");
/**
 * Check if a given object implements the Provenances interface.
 */
function instanceOfProvenances(value) {
    if (!('provenances' in value) || value['provenances'] === undefined)
        return false;
    return true;
}
exports.instanceOfProvenances = instanceOfProvenances;
function ProvenancesFromJSON(json) {
    return ProvenancesFromJSONTyped(json, false);
}
exports.ProvenancesFromJSON = ProvenancesFromJSON;
function ProvenancesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'provenances': (json['provenances'].map(Provenance_1.ProvenanceFromJSON)),
    };
}
exports.ProvenancesFromJSONTyped = ProvenancesFromJSONTyped;
function ProvenancesToJSON(json) {
    return ProvenancesToJSONTyped(json, false);
}
exports.ProvenancesToJSON = ProvenancesToJSON;
function ProvenancesToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'provenances': (value['provenances'].map(Provenance_1.ProvenanceToJSON)),
    };
}
exports.ProvenancesToJSONTyped = ProvenancesToJSONTyped;
