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
exports.instanceOfProvenance = instanceOfProvenance;
exports.ProvenanceFromJSON = ProvenanceFromJSON;
exports.ProvenanceFromJSONTyped = ProvenanceFromJSONTyped;
exports.ProvenanceToJSON = ProvenanceToJSON;
exports.ProvenanceToJSONTyped = ProvenanceToJSONTyped;
/**
 * Check if a given object implements the Provenance interface.
 */
function instanceOfProvenance(value) {
    if (!('citation' in value) || value['citation'] === undefined)
        return false;
    if (!('license' in value) || value['license'] === undefined)
        return false;
    if (!('uri' in value) || value['uri'] === undefined)
        return false;
    return true;
}
function ProvenanceFromJSON(json) {
    return ProvenanceFromJSONTyped(json, false);
}
function ProvenanceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'citation': json['citation'],
        'license': json['license'],
        'uri': json['uri'],
    };
}
function ProvenanceToJSON(json) {
    return ProvenanceToJSONTyped(json, false);
}
function ProvenanceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'citation': value['citation'],
        'license': value['license'],
        'uri': value['uri'],
    };
}
