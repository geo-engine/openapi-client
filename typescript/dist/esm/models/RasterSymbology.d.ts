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
import type { RasterColorizer } from './RasterColorizer';
/**
 *
 * @export
 * @interface RasterSymbology
 */
export interface RasterSymbology {
    /**
     *
     * @type {number}
     * @memberof RasterSymbology
     */
    opacity: number;
    /**
     *
     * @type {RasterColorizer}
     * @memberof RasterSymbology
     */
    rasterColorizer: RasterColorizer;
    /**
     *
     * @type {string}
     * @memberof RasterSymbology
     */
    type: RasterSymbologyTypeEnum;
}
/**
 * @export
 */
export declare const RasterSymbologyTypeEnum: {
    readonly Raster: "raster";
};
export type RasterSymbologyTypeEnum = typeof RasterSymbologyTypeEnum[keyof typeof RasterSymbologyTypeEnum];
/**
 * Check if a given object implements the RasterSymbology interface.
 */
export declare function instanceOfRasterSymbology(value: object): boolean;
export declare function RasterSymbologyFromJSON(json: any): RasterSymbology;
export declare function RasterSymbologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterSymbology;
export declare function RasterSymbologyToJSON(value?: RasterSymbology | null): any;
