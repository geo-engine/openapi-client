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
import { ResourceDatasetFromJSONTyped, ResourceDatasetToJSON, } from './ResourceDataset';
import { ResourceLayerFromJSONTyped, ResourceLayerToJSON, } from './ResourceLayer';
import { ResourceLayerCollectionFromJSONTyped, ResourceLayerCollectionToJSON, } from './ResourceLayerCollection';
import { ResourceProjectFromJSONTyped, ResourceProjectToJSON, } from './ResourceProject';
export function ResourceFromJSON(json) {
    return ResourceFromJSONTyped(json, false);
}
export function ResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'dataset':
            return Object.assign({}, ResourceDatasetFromJSONTyped(json, true), { type: 'dataset' });
        case 'layer':
            return Object.assign({}, ResourceLayerFromJSONTyped(json, true), { type: 'layer' });
        case 'layerCollection':
            return Object.assign({}, ResourceLayerCollectionFromJSONTyped(json, true), { type: 'layerCollection' });
        case 'project':
            return Object.assign({}, ResourceProjectFromJSONTyped(json, true), { type: 'project' });
        default:
            throw new Error(`No variant of Resource exists with 'type=${json['type']}'`);
    }
}
export function ResourceToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'dataset':
            return ResourceDatasetToJSON(value);
        case 'layer':
            return ResourceLayerToJSON(value);
        case 'layerCollection':
            return ResourceLayerCollectionToJSON(value);
        case 'project':
            return ResourceProjectToJSON(value);
        default:
            throw new Error(`No variant of Resource exists with 'type=${value['type']}'`);
    }
}
