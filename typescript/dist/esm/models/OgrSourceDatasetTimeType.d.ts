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
import { OgrSourceDatasetTimeTypeNone } from './OgrSourceDatasetTimeTypeNone';
import { OgrSourceDatasetTimeTypeStart } from './OgrSourceDatasetTimeTypeStart';
import { OgrSourceDatasetTimeTypeStartDuration } from './OgrSourceDatasetTimeTypeStartDuration';
import { OgrSourceDatasetTimeTypeStartEnd } from './OgrSourceDatasetTimeTypeStartEnd';
/**
 * @type OgrSourceDatasetTimeType
 *
 * @export
 */
export type OgrSourceDatasetTimeType = {
    type: 'none';
} & OgrSourceDatasetTimeTypeNone | {
    type: 'start';
} & OgrSourceDatasetTimeTypeStart | {
    type: 'start+duration';
} & OgrSourceDatasetTimeTypeStartDuration | {
    type: 'start+end';
} & OgrSourceDatasetTimeTypeStartEnd;
export declare function OgrSourceDatasetTimeTypeFromJSON(json: any): OgrSourceDatasetTimeType;
export declare function OgrSourceDatasetTimeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDatasetTimeType;
export declare function OgrSourceDatasetTimeTypeToJSON(value?: OgrSourceDatasetTimeType | null): any;
