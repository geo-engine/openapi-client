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

/**
 * 
 * @export
 * @interface AddDataset
 */
export interface AddDataset {
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    name?: string | null;
    /**
     * 
     * @type {Array<Provenance>}
     * @memberof AddDataset
     */
    provenance?: Array<Provenance> | null;
    /**
     * 
     * @type {string}
     * @memberof AddDataset
     */
    sourceOperator: string;
    /**
     * 
     * @type {Symbology}
     * @memberof AddDataset
     */
    symbology?: Symbology | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AddDataset
     */
    tags?: Array<string> | null;
}

/**
 * Check if a given object implements the AddDataset interface.
 */
export function instanceOfAddDataset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "sourceOperator" in value;

    return isInstance;
}

export function AddDatasetFromJSON(json: any): AddDataset {
    return AddDatasetFromJSONTyped(json, false);
}

export function AddDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDataset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'displayName': json['displayName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'provenance': !exists(json, 'provenance') ? undefined : (json['provenance'] === null ? null : (json['provenance'] as Array<any>).map(ProvenanceFromJSON)),
        'sourceOperator': json['sourceOperator'],
        'symbology': !exists(json, 'symbology') ? undefined : SymbologyFromJSON(json['symbology']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function AddDatasetToJSON(value?: AddDataset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'displayName': value.displayName,
        'name': value.name,
        'provenance': value.provenance === undefined ? undefined : (value.provenance === null ? null : (value.provenance as Array<any>).map(ProvenanceToJSON)),
        'sourceOperator': value.sourceOperator,
        'symbology': SymbologyToJSON(value.symbology),
        'tags': value.tags,
    };
}

