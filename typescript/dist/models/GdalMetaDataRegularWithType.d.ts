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
import type { GdalSourceTimePlaceholder } from './GdalSourceTimePlaceholder';
import type { RasterResultDescriptor } from './RasterResultDescriptor';
import type { TimeInterval } from './TimeInterval';
import type { TimeStep } from './TimeStep';
/**
 *
 * @export
 * @interface GdalMetaDataRegularWithType
 */
export interface GdalMetaDataRegularWithType {
    /**
     *
     * @type {number}
     * @memberof GdalMetaDataRegularWithType
     */
    cacheTtl?: number;
    /**
     *
     * @type {TimeInterval}
     * @memberof GdalMetaDataRegularWithType
     */
    dataTime: TimeInterval;
    /**
     *
     * @type {GdalDatasetParameters}
     * @memberof GdalMetaDataRegularWithType
     */
    params: GdalDatasetParameters;
    /**
     *
     * @type {RasterResultDescriptor}
     * @memberof GdalMetaDataRegularWithType
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     *
     * @type {TimeStep}
     * @memberof GdalMetaDataRegularWithType
     */
    step: TimeStep;
    /**
     *
     * @type {{ [key: string]: GdalSourceTimePlaceholder; }}
     * @memberof GdalMetaDataRegularWithType
     */
    timePlaceholders: {
        [key: string]: GdalSourceTimePlaceholder;
    };
    /**
     *
     * @type {string}
     * @memberof GdalMetaDataRegularWithType
     */
    type: GdalMetaDataRegularWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const GdalMetaDataRegularWithTypeTypeEnum: {
    readonly GdalMetaDataRegular: "GdalMetaDataRegular";
};
export type GdalMetaDataRegularWithTypeTypeEnum = typeof GdalMetaDataRegularWithTypeTypeEnum[keyof typeof GdalMetaDataRegularWithTypeTypeEnum];
/**
 * Check if a given object implements the GdalMetaDataRegularWithType interface.
 */
export declare function instanceOfGdalMetaDataRegularWithType(value: object): boolean;
export declare function GdalMetaDataRegularWithTypeFromJSON(json: any): GdalMetaDataRegularWithType;
export declare function GdalMetaDataRegularWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetaDataRegularWithType;
export declare function GdalMetaDataRegularWithTypeToJSON(value?: GdalMetaDataRegularWithType | null): any;
