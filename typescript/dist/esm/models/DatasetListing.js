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
import { SymbologyFromJSON, SymbologyToJSON, } from './Symbology';
import { TypedResultDescriptorFromJSON, TypedResultDescriptorToJSON, } from './TypedResultDescriptor';
/**
 * Check if a given object implements the DatasetListing interface.
 */
export function instanceOfDatasetListing(value) {
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
    if (!('tags' in value))
        return false;
    return true;
}
export function DatasetListingFromJSON(json) {
    return DatasetListingFromJSONTyped(json, false);
}
export function DatasetListingFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'displayName': json['displayName'],
        'id': json['id'],
        'name': json['name'],
        'resultDescriptor': TypedResultDescriptorFromJSON(json['resultDescriptor']),
        'sourceOperator': json['sourceOperator'],
        'symbology': json['symbology'] == null ? undefined : SymbologyFromJSON(json['symbology']),
        'tags': json['tags'],
    };
}
export function DatasetListingToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'displayName': value['displayName'],
        'id': value['id'],
        'name': value['name'],
        'resultDescriptor': TypedResultDescriptorToJSON(value['resultDescriptor']),
        'sourceOperator': value['sourceOperator'],
        'symbology': SymbologyToJSON(value['symbology']),
        'tags': value['tags'],
    };
}
