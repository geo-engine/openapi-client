/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { OgrSourceColumnSpec } from './OgrSourceColumnSpec';
import type { OgrSourceDatasetTimeType } from './OgrSourceDatasetTimeType';
import type { OgrSourceErrorSpec } from './OgrSourceErrorSpec';
import type { TypedGeometry } from './TypedGeometry';
import type { VectorDataType } from './VectorDataType';
/**
 *
 * @export
 * @interface OgrSourceDataset
 */
export interface OgrSourceDataset {
    /**
     *
     * @type {string}
     * @memberof OgrSourceDataset
     */
    attributeQuery?: string | null;
    /**
     *
     * @type {number}
     * @memberof OgrSourceDataset
     */
    cacheTtl?: number;
    /**
     *
     * @type {OgrSourceColumnSpec}
     * @memberof OgrSourceDataset
     */
    columns?: OgrSourceColumnSpec | null;
    /**
     *
     * @type {VectorDataType}
     * @memberof OgrSourceDataset
     */
    dataType?: VectorDataType | null;
    /**
     *
     * @type {TypedGeometry}
     * @memberof OgrSourceDataset
     */
    defaultGeometry?: TypedGeometry | null;
    /**
     *
     * @type {string}
     * @memberof OgrSourceDataset
     */
    fileName: string;
    /**
     *
     * @type {boolean}
     * @memberof OgrSourceDataset
     */
    forceOgrSpatialFilter?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof OgrSourceDataset
     */
    forceOgrTimeFilter?: boolean;
    /**
     *
     * @type {string}
     * @memberof OgrSourceDataset
     */
    layerName: string;
    /**
     *
     * @type {OgrSourceErrorSpec}
     * @memberof OgrSourceDataset
     */
    onError: OgrSourceErrorSpec;
    /**
     *
     * @type {string}
     * @memberof OgrSourceDataset
     */
    sqlQuery?: string | null;
    /**
     *
     * @type {OgrSourceDatasetTimeType}
     * @memberof OgrSourceDataset
     */
    time?: OgrSourceDatasetTimeType;
}
/**
 * Check if a given object implements the OgrSourceDataset interface.
 */
export declare function instanceOfOgrSourceDataset(value: object): boolean;
export declare function OgrSourceDatasetFromJSON(json: any): OgrSourceDataset;
export declare function OgrSourceDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDataset;
export declare function OgrSourceDatasetToJSON(value?: OgrSourceDataset | null): any;
