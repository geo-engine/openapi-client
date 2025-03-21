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
 *
 * @export
 * @interface AutoCreateDataset
 */
export interface AutoCreateDataset {
    /**
     *
     * @type {string}
     * @memberof AutoCreateDataset
     */
    datasetDescription: string;
    /**
     *
     * @type {string}
     * @memberof AutoCreateDataset
     */
    datasetName: string;
    /**
     *
     * @type {string}
     * @memberof AutoCreateDataset
     */
    layerName?: string | null;
    /**
     *
     * @type {string}
     * @memberof AutoCreateDataset
     */
    mainFile: string;
    /**
     *
     * @type {Array<string>}
     * @memberof AutoCreateDataset
     */
    tags?: Array<string> | null;
    /**
     *
     * @type {string}
     * @memberof AutoCreateDataset
     */
    upload: string;
}
/**
 * Check if a given object implements the AutoCreateDataset interface.
 */
export declare function instanceOfAutoCreateDataset(value: object): value is AutoCreateDataset;
export declare function AutoCreateDatasetFromJSON(json: any): AutoCreateDataset;
export declare function AutoCreateDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoCreateDataset;
export declare function AutoCreateDatasetToJSON(json: any): AutoCreateDataset;
export declare function AutoCreateDatasetToJSONTyped(value?: AutoCreateDataset | null, ignoreDiscriminator?: boolean): any;
