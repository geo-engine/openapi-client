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
import { exists } from '../runtime';
import { RasterQueryRectangleFromJSON, RasterQueryRectangleToJSON, } from './RasterQueryRectangle';
/**
 * Check if a given object implements the RasterDatasetFromWorkflow interface.
 */
export function instanceOfRasterDatasetFromWorkflow(value) {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "query" in value;
    return isInstance;
}
export function RasterDatasetFromWorkflowFromJSON(json) {
    return RasterDatasetFromWorkflowFromJSONTyped(json, false);
}
export function RasterDatasetFromWorkflowFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'asCog': !exists(json, 'asCog') ? undefined : json['asCog'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displayName': json['displayName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'query': RasterQueryRectangleFromJSON(json['query']),
    };
}
export function RasterDatasetFromWorkflowToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'asCog': value.asCog,
        'description': value.description,
        'displayName': value.displayName,
        'name': value.name,
        'query': RasterQueryRectangleToJSON(value.query),
    };
}
