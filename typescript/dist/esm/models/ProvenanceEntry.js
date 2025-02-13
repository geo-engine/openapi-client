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
import { ProvenanceFromJSON, ProvenanceToJSON, } from './Provenance';
import { DataIdFromJSON, DataIdToJSON, } from './DataId';
/**
 * Check if a given object implements the ProvenanceEntry interface.
 */
export function instanceOfProvenanceEntry(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    return true;
}
export function ProvenanceEntryFromJSON(json) {
    return ProvenanceEntryFromJSONTyped(json, false);
}
export function ProvenanceEntryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(DataIdFromJSON)),
        'provenance': ProvenanceFromJSON(json['provenance']),
    };
}
export function ProvenanceEntryToJSON(json) {
    return ProvenanceEntryToJSONTyped(json, false);
}
export function ProvenanceEntryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(DataIdToJSON)),
        'provenance': ProvenanceToJSON(value['provenance']),
    };
}
