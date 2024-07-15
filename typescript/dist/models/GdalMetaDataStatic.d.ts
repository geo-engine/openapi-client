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
import type { RasterResultDescriptor } from './RasterResultDescriptor';
import type { TimeInterval } from './TimeInterval';
/**
 *
 * @export
 * @interface GdalMetaDataStatic
 */
export interface GdalMetaDataStatic {
    /**
     *
     * @type {number}
     * @memberof GdalMetaDataStatic
     */
    cacheTtl?: number;
    /**
     *
     * @type {GdalDatasetParameters}
     * @memberof GdalMetaDataStatic
     */
    params: GdalDatasetParameters;
    /**
     *
     * @type {RasterResultDescriptor}
     * @memberof GdalMetaDataStatic
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     *
     * @type {TimeInterval}
     * @memberof GdalMetaDataStatic
     */
    time?: TimeInterval | null;
}
/**
 * Check if a given object implements the GdalMetaDataStatic interface.
 */
export declare function instanceOfGdalMetaDataStatic(value: object): boolean;
export declare function GdalMetaDataStaticFromJSON(json: any): GdalMetaDataStatic;
export declare function GdalMetaDataStaticFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetaDataStatic;
export declare function GdalMetaDataStaticToJSON(value?: GdalMetaDataStatic | null): any;
