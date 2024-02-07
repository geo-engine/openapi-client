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
exports.ProvenanceEntryToJSON = exports.ProvenanceEntryFromJSONTyped = exports.ProvenanceEntryFromJSON = exports.instanceOfProvenanceEntry = void 0;
const DataId_1 = require("./DataId");
const Provenance_1 = require("./Provenance");
/**
 * Check if a given object implements the ProvenanceEntry interface.
 */
function instanceOfProvenanceEntry(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "provenance" in value;
    return isInstance;
}
exports.instanceOfProvenanceEntry = instanceOfProvenanceEntry;
function ProvenanceEntryFromJSON(json) {
    return ProvenanceEntryFromJSONTyped(json, false);
}
exports.ProvenanceEntryFromJSON = ProvenanceEntryFromJSON;
function ProvenanceEntryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(DataId_1.DataIdFromJSON)),
        'provenance': (0, Provenance_1.ProvenanceFromJSON)(json['provenance']),
    };
}
exports.ProvenanceEntryFromJSONTyped = ProvenanceEntryFromJSONTyped;
function ProvenanceEntryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(DataId_1.DataIdToJSON)),
        'provenance': (0, Provenance_1.ProvenanceToJSON)(value.provenance),
    };
}
exports.ProvenanceEntryToJSON = ProvenanceEntryToJSON;
