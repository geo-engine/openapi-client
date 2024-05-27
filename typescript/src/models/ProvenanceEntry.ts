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
import type { Provenance } from './Provenance';
import {
    ProvenanceFromJSON,
    ProvenanceFromJSONTyped,
    ProvenanceToJSON,
} from './Provenance';
import type { DataId } from './DataId';
import {
    DataIdFromJSON,
    DataIdFromJSONTyped,
    DataIdToJSON,
} from './DataId';

/**
 * 
 * @export
 * @interface ProvenanceEntry
 */
export interface ProvenanceEntry {
    /**
     * 
     * @type {Array<DataId>}
     * @memberof ProvenanceEntry
     */
    data: Array<DataId>;
    /**
     * 
     * @type {Provenance}
     * @memberof ProvenanceEntry
     */
    provenance: Provenance;
}

/**
 * Check if a given object implements the ProvenanceEntry interface.
 */
export function instanceOfProvenanceEntry(value: object): value is ProvenanceEntry {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('provenance' in value) || value['provenance'] === undefined) return false;
    return true;
}

export function ProvenanceEntryFromJSON(json: any): ProvenanceEntry {
    return ProvenanceEntryFromJSONTyped(json, false);
}

export function ProvenanceEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProvenanceEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(DataIdFromJSON)),
        'provenance': ProvenanceFromJSON(json['provenance']),
    };
}

export function ProvenanceEntryToJSON(value?: ProvenanceEntry | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ((value['data'] as Array<any>).map(DataIdToJSON)),
        'provenance': ProvenanceToJSON(value['provenance']),
    };
}

