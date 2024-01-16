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
import type { BoundingBox2D } from './BoundingBox2D';
import type { TimeInterval } from './TimeInterval';
import type { VectorColumnInfo } from './VectorColumnInfo';
import type { VectorDataType } from './VectorDataType';
/**
 *
 * @export
 * @interface VectorResultDescriptor
 */
export interface VectorResultDescriptor {
    /**
     *
     * @type {BoundingBox2D}
     * @memberof VectorResultDescriptor
     */
    bbox?: BoundingBox2D | null;
    /**
     *
     * @type {{ [key: string]: VectorColumnInfo; }}
     * @memberof VectorResultDescriptor
     */
    columns: {
        [key: string]: VectorColumnInfo;
    };
    /**
     *
     * @type {VectorDataType}
     * @memberof VectorResultDescriptor
     */
    dataType: VectorDataType;
    /**
     *
     * @type {string}
     * @memberof VectorResultDescriptor
     */
    spatialReference: string;
    /**
     *
     * @type {TimeInterval}
     * @memberof VectorResultDescriptor
     */
    time?: TimeInterval | null;
}
/**
 * Check if a given object implements the VectorResultDescriptor interface.
 */
export declare function instanceOfVectorResultDescriptor(value: object): boolean;
export declare function VectorResultDescriptorFromJSON(json: any): VectorResultDescriptor;
export declare function VectorResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): VectorResultDescriptor;
export declare function VectorResultDescriptorToJSON(value?: VectorResultDescriptor | null): any;
