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
import type { AddDataset } from './AddDataset';
import type { MetaDataDefinition } from './MetaDataDefinition';
/**
 *
 * @export
 * @interface DatasetDefinition
 */
export interface DatasetDefinition {
    /**
     *
     * @type {MetaDataDefinition}
     * @memberof DatasetDefinition
     */
    metaData: MetaDataDefinition;
    /**
     *
     * @type {AddDataset}
     * @memberof DatasetDefinition
     */
    properties: AddDataset;
}
/**
 * Check if a given object implements the DatasetDefinition interface.
 */
export declare function instanceOfDatasetDefinition(value: object): boolean;
export declare function DatasetDefinitionFromJSON(json: any): DatasetDefinition;
export declare function DatasetDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetDefinition;
export declare function DatasetDefinitionToJSON(value?: DatasetDefinition | null): any;
