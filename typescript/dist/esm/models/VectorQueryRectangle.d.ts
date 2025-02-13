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
import type { SpatialResolution } from './SpatialResolution';
import type { TimeInterval } from './TimeInterval';
import type { BoundingBox2D } from './BoundingBox2D';
/**
 * A spatio-temporal rectangle with a specified resolution
 * @export
 * @interface VectorQueryRectangle
 */
export interface VectorQueryRectangle {
    /**
     *
     * @type {BoundingBox2D}
     * @memberof VectorQueryRectangle
     */
    spatialBounds: BoundingBox2D;
    /**
     *
     * @type {SpatialResolution}
     * @memberof VectorQueryRectangle
     */
    spatialResolution: SpatialResolution;
    /**
     *
     * @type {TimeInterval}
     * @memberof VectorQueryRectangle
     */
    timeInterval: TimeInterval;
}
/**
 * Check if a given object implements the VectorQueryRectangle interface.
 */
export declare function instanceOfVectorQueryRectangle(value: object): value is VectorQueryRectangle;
export declare function VectorQueryRectangleFromJSON(json: any): VectorQueryRectangle;
export declare function VectorQueryRectangleFromJSONTyped(json: any, ignoreDiscriminator: boolean): VectorQueryRectangle;
export declare function VectorQueryRectangleToJSON(json: any): VectorQueryRectangle;
export declare function VectorQueryRectangleToJSONTyped(value?: VectorQueryRectangle | null, ignoreDiscriminator?: boolean): any;
