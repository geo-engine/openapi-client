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
import { DatasetIdResourceIdFromJSONTyped, DatasetIdResourceIdToJSON, } from './DatasetIdResourceId';
import { LayerCollectionResourceIdFromJSONTyped, LayerCollectionResourceIdToJSON, } from './LayerCollectionResourceId';
import { LayerResourceIdFromJSONTyped, LayerResourceIdToJSON, } from './LayerResourceId';
import { ModelIdResourceIdFromJSONTyped, ModelIdResourceIdToJSON, } from './ModelIdResourceId';
import { ProjectResourceIdFromJSONTyped, ProjectResourceIdToJSON, } from './ProjectResourceId';
export function ResourceIdFromJSON(json) {
    return ResourceIdFromJSONTyped(json, false);
}
export function ResourceIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'DatasetId':
            return Object.assign(Object.assign({}, DatasetIdResourceIdFromJSONTyped(json, true)), { type: 'DatasetId' });
        case 'Layer':
            return Object.assign(Object.assign({}, LayerResourceIdFromJSONTyped(json, true)), { type: 'Layer' });
        case 'LayerCollection':
            return Object.assign(Object.assign({}, LayerCollectionResourceIdFromJSONTyped(json, true)), { type: 'LayerCollection' });
        case 'ModelId':
            return Object.assign(Object.assign({}, ModelIdResourceIdFromJSONTyped(json, true)), { type: 'ModelId' });
        case 'Project':
            return Object.assign(Object.assign({}, ProjectResourceIdFromJSONTyped(json, true)), { type: 'Project' });
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
            return DatasetIdResourceIdToJSON(value);
        case 'Layer':
            return LayerResourceIdToJSON(value);
        case 'LayerCollection':
            return LayerCollectionResourceIdToJSON(value);
        case 'ModelId':
            return ModelIdResourceIdToJSON(value);
        case 'Project':
            return ProjectResourceIdToJSON(value);
        default:
            throw new Error(`No variant of ResourceId exists with 'type=${value['type']}'`);
    }
}
