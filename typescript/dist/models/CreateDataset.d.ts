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
import type { DataPath } from './DataPath';
import type { DatasetDefinition } from './DatasetDefinition';
/**
 *
 * @export
 * @interface CreateDataset
 */
export interface CreateDataset {
    /**
     *
     * @type {DataPath}
     * @memberof CreateDataset
     */
    dataPath: DataPath;
    /**
     *
     * @type {DatasetDefinition}
     * @memberof CreateDataset
     */
    definition: DatasetDefinition;
}
/**
 * Check if a given object implements the CreateDataset interface.
 */
export declare function instanceOfCreateDataset(value: object): boolean;
export declare function CreateDatasetFromJSON(json: any): CreateDataset;
export declare function CreateDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDataset;
export declare function CreateDatasetToJSON(value?: CreateDataset | null): any;
