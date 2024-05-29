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
exports.DatasetToJSON = exports.DatasetFromJSONTyped = exports.DatasetFromJSON = exports.instanceOfDataset = void 0;
const Provenance_1 = require("./Provenance");
const Symbology_1 = require("./Symbology");
const TypedResultDescriptor_1 = require("./TypedResultDescriptor");
/**
 * Check if a given object implements the Dataset interface.
 */
function instanceOfDataset(value) {
    if (!('description' in value))
        return false;
    if (!('displayName' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('name' in value))
        return false;
    if (!('resultDescriptor' in value))
        return false;
    if (!('sourceOperator' in value))
        return false;
    return true;
}
exports.instanceOfDataset = instanceOfDataset;
function DatasetFromJSON(json) {
    return DatasetFromJSONTyped(json, false);
}
exports.DatasetFromJSON = DatasetFromJSON;
function DatasetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'displayName': json['displayName'],
        'id': json['id'],
        'name': json['name'],
        'provenance': json['provenance'] == null ? undefined : (json['provenance'].map(Provenance_1.ProvenanceFromJSON)),
        'resultDescriptor': (0, TypedResultDescriptor_1.TypedResultDescriptorFromJSON)(json['resultDescriptor']),
        'sourceOperator': json['sourceOperator'],
        'symbology': json['symbology'] == null ? undefined : (0, Symbology_1.SymbologyFromJSON)(json['symbology']),
        'tags': json['tags'] == null ? undefined : json['tags'],
    };
}
exports.DatasetFromJSONTyped = DatasetFromJSONTyped;
function DatasetToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'displayName': value['displayName'],
        'id': value['id'],
        'name': value['name'],
        'provenance': value['provenance'] == null ? undefined : (value['provenance'].map(Provenance_1.ProvenanceToJSON)),
        'resultDescriptor': (0, TypedResultDescriptor_1.TypedResultDescriptorToJSON)(value['resultDescriptor']),
        'sourceOperator': value['sourceOperator'],
        'symbology': (0, Symbology_1.SymbologyToJSON)(value['symbology']),
        'tags': value['tags'],
    };
}
exports.DatasetToJSON = DatasetToJSON;
