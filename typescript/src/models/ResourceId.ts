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

import {
    DatasetIdResourceId,
    instanceOfDatasetIdResourceId,
    DatasetIdResourceIdFromJSON,
    DatasetIdResourceIdFromJSONTyped,
    DatasetIdResourceIdToJSON,
} from './DatasetIdResourceId';
import {
    LayerCollectionResourceId,
    instanceOfLayerCollectionResourceId,
    LayerCollectionResourceIdFromJSON,
    LayerCollectionResourceIdFromJSONTyped,
    LayerCollectionResourceIdToJSON,
} from './LayerCollectionResourceId';
import {
    LayerResourceId,
    instanceOfLayerResourceId,
    LayerResourceIdFromJSON,
    LayerResourceIdFromJSONTyped,
    LayerResourceIdToJSON,
} from './LayerResourceId';
import {
    ModelIdResourceId,
    instanceOfModelIdResourceId,
    ModelIdResourceIdFromJSON,
    ModelIdResourceIdFromJSONTyped,
    ModelIdResourceIdToJSON,
} from './ModelIdResourceId';
import {
    ProjectResourceId,
    instanceOfProjectResourceId,
    ProjectResourceIdFromJSON,
    ProjectResourceIdFromJSONTyped,
    ProjectResourceIdToJSON,
} from './ProjectResourceId';

/**
 * @type ResourceId
 * 
 * @export
 */
export type ResourceId = { type: 'DatasetId' } & DatasetIdResourceId | { type: 'Layer' } & LayerResourceId | { type: 'LayerCollection' } & LayerCollectionResourceId | { type: 'ModelId' } & ModelIdResourceId | { type: 'Project' } & ProjectResourceId;

export function ResourceIdFromJSON(json: any): ResourceId {
    return ResourceIdFromJSONTyped(json, false);
}

export function ResourceIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'DatasetId':
            return {...DatasetIdResourceIdFromJSONTyped(json, true), type: 'DatasetId'};
        case 'Layer':
            return {...LayerResourceIdFromJSONTyped(json, true), type: 'Layer'};
        case 'LayerCollection':
            return {...LayerCollectionResourceIdFromJSONTyped(json, true), type: 'LayerCollection'};
        case 'ModelId':
            return {...ModelIdResourceIdFromJSONTyped(json, true), type: 'ModelId'};
        case 'Project':
            return {...ProjectResourceIdFromJSONTyped(json, true), type: 'Project'};
        default:
            throw new Error(`No variant of ResourceId exists with 'type=${json['type']}'`);
    }
}

export function ResourceIdToJSON(value?: ResourceId | null): any {
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

