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
import type { Coordinate2D } from './Coordinate2D';
/**
 *
 * @export
 * @interface GdalDatasetGeoTransform
 */
export interface GdalDatasetGeoTransform {
    /**
     *
     * @type {Coordinate2D}
     * @memberof GdalDatasetGeoTransform
     */
    originCoordinate: Coordinate2D;
    /**
     *
     * @type {number}
     * @memberof GdalDatasetGeoTransform
     */
    xPixelSize: number;
    /**
     *
     * @type {number}
     * @memberof GdalDatasetGeoTransform
     */
    yPixelSize: number;
}
/**
 * Check if a given object implements the GdalDatasetGeoTransform interface.
 */
export declare function instanceOfGdalDatasetGeoTransform(value: object): boolean;
export declare function GdalDatasetGeoTransformFromJSON(json: any): GdalDatasetGeoTransform;
export declare function GdalDatasetGeoTransformFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalDatasetGeoTransform;
export declare function GdalDatasetGeoTransformToJSON(value?: GdalDatasetGeoTransform | null): any;
