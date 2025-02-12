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
/**
 * response of the dataset from workflow handler
 * @export
 * @interface RasterDatasetFromWorkflowResult
 */
export interface RasterDatasetFromWorkflowResult {
    /**
     *
     * @type {string}
     * @memberof RasterDatasetFromWorkflowResult
     */
    dataset: string;
    /**
     *
     * @type {string}
     * @memberof RasterDatasetFromWorkflowResult
     */
    upload: string;
}
/**
 * Check if a given object implements the RasterDatasetFromWorkflowResult interface.
 */
export declare function instanceOfRasterDatasetFromWorkflowResult(value: object): value is RasterDatasetFromWorkflowResult;
export declare function RasterDatasetFromWorkflowResultFromJSON(json: any): RasterDatasetFromWorkflowResult;
export declare function RasterDatasetFromWorkflowResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterDatasetFromWorkflowResult;
export declare function RasterDatasetFromWorkflowResultToJSON(json: any): RasterDatasetFromWorkflowResult;
export declare function RasterDatasetFromWorkflowResultToJSONTyped(value?: RasterDatasetFromWorkflowResult | null, ignoreDiscriminator?: boolean): any;
