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
import type { RasterBandDescriptor } from './RasterBandDescriptor';
import type { RasterDataType } from './RasterDataType';
import type { SpatialPartition2D } from './SpatialPartition2D';
import type { SpatialResolution } from './SpatialResolution';
import type { TimeInterval } from './TimeInterval';
/**
 * A `ResultDescriptor` for raster queries
 * @export
 * @interface RasterResultDescriptor
 */
export interface RasterResultDescriptor {
    /**
     *
     * @type {Array<RasterBandDescriptor>}
     * @memberof RasterResultDescriptor
     */
    bands: Array<RasterBandDescriptor>;
    /**
     *
     * @type {SpatialPartition2D}
     * @memberof RasterResultDescriptor
     */
    bbox?: SpatialPartition2D;
    /**
     *
     * @type {RasterDataType}
     * @memberof RasterResultDescriptor
     */
    dataType: RasterDataType;
    /**
     *
     * @type {SpatialResolution}
     * @memberof RasterResultDescriptor
     */
    resolution?: SpatialResolution;
    /**
     *
     * @type {string}
     * @memberof RasterResultDescriptor
     */
    spatialReference: string;
    /**
     *
     * @type {TimeInterval}
     * @memberof RasterResultDescriptor
     */
    time?: TimeInterval;
}
/**
 * Check if a given object implements the RasterResultDescriptor interface.
 */
export declare function instanceOfRasterResultDescriptor(value: object): boolean;
export declare function RasterResultDescriptorFromJSON(json: any): RasterResultDescriptor;
export declare function RasterResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterResultDescriptor;
export declare function RasterResultDescriptorToJSON(value?: RasterResultDescriptor | null): any;
