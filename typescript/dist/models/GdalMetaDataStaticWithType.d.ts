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
import type { GdalDatasetParameters } from './GdalDatasetParameters';
import type { RasterResultDescriptor } from './RasterResultDescriptor';
import type { TimeInterval } from './TimeInterval';
/**
 *
 * @export
 * @interface GdalMetaDataStaticWithType
 */
export interface GdalMetaDataStaticWithType {
    /**
     *
     * @type {number}
     * @memberof GdalMetaDataStaticWithType
     */
    cacheTtl?: number;
    /**
     *
     * @type {GdalDatasetParameters}
     * @memberof GdalMetaDataStaticWithType
     */
    params: GdalDatasetParameters;
    /**
     *
     * @type {RasterResultDescriptor}
     * @memberof GdalMetaDataStaticWithType
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     *
     * @type {TimeInterval}
     * @memberof GdalMetaDataStaticWithType
     */
    time?: TimeInterval | null;
    /**
     *
     * @type {string}
     * @memberof GdalMetaDataStaticWithType
     */
    type: GdalMetaDataStaticWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const GdalMetaDataStaticWithTypeTypeEnum: {
    readonly GdalStatic: "GdalStatic";
};
export type GdalMetaDataStaticWithTypeTypeEnum = typeof GdalMetaDataStaticWithTypeTypeEnum[keyof typeof GdalMetaDataStaticWithTypeTypeEnum];
/**
 * Check if a given object implements the GdalMetaDataStaticWithType interface.
 */
export declare function instanceOfGdalMetaDataStaticWithType(value: object): boolean;
export declare function GdalMetaDataStaticWithTypeFromJSON(json: any): GdalMetaDataStaticWithType;
export declare function GdalMetaDataStaticWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetaDataStaticWithType;
export declare function GdalMetaDataStaticWithTypeToJSON(value?: GdalMetaDataStaticWithType | null): any;