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
import type { BoundingBox2D } from './BoundingBox2D';
import type { TimeInterval } from './TimeInterval';
import type { VectorColumnInfo } from './VectorColumnInfo';
import type { VectorDataType } from './VectorDataType';
/**
 *
 * @export
 * @interface TypedVectorResultDescriptor
 */
export interface TypedVectorResultDescriptor {
    /**
     *
     * @type {BoundingBox2D}
     * @memberof TypedVectorResultDescriptor
     */
    bbox?: BoundingBox2D | null;
    /**
     *
     * @type {{ [key: string]: VectorColumnInfo; }}
     * @memberof TypedVectorResultDescriptor
     */
    columns: {
        [key: string]: VectorColumnInfo;
    };
    /**
     *
     * @type {VectorDataType}
     * @memberof TypedVectorResultDescriptor
     */
    dataType: VectorDataType;
    /**
     *
     * @type {string}
     * @memberof TypedVectorResultDescriptor
     */
    spatialReference: string;
    /**
     *
     * @type {TimeInterval}
     * @memberof TypedVectorResultDescriptor
     */
    time?: TimeInterval | null;
    /**
     *
     * @type {string}
     * @memberof TypedVectorResultDescriptor
     */
    type: TypedVectorResultDescriptorTypeEnum;
}
/**
 * @export
 */
export declare const TypedVectorResultDescriptorTypeEnum: {
    readonly Vector: "vector";
};
export type TypedVectorResultDescriptorTypeEnum = typeof TypedVectorResultDescriptorTypeEnum[keyof typeof TypedVectorResultDescriptorTypeEnum];
/**
 * Check if a given object implements the TypedVectorResultDescriptor interface.
 */
export declare function instanceOfTypedVectorResultDescriptor(value: object): boolean;
export declare function TypedVectorResultDescriptorFromJSON(json: any): TypedVectorResultDescriptor;
export declare function TypedVectorResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedVectorResultDescriptor;
export declare function TypedVectorResultDescriptorToJSON(value?: TypedVectorResultDescriptor | null): any;
