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

import {
    DatasetResource,
    instanceOfDatasetResource,
    DatasetResourceFromJSON,
    DatasetResourceFromJSONTyped,
    DatasetResourceToJSON,
} from './DatasetResource';
import {
    LayerCollectionResource,
    instanceOfLayerCollectionResource,
    LayerCollectionResourceFromJSON,
    LayerCollectionResourceFromJSONTyped,
    LayerCollectionResourceToJSON,
} from './LayerCollectionResource';
import {
    LayerResource,
    instanceOfLayerResource,
    LayerResourceFromJSON,
    LayerResourceFromJSONTyped,
    LayerResourceToJSON,
} from './LayerResource';
import {
    MlModelResource,
    instanceOfMlModelResource,
    MlModelResourceFromJSON,
    MlModelResourceFromJSONTyped,
    MlModelResourceToJSON,
} from './MlModelResource';
import {
    ProjectResource,
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
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'dataset':
            return {...DatasetResourceFromJSONTyped(json, true), type: 'dataset'};
        case 'layer':
            return {...LayerResourceFromJSONTyped(json, true), type: 'layer'};
        case 'layerCollection':
            return {...LayerCollectionResourceFromJSONTyped(json, true), type: 'layerCollection'};
        case 'mlModel':
            return {...MlModelResourceFromJSONTyped(json, true), type: 'mlModel'};
        case 'project':
            return {...ProjectResourceFromJSONTyped(json, true), type: 'project'};
        default:
            throw new Error(`No variant of Resource exists with 'type=${json['type']}'`);
    }
}

export function ResourceToJSON(value?: Resource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'dataset':
            return DatasetResourceToJSON(value);
        case 'layer':
            return LayerResourceToJSON(value);
        case 'layerCollection':
            return LayerCollectionResourceToJSON(value);
        case 'mlModel':
            return MlModelResourceToJSON(value);
        case 'project':
            return ProjectResourceToJSON(value);
        default:
            throw new Error(`No variant of Resource exists with 'type=${value['type']}'`);
    }

}

