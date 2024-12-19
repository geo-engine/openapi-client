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
import type { Coordinate2D } from './Coordinate2D';
/**
 * A bounding box that includes all border points.
 * Note: may degenerate to a point!
 * @export
 * @interface BoundingBox2D
 */
export interface BoundingBox2D {
    /**
     *
     * @type {Coordinate2D}
     * @memberof BoundingBox2D
     */
    lowerLeftCoordinate: Coordinate2D;
    /**
     *
     * @type {Coordinate2D}
     * @memberof BoundingBox2D
     */
    upperRightCoordinate: Coordinate2D;
}
/**
 * Check if a given object implements the BoundingBox2D interface.
 */
export declare function instanceOfBoundingBox2D(value: object): boolean;
export declare function BoundingBox2DFromJSON(json: any): BoundingBox2D;
export declare function BoundingBox2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): BoundingBox2D;
export declare function BoundingBox2DToJSON(value?: BoundingBox2D | null): any;
