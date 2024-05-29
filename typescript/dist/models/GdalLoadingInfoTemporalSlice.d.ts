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
import type { GdalDatasetParameters } from './GdalDatasetParameters';
import type { TimeInterval } from './TimeInterval';
/**
 * one temporal slice of the dataset that requires reading from exactly one Gdal dataset
 * @export
 * @interface GdalLoadingInfoTemporalSlice
 */
export interface GdalLoadingInfoTemporalSlice {
    /**
     *
     * @type {number}
     * @memberof GdalLoadingInfoTemporalSlice
     */
    cacheTtl?: number;
    /**
     *
     * @type {GdalDatasetParameters}
     * @memberof GdalLoadingInfoTemporalSlice
     */
    params?: GdalDatasetParameters;
    /**
     *
     * @type {TimeInterval}
     * @memberof GdalLoadingInfoTemporalSlice
     */
    time: TimeInterval;
}
/**
 * Check if a given object implements the GdalLoadingInfoTemporalSlice interface.
 */
export declare function instanceOfGdalLoadingInfoTemporalSlice(value: object): boolean;
export declare function GdalLoadingInfoTemporalSliceFromJSON(json: any): GdalLoadingInfoTemporalSlice;
export declare function GdalLoadingInfoTemporalSliceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalLoadingInfoTemporalSlice;
export declare function GdalLoadingInfoTemporalSliceToJSON(value?: GdalLoadingInfoTemporalSlice | null): any;
