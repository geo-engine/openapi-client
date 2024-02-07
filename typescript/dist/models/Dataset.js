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
const runtime_1 = require("../runtime");
const Provenance_1 = require("./Provenance");
const Symbology_1 = require("./Symbology");
const TypedResultDescriptor_1 = require("./TypedResultDescriptor");
/**
 * Check if a given object implements the Dataset interface.
 */
function instanceOfDataset(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "sourceOperator" in value;
    return isInstance;
}
exports.instanceOfDataset = instanceOfDataset;
function DatasetFromJSON(json) {
    return DatasetFromJSONTyped(json, false);
}
exports.DatasetFromJSON = DatasetFromJSON;
function DatasetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'displayName': json['displayName'],
        'id': json['id'],
        'name': json['name'],
        'provenance': !(0, runtime_1.exists)(json, 'provenance') ? undefined : (json['provenance'] === null ? null : json['provenance'].map(Provenance_1.ProvenanceFromJSON)),
        'resultDescriptor': (0, TypedResultDescriptor_1.TypedResultDescriptorFromJSON)(json['resultDescriptor']),
        'sourceOperator': json['sourceOperator'],
        'symbology': !(0, runtime_1.exists)(json, 'symbology') ? undefined : (0, Symbology_1.SymbologyFromJSON)(json['symbology']),
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
    };
}
exports.DatasetFromJSONTyped = DatasetFromJSONTyped;
function DatasetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'displayName': value.displayName,
        'id': value.id,
        'name': value.name,
        'provenance': value.provenance === undefined ? undefined : (value.provenance === null ? null : value.provenance.map(Provenance_1.ProvenanceToJSON)),
        'resultDescriptor': (0, TypedResultDescriptor_1.TypedResultDescriptorToJSON)(value.resultDescriptor),
        'sourceOperator': value.sourceOperator,
        'symbology': (0, Symbology_1.SymbologyToJSON)(value.symbology),
        'tags': value.tags,
    };
}
exports.DatasetToJSON = DatasetToJSON;
