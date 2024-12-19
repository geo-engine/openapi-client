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
import type { RasterPropertiesEntryType } from './RasterPropertiesEntryType';
import type { RasterPropertiesKey } from './RasterPropertiesKey';
/**
 *
 * @export
 * @interface GdalMetadataMapping
 */
export interface GdalMetadataMapping {
    /**
     *
     * @type {RasterPropertiesKey}
     * @memberof GdalMetadataMapping
     */
    sourceKey: RasterPropertiesKey;
    /**
     *
     * @type {RasterPropertiesKey}
     * @memberof GdalMetadataMapping
     */
    targetKey: RasterPropertiesKey;
    /**
     *
     * @type {RasterPropertiesEntryType}
     * @memberof GdalMetadataMapping
     */
    targetType: RasterPropertiesEntryType;
}
/**
 * Check if a given object implements the GdalMetadataMapping interface.
 */
export declare function instanceOfGdalMetadataMapping(value: object): boolean;
export declare function GdalMetadataMappingFromJSON(json: any): GdalMetadataMapping;
export declare function GdalMetadataMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetadataMapping;
export declare function GdalMetadataMappingToJSON(value?: GdalMetadataMapping | null): any;
