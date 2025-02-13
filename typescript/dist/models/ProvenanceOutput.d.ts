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
import type { Provenance } from './Provenance';
import type { DataId } from './DataId';
/**
 *
 * @export
 * @interface ProvenanceOutput
 */
export interface ProvenanceOutput {
    /**
     *
     * @type {DataId}
     * @memberof ProvenanceOutput
     */
    data: DataId;
    /**
     *
     * @type {Array<Provenance>}
     * @memberof ProvenanceOutput
     */
    provenance?: Array<Provenance> | null;
}
/**
 * Check if a given object implements the ProvenanceOutput interface.
 */
export declare function instanceOfProvenanceOutput(value: object): value is ProvenanceOutput;
export declare function ProvenanceOutputFromJSON(json: any): ProvenanceOutput;
export declare function ProvenanceOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProvenanceOutput;
export declare function ProvenanceOutputToJSON(json: any): ProvenanceOutput;
export declare function ProvenanceOutputToJSONTyped(value?: ProvenanceOutput | null, ignoreDiscriminator?: boolean): any;
