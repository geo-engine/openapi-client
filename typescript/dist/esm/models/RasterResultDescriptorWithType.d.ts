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
 * @interface RasterResultDescriptorWithType
 */
export interface RasterResultDescriptorWithType {
    /**
     *
     * @type {Array<RasterBandDescriptor>}
     * @memberof RasterResultDescriptorWithType
     */
    bands: Array<RasterBandDescriptor>;
    /**
     *
     * @type {SpatialPartition2D}
     * @memberof RasterResultDescriptorWithType
     */
    bbox?: SpatialPartition2D | null;
    /**
     *
     * @type {RasterDataType}
     * @memberof RasterResultDescriptorWithType
     */
    dataType: RasterDataType;
    /**
     *
     * @type {SpatialResolution}
     * @memberof RasterResultDescriptorWithType
     */
    resolution?: SpatialResolution | null;
    /**
     *
     * @type {string}
     * @memberof RasterResultDescriptorWithType
     */
    spatialReference: string;
    /**
     *
     * @type {TimeInterval}
     * @memberof RasterResultDescriptorWithType
     */
    time?: TimeInterval | null;
    /**
     *
     * @type {string}
     * @memberof RasterResultDescriptorWithType
     */
    type: RasterResultDescriptorWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const RasterResultDescriptorWithTypeTypeEnum: {
    readonly Raster: "raster";
};
export type RasterResultDescriptorWithTypeTypeEnum = typeof RasterResultDescriptorWithTypeTypeEnum[keyof typeof RasterResultDescriptorWithTypeTypeEnum];
/**
 * Check if a given object implements the RasterResultDescriptorWithType interface.
 */
export declare function instanceOfRasterResultDescriptorWithType(value: object): boolean;
export declare function RasterResultDescriptorWithTypeFromJSON(json: any): RasterResultDescriptorWithType;
export declare function RasterResultDescriptorWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterResultDescriptorWithType;
export declare function RasterResultDescriptorWithTypeToJSON(value?: RasterResultDescriptorWithType | null): any;