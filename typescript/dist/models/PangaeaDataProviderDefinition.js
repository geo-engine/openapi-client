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
exports.PangaeaDataProviderDefinitionTypeEnum = void 0;
exports.instanceOfPangaeaDataProviderDefinition = instanceOfPangaeaDataProviderDefinition;
exports.PangaeaDataProviderDefinitionFromJSON = PangaeaDataProviderDefinitionFromJSON;
exports.PangaeaDataProviderDefinitionFromJSONTyped = PangaeaDataProviderDefinitionFromJSONTyped;
exports.PangaeaDataProviderDefinitionToJSON = PangaeaDataProviderDefinitionToJSON;
exports.PangaeaDataProviderDefinitionToJSONTyped = PangaeaDataProviderDefinitionToJSONTyped;
/**
 * @export
 */
exports.PangaeaDataProviderDefinitionTypeEnum = {
    Pangaea: 'Pangaea'
};
/**
 * Check if a given object implements the PangaeaDataProviderDefinition interface.
 */
function instanceOfPangaeaDataProviderDefinition(value) {
    if (!('baseUrl' in value) || value['baseUrl'] === undefined)
        return false;
    if (!('cacheTtl' in value) || value['cacheTtl'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function PangaeaDataProviderDefinitionFromJSON(json) {
    return PangaeaDataProviderDefinitionFromJSONTyped(json, false);
}
function PangaeaDataProviderDefinitionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'baseUrl': json['baseUrl'],
        'cacheTtl': json['cacheTtl'],
        'description': json['description'],
        'name': json['name'],
        'priority': json['priority'] == null ? undefined : json['priority'],
        'type': json['type'],
    };
}
function PangaeaDataProviderDefinitionToJSON(json) {
    return PangaeaDataProviderDefinitionToJSONTyped(json, false);
}
function PangaeaDataProviderDefinitionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'baseUrl': value['baseUrl'],
        'cacheTtl': value['cacheTtl'],
        'description': value['description'],
        'name': value['name'],
        'priority': value['priority'],
        'type': value['type'],
    };
}
