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
import type { BoundingBox2D } from './BoundingBox2D';
import type { TimeInterval } from './TimeInterval';
/**
 * A `ResultDescriptor` for plot queries
 * @export
 * @interface TypedPlotResultDescriptor
 */
export interface TypedPlotResultDescriptor {
    /**
     *
     * @type {BoundingBox2D}
     * @memberof TypedPlotResultDescriptor
     */
    bbox?: BoundingBox2D | null;
    /**
     *
     * @type {string}
     * @memberof TypedPlotResultDescriptor
     */
    spatialReference: string;
    /**
     *
     * @type {TimeInterval}
     * @memberof TypedPlotResultDescriptor
     */
    time?: TimeInterval | null;
    /**
     *
     * @type {string}
     * @memberof TypedPlotResultDescriptor
     */
    type: TypedPlotResultDescriptorTypeEnum;
}
/**
 * @export
 */
export declare const TypedPlotResultDescriptorTypeEnum: {
    readonly Plot: "plot";
};
export type TypedPlotResultDescriptorTypeEnum = typeof TypedPlotResultDescriptorTypeEnum[keyof typeof TypedPlotResultDescriptorTypeEnum];
/**
 * Check if a given object implements the TypedPlotResultDescriptor interface.
 */
export declare function instanceOfTypedPlotResultDescriptor(value: object): boolean;
export declare function TypedPlotResultDescriptorFromJSON(json: any): TypedPlotResultDescriptor;
export declare function TypedPlotResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedPlotResultDescriptor;
export declare function TypedPlotResultDescriptorToJSON(value?: TypedPlotResultDescriptor | null): any;
