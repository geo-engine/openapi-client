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

import { exists, mapValues } from '../runtime';
import type { Provenance } from './Provenance';
import {
    ProvenanceFromJSON,
    ProvenanceFromJSONTyped,
    ProvenanceToJSON,
} from './Provenance';
import type { Symbology } from './Symbology';
import {
    SymbologyFromJSON,
    SymbologyFromJSONTyped,
    SymbologyToJSON,
} from './Symbology';
import type { TypedResultDescriptor } from './TypedResultDescriptor';
import {
    TypedResultDescriptorFromJSON,
    TypedResultDescriptorFromJSONTyped,
    TypedResultDescriptorToJSON,
} from './TypedResultDescriptor';

/**
 * 
 * @export
 * @interface Dataset
 */
export interface Dataset {
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    name: string;
    /**
     * 
     * @type {Array<Provenance>}
     * @memberof Dataset
     */
    provenance?: Array<Provenance> | null;
    /**
     * 
     * @type {TypedResultDescriptor}
     * @memberof Dataset
     */
    resultDescriptor: TypedResultDescriptor;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    sourceOperator: string;
    /**
     * 
     * @type {Symbology}
     * @memberof Dataset
     */
    symbology?: Symbology | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Dataset
     */
    tags?: Array<string> | null;
}

/**
 * Check if a given object implements the Dataset interface.
 */
export function instanceOfDataset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "sourceOperator" in value;

    return isInstance;
}

export function DatasetFromJSON(json: any): Dataset {
    return DatasetFromJSONTyped(json, false);
}

export function DatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dataset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'displayName': json['displayName'],
        'id': json['id'],
        'name': json['name'],
        'provenance': !exists(json, 'provenance') ? undefined : (json['provenance'] === null ? null : (json['provenance'] as Array<any>).map(ProvenanceFromJSON)),
        'resultDescriptor': TypedResultDescriptorFromJSON(json['resultDescriptor']),
        'sourceOperator': json['sourceOperator'],
        'symbology': !exists(json, 'symbology') ? undefined : SymbologyFromJSON(json['symbology']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function DatasetToJSON(value?: Dataset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'displayName': value.displayName,
        'id': value.id,
        'name': value.name,
        'provenance': value.provenance === undefined ? undefined : (value.provenance === null ? null : (value.provenance as Array<any>).map(ProvenanceToJSON)),
        'resultDescriptor': TypedResultDescriptorToJSON(value.resultDescriptor),
        'sourceOperator': value.sourceOperator,
        'symbology': SymbologyToJSON(value.symbology),
        'tags': value.tags,
    };
}

