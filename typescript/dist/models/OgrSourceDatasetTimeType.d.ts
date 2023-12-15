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
import { NoneOgrSourceDatasetTimeType } from './NoneOgrSourceDatasetTimeType';
import { StartDurationOgrSourceDatasetTimeType } from './StartDurationOgrSourceDatasetTimeType';
import { StartEndOgrSourceDatasetTimeType } from './StartEndOgrSourceDatasetTimeType';
import { StartOgrSourceDatasetTimeType } from './StartOgrSourceDatasetTimeType';
/**
 * @type OgrSourceDatasetTimeType
 *
 * @export
 */
export type OgrSourceDatasetTimeType = {
    type: 'none';
} & NoneOgrSourceDatasetTimeType | {
    type: 'start';
} & StartOgrSourceDatasetTimeType | {
    type: 'startDuration';
} & StartDurationOgrSourceDatasetTimeType | {
    type: 'startEnd';
} & StartEndOgrSourceDatasetTimeType;
export declare function OgrSourceDatasetTimeTypeFromJSON(json: any): OgrSourceDatasetTimeType;
export declare function OgrSourceDatasetTimeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDatasetTimeType;
export declare function OgrSourceDatasetTimeTypeToJSON(value?: OgrSourceDatasetTimeType | null): any;
