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
import { MultiBandRasterColorizer } from './MultiBandRasterColorizer';
import { SingleBandRasterColorizer } from './SingleBandRasterColorizer';
/**
 * @type RasterColorizer
 *
 * @export
 */
export type RasterColorizer = {
    type: 'multiBand';
} & MultiBandRasterColorizer | {
    type: 'singleBand';
} & SingleBandRasterColorizer;
export declare function RasterColorizerFromJSON(json: any): RasterColorizer;
export declare function RasterColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterColorizer;
export declare function RasterColorizerToJSON(value?: RasterColorizer | null): any;
