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
import { RasterQueryRectangleFromJSON, RasterQueryRectangleToJSON, } from './RasterQueryRectangle';
/**
 * Check if a given object implements the RasterDatasetFromWorkflow interface.
 */
export function instanceOfRasterDatasetFromWorkflow(value) {
    if (!('displayName' in value) || value['displayName'] === undefined)
        return false;
    if (!('query' in value) || value['query'] === undefined)
        return false;
    return true;
}
export function RasterDatasetFromWorkflowFromJSON(json) {
    return RasterDatasetFromWorkflowFromJSONTyped(json, false);
}
export function RasterDatasetFromWorkflowFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'asCog': json['asCog'] == null ? undefined : json['asCog'],
        'description': json['description'] == null ? undefined : json['description'],
        'displayName': json['displayName'],
        'name': json['name'] == null ? undefined : json['name'],
        'query': RasterQueryRectangleFromJSON(json['query']),
    };
}
export function RasterDatasetFromWorkflowToJSON(json) {
    return RasterDatasetFromWorkflowToJSONTyped(json, false);
}
export function RasterDatasetFromWorkflowToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'asCog': value['asCog'],
        'description': value['description'],
        'displayName': value['displayName'],
        'name': value['name'],
        'query': RasterQueryRectangleToJSON(value['query']),
    };
}
