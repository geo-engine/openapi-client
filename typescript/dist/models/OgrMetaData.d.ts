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
import type { VectorResultDescriptor } from './VectorResultDescriptor';
import type { OgrSourceDataset } from './OgrSourceDataset';
/**
 *
 * @export
 * @interface OgrMetaData
 */
export interface OgrMetaData {
    /**
     *
     * @type {OgrSourceDataset}
     * @memberof OgrMetaData
     */
    loadingInfo: OgrSourceDataset;
    /**
     *
     * @type {VectorResultDescriptor}
     * @memberof OgrMetaData
     */
    resultDescriptor: VectorResultDescriptor;
}
/**
 * Check if a given object implements the OgrMetaData interface.
 */
export declare function instanceOfOgrMetaData(value: object): value is OgrMetaData;
export declare function OgrMetaDataFromJSON(json: any): OgrMetaData;
export declare function OgrMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrMetaData;
export declare function OgrMetaDataToJSON(value?: OgrMetaData | null): any;
