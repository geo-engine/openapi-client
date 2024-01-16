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
import { DataPathOneOf } from './DataPathOneOf';
import { DataPathOneOf1 } from './DataPathOneOf1';
/**
 * @type DataPath
 *
 * @export
 */
export type DataPath = DataPathOneOf | DataPathOneOf1;
export declare function DataPathFromJSON(json: any): DataPath;
export declare function DataPathFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataPath;
export declare function DataPathToJSON(value?: DataPath | null): any;
