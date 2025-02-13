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
import type { BoundingBox2D } from './BoundingBox2D';
/**
 *
 * @export
 * @interface STRectangle
 */
export interface STRectangle {
    /**
     *
     * @type {BoundingBox2D}
     * @memberof STRectangle
     */
    boundingBox: BoundingBox2D;
    /**
     *
     * @type {string}
     * @memberof STRectangle
     */
    spatialReference: string;
    /**
     *
     * @type {TimeInterval}
     * @memberof STRectangle
     */
    timeInterval: TimeInterval;
}
/**
 * Check if a given object implements the STRectangle interface.
 */
export declare function instanceOfSTRectangle(value: object): value is STRectangle;
export declare function STRectangleFromJSON(json: any): STRectangle;
export declare function STRectangleFromJSONTyped(json: any, ignoreDiscriminator: boolean): STRectangle;
export declare function STRectangleToJSON(json: any): STRectangle;
export declare function STRectangleToJSONTyped(value?: STRectangle | null, ignoreDiscriminator?: boolean): any;
