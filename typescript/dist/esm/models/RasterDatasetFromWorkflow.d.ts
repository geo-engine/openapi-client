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
import type { RasterQueryRectangle } from './RasterQueryRectangle';
/**
 * parameter for the dataset from workflow handler (body)
 * @export
 * @interface RasterDatasetFromWorkflow
 */
export interface RasterDatasetFromWorkflow {
    /**
     *
     * @type {boolean}
     * @memberof RasterDatasetFromWorkflow
     */
    asCog?: boolean;
    /**
     *
     * @type {string}
     * @memberof RasterDatasetFromWorkflow
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof RasterDatasetFromWorkflow
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof RasterDatasetFromWorkflow
     */
    name?: string | null;
    /**
     *
     * @type {RasterQueryRectangle}
     * @memberof RasterDatasetFromWorkflow
     */
    query: RasterQueryRectangle;
}
/**
 * Check if a given object implements the RasterDatasetFromWorkflow interface.
 */
export declare function instanceOfRasterDatasetFromWorkflow(value: object): boolean;
export declare function RasterDatasetFromWorkflowFromJSON(json: any): RasterDatasetFromWorkflow;
export declare function RasterDatasetFromWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterDatasetFromWorkflow;
export declare function RasterDatasetFromWorkflowToJSON(value?: RasterDatasetFromWorkflow | null): any;