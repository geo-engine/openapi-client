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

import { exists, mapValues } from '../runtime';
import type { ProviderLayerId } from './ProviderLayerId';
import {
    ProviderLayerIdFromJSON,
    ProviderLayerIdFromJSONTyped,
    ProviderLayerIdToJSON,
} from './ProviderLayerId';
import type { Symbology } from './Symbology';
import {
    SymbologyFromJSON,
    SymbologyFromJSONTyped,
    SymbologyToJSON,
} from './Symbology';
import type { Workflow } from './Workflow';
import {
    WorkflowFromJSON,
    WorkflowFromJSONTyped,
    WorkflowToJSON,
} from './Workflow';

/**
 * 
 * @export
 * @interface Layer
 */
export interface Layer {
    /**
     * 
     * @type {string}
     * @memberof Layer
     */
    description: string;
    /**
     * 
     * @type {ProviderLayerId}
     * @memberof Layer
     */
    id: ProviderLayerId;
    /**
     * metadata used for loading the data
     * @type {{ [key: string]: string; }}
     * @memberof Layer
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Layer
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof Layer
     */
    properties?: Array<Array<string>>;
    /**
     * 
     * @type {Symbology}
     * @memberof Layer
     */
    symbology?: Symbology | null;
    /**
     * 
     * @type {Workflow}
     * @memberof Layer
     */
    workflow: Workflow;
}

/**
 * Check if a given object implements the Layer interface.
 */
export function instanceOfLayer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "workflow" in value;

    return isInstance;
}

export function LayerFromJSON(json: any): Layer {
    return LayerFromJSONTyped(json, false);
}

export function LayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Layer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'id': ProviderLayerIdFromJSON(json['id']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'symbology': !exists(json, 'symbology') ? undefined : SymbologyFromJSON(json['symbology']),
        'workflow': WorkflowFromJSON(json['workflow']),
    };
}

export function LayerToJSON(value?: Layer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': ProviderLayerIdToJSON(value.id),
        'metadata': value.metadata,
        'name': value.name,
        'properties': value.properties,
        'symbology': SymbologyToJSON(value.symbology),
        'workflow': WorkflowToJSON(value.workflow),
    };
}

