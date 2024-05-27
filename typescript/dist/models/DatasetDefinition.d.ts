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
import type { MetaDataDefinition } from './MetaDataDefinition';
import type { AddDataset } from './AddDataset';
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
export declare function instanceOfDatasetDefinition(value: object): value is DatasetDefinition;
export declare function DatasetDefinitionFromJSON(json: any): DatasetDefinition;
export declare function DatasetDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetDefinition;
export declare function DatasetDefinitionToJSON(value?: DatasetDefinition | null): any;
