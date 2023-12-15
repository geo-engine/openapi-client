/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { exists } from '../runtime';
import { ProviderLayerIdFromJSON, ProviderLayerIdToJSON, } from './ProviderLayerId';
/**
 * Check if a given object implements the LayerListing interface.
 */
export function instanceOfLayerListing(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function LayerListingFromJSON(json) {
    return LayerListingFromJSONTyped(json, false);
}
export function LayerListingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'id': ProviderLayerIdFromJSON(json['id']),
        'name': json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
    };
}
export function LayerListingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'id': ProviderLayerIdToJSON(value.id),
        'name': value.name,
        'properties': value.properties,
    };
}
