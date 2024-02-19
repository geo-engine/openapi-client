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
import type { AxisOrder } from './AxisOrder';
import type { BoundingBox2D } from './BoundingBox2D';
/**
 * The specification of a spatial reference, where extent and axis labels are given
 * in natural order (x, y) = (east, north)
 * @export
 * @interface SpatialReferenceSpecification
 */
export interface SpatialReferenceSpecification {
    /**
     *
     * @type {Array<string>}
     * @memberof SpatialReferenceSpecification
     */
    axisLabels?: Array<string> | null;
    /**
     *
     * @type {AxisOrder}
     * @memberof SpatialReferenceSpecification
     */
    axisOrder?: AxisOrder | null;
    /**
     *
     * @type {BoundingBox2D}
     * @memberof SpatialReferenceSpecification
     */
    extent: BoundingBox2D;
    /**
     *
     * @type {string}
     * @memberof SpatialReferenceSpecification
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof SpatialReferenceSpecification
     */
    projString: string;
    /**
     *
     * @type {string}
     * @memberof SpatialReferenceSpecification
     */
    spatialReference: string;
}
/**
 * Check if a given object implements the SpatialReferenceSpecification interface.
 */
export declare function instanceOfSpatialReferenceSpecification(value: object): boolean;
export declare function SpatialReferenceSpecificationFromJSON(json: any): SpatialReferenceSpecification;
export declare function SpatialReferenceSpecificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatialReferenceSpecification;
export declare function SpatialReferenceSpecificationToJSON(value?: SpatialReferenceSpecification | null): any;