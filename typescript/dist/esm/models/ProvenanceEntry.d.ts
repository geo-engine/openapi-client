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
import type { DataId } from './DataId';
import type { Provenance } from './Provenance';
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
export declare function instanceOfProvenanceEntry(value: object): boolean;
export declare function ProvenanceEntryFromJSON(json: any): ProvenanceEntry;
export declare function ProvenanceEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProvenanceEntry;
export declare function ProvenanceEntryToJSON(value?: ProvenanceEntry | null): any;
