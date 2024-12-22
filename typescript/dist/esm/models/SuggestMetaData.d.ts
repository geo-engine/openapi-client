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
/**
 *
 * @export
 * @interface SuggestMetaData
 */
export interface SuggestMetaData {
    /**
     *
     * @type {DataPath}
     * @memberof SuggestMetaData
     */
    dataPath: DataPath;
    /**
     *
     * @type {string}
     * @memberof SuggestMetaData
     */
    layerName?: string | null;
    /**
     *
     * @type {string}
     * @memberof SuggestMetaData
     */
    mainFile?: string | null;
}
/**
 * Check if a given object implements the SuggestMetaData interface.
 */
export declare function instanceOfSuggestMetaData(value: object): boolean;
export declare function SuggestMetaDataFromJSON(json: any): SuggestMetaData;
export declare function SuggestMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestMetaData;
export declare function SuggestMetaDataToJSON(value?: SuggestMetaData | null): any;
