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
exports.instanceOfAddDataset = instanceOfAddDataset;
exports.AddDatasetFromJSON = AddDatasetFromJSON;
exports.AddDatasetFromJSONTyped = AddDatasetFromJSONTyped;
exports.AddDatasetToJSON = AddDatasetToJSON;
exports.AddDatasetToJSONTyped = AddDatasetToJSONTyped;
const Provenance_1 = require("./Provenance");
const Symbology_1 = require("./Symbology");
/**
 * Check if a given object implements the AddDataset interface.
 */
function instanceOfAddDataset(value) {
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('displayName' in value) || value['displayName'] === undefined)
        return false;
    if (!('sourceOperator' in value) || value['sourceOperator'] === undefined)
        return false;
    return true;
}
function AddDatasetFromJSON(json) {
    return AddDatasetFromJSONTyped(json, false);
}
function AddDatasetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'displayName': json['displayName'],
        'name': json['name'] == null ? undefined : json['name'],
        'provenance': json['provenance'] == null ? undefined : (json['provenance'].map(Provenance_1.ProvenanceFromJSON)),
        'sourceOperator': json['sourceOperator'],
        'symbology': json['symbology'] == null ? undefined : (0, Symbology_1.SymbologyFromJSON)(json['symbology']),
        'tags': json['tags'] == null ? undefined : json['tags'],
    };
}
function AddDatasetToJSON(json) {
    return AddDatasetToJSONTyped(json, false);
}
function AddDatasetToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'displayName': value['displayName'],
        'name': value['name'],
        'provenance': value['provenance'] == null ? undefined : (value['provenance'].map(Provenance_1.ProvenanceToJSON)),
        'sourceOperator': value['sourceOperator'],
        'symbology': (0, Symbology_1.SymbologyToJSON)(value['symbology']),
        'tags': value['tags'],
    };
}
