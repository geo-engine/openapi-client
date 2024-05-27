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

/**
 * 
 * @export
 * @interface Provenances
 */
export interface Provenances {
    /**
     * 
     * @type {Array<Provenance>}
     * @memberof Provenances
     */
    provenances: Array<Provenance>;
}

/**
 * Check if a given object implements the Provenances interface.
 */
export function instanceOfProvenances(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "provenances" in value;

    return isInstance;
}

export function ProvenancesFromJSON(json: any): Provenances {
    return ProvenancesFromJSONTyped(json, false);
}

export function ProvenancesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Provenances {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'provenances': ((json['provenances'] as Array<any>).map(ProvenanceFromJSON)),
    };
}

export function ProvenancesToJSON(value?: Provenances | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'provenances': ((value.provenances as Array<any>).map(ProvenanceToJSON)),
    };
}
