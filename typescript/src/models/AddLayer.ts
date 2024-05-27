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

import { mapValues } from '../runtime';
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
 * @interface AddLayer
 */
export interface AddLayer {
    /**
     * 
     * @type {string}
     * @memberof AddLayer
     */
    description: string;
    /**
     * metadata used for loading the data
     * @type {{ [key: string]: string; }}
     * @memberof AddLayer
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof AddLayer
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof AddLayer
     */
    properties?: Array<Array<string>>;
    /**
     * 
     * @type {Symbology}
     * @memberof AddLayer
     */
    symbology?: Symbology;
    /**
     * 
     * @type {Workflow}
     * @memberof AddLayer
     */
    workflow: Workflow;
}

/**
 * Check if a given object implements the AddLayer interface.
 */
export function instanceOfAddLayer(value: object): value is AddLayer {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('workflow' in value) || value['workflow'] === undefined) return false;
    return true;
}

export function AddLayerFromJSON(json: any): AddLayer {
    return AddLayerFromJSONTyped(json, false);
}

export function AddLayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddLayer {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'name': json['name'],
        'properties': json['properties'] == null ? undefined : json['properties'],
        'symbology': json['symbology'] == null ? undefined : SymbologyFromJSON(json['symbology']),
        'workflow': WorkflowFromJSON(json['workflow']),
    };
}

export function AddLayerToJSON(value?: AddLayer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'metadata': value['metadata'],
        'name': value['name'],
        'properties': value['properties'],
        'symbology': SymbologyToJSON(value['symbology']),
        'workflow': WorkflowToJSON(value['workflow']),
    };
}

