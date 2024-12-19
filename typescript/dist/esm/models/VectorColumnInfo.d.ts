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
import type { FeatureDataType } from './FeatureDataType';
import type { Measurement } from './Measurement';
/**
 *
 * @export
 * @interface VectorColumnInfo
 */
export interface VectorColumnInfo {
    /**
     *
     * @type {FeatureDataType}
     * @memberof VectorColumnInfo
     */
    dataType: FeatureDataType;
    /**
     *
     * @type {Measurement}
     * @memberof VectorColumnInfo
     */
    measurement: Measurement;
}
/**
 * Check if a given object implements the VectorColumnInfo interface.
 */
export declare function instanceOfVectorColumnInfo(value: object): boolean;
export declare function VectorColumnInfoFromJSON(json: any): VectorColumnInfo;
export declare function VectorColumnInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VectorColumnInfo;
export declare function VectorColumnInfoToJSON(value?: VectorColumnInfo | null): any;
