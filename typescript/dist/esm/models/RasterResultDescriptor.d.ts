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
import type { TimeInterval } from './TimeInterval';
import type { RasterBandDescriptor } from './RasterBandDescriptor';
import type { SpatialGridDescriptor } from './SpatialGridDescriptor';
import type { RasterDataType } from './RasterDataType';
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
     * @type {RasterDataType}
     * @memberof RasterResultDescriptor
     */
    dataType: RasterDataType;
    /**
     *
     * @type {SpatialGridDescriptor}
     * @memberof RasterResultDescriptor
     */
    spatialGrid: SpatialGridDescriptor;
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
    time?: TimeInterval | null;
}
/**
 * Check if a given object implements the RasterResultDescriptor interface.
 */
export declare function instanceOfRasterResultDescriptor(value: object): value is RasterResultDescriptor;
export declare function RasterResultDescriptorFromJSON(json: any): RasterResultDescriptor;
export declare function RasterResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterResultDescriptor;
export declare function RasterResultDescriptorToJSON(json: any): RasterResultDescriptor;
export declare function RasterResultDescriptorToJSONTyped(value?: RasterResultDescriptor | null, ignoreDiscriminator?: boolean): any;
