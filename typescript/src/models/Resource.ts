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

import type { DatasetResource } from './DatasetResource';
import {
    instanceOfDatasetResource,
    DatasetResourceFromJSON,
    DatasetResourceFromJSONTyped,
    DatasetResourceToJSON,
} from './DatasetResource';
import type { LayerCollectionResource } from './LayerCollectionResource';
import {
    instanceOfLayerCollectionResource,
    LayerCollectionResourceFromJSON,
    LayerCollectionResourceFromJSONTyped,
    LayerCollectionResourceToJSON,
} from './LayerCollectionResource';
import type { LayerResource } from './LayerResource';
import {
    instanceOfLayerResource,
    LayerResourceFromJSON,
    LayerResourceFromJSONTyped,
    LayerResourceToJSON,
} from './LayerResource';
import type { MlModelResource } from './MlModelResource';
import {
    instanceOfMlModelResource,
    MlModelResourceFromJSON,
    MlModelResourceFromJSONTyped,
    MlModelResourceToJSON,
} from './MlModelResource';
import type { ProjectResource } from './ProjectResource';
import {
    instanceOfProjectResource,
    ProjectResourceFromJSON,
    ProjectResourceFromJSONTyped,
    ProjectResourceToJSON,
} from './ProjectResource';

/**
 * @type Resource
 * 
 * @export
 */
export type Resource = { type: 'dataset' } & DatasetResource | { type: 'layer' } & LayerResource | { type: 'layerCollection' } & LayerCollectionResource | { type: 'mlModel' } & MlModelResource | { type: 'project' } & ProjectResource;

export function ResourceFromJSON(json: any): Resource {
    return ResourceFromJSONTyped(json, false);
}

export function ResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resource {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'dataset':
            return Object.assign({}, DatasetResourceFromJSONTyped(json, true), { type: 'dataset' } as const);
        case 'layer':
            return Object.assign({}, LayerResourceFromJSONTyped(json, true), { type: 'layer' } as const);
        case 'layerCollection':
            return Object.assign({}, LayerCollectionResourceFromJSONTyped(json, true), { type: 'layerCollection' } as const);
        case 'mlModel':
            return Object.assign({}, MlModelResourceFromJSONTyped(json, true), { type: 'mlModel' } as const);
        case 'project':
            return Object.assign({}, ProjectResourceFromJSONTyped(json, true), { type: 'project' } as const);
        default:
            throw new Error(`No variant of Resource exists with 'type=${json['type']}'`);
    }
}

export function ResourceToJSON(json: any): any {
    return ResourceToJSONTyped(json, false);
}

export function ResourceToJSONTyped(value?: Resource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'dataset':
            return Object.assign({}, DatasetResourceToJSON(value), { type: 'dataset' } as const);
        case 'layer':
            return Object.assign({}, LayerResourceToJSON(value), { type: 'layer' } as const);
        case 'layerCollection':
            return Object.assign({}, LayerCollectionResourceToJSON(value), { type: 'layerCollection' } as const);
        case 'mlModel':
            return Object.assign({}, MlModelResourceToJSON(value), { type: 'mlModel' } as const);
        case 'project':
            return Object.assign({}, ProjectResourceToJSON(value), { type: 'project' } as const);
        default:
            throw new Error(`No variant of Resource exists with 'type=${value['type']}'`);
    }

}

