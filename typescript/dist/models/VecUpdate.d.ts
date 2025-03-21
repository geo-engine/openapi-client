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
import type { Plot } from './Plot';
import type { ProjectUpdateToken } from './ProjectUpdateToken';
/**
 * @type VecUpdate
 *
 * @export
 */
export type VecUpdate = Plot | ProjectUpdateToken;
export declare function VecUpdateFromJSON(json: any): VecUpdate;
export declare function VecUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): VecUpdate;
export declare function VecUpdateToJSON(json: any): any;
export declare function VecUpdateToJSONTyped(value?: VecUpdate | null, ignoreDiscriminator?: boolean): any;
