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
import { ResourceIdDatasetIdFromJSONTyped, ResourceIdDatasetIdToJSON, } from './ResourceIdDatasetId';
import { ResourceIdLayerFromJSONTyped, ResourceIdLayerToJSON, } from './ResourceIdLayer';
import { ResourceIdLayerCollectionFromJSONTyped, ResourceIdLayerCollectionToJSON, } from './ResourceIdLayerCollection';
import { ResourceIdModelIdFromJSONTyped, ResourceIdModelIdToJSON, } from './ResourceIdModelId';
import { ResourceIdProjectFromJSONTyped, ResourceIdProjectToJSON, } from './ResourceIdProject';
export function ResourceIdFromJSON(json) {
    return ResourceIdFromJSONTyped(json, false);
}
export function ResourceIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'DatasetId':
            return Object.assign(Object.assign({}, ResourceIdDatasetIdFromJSONTyped(json, true)), { type: 'DatasetId' });
        case 'Layer':
            return Object.assign(Object.assign({}, ResourceIdLayerFromJSONTyped(json, true)), { type: 'Layer' });
        case 'LayerCollection':
            return Object.assign(Object.assign({}, ResourceIdLayerCollectionFromJSONTyped(json, true)), { type: 'LayerCollection' });
        case 'ModelId':
            return Object.assign(Object.assign({}, ResourceIdModelIdFromJSONTyped(json, true)), { type: 'ModelId' });
        case 'Project':
            return Object.assign(Object.assign({}, ResourceIdProjectFromJSONTyped(json, true)), { type: 'Project' });
        default:
            throw new Error(`No variant of ResourceId exists with 'type=${json['type']}'`);
    }
}
export function ResourceIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'DatasetId':
            return ResourceIdDatasetIdToJSON(value);
        case 'Layer':
            return ResourceIdLayerToJSON(value);
        case 'LayerCollection':
            return ResourceIdLayerCollectionToJSON(value);
        case 'ModelId':
            return ResourceIdModelIdToJSON(value);
        case 'Project':
            return ResourceIdProjectToJSON(value);
        default:
            throw new Error(`No variant of ResourceId exists with 'type=${value['type']}'`);
    }
}
