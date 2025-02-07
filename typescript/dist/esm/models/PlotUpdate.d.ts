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
import { Plot } from './Plot';
import { ProjectUpdateToken } from './ProjectUpdateToken';
/**
 * @type PlotUpdate
 *
 * @export
 */
export type PlotUpdate = Plot | ProjectUpdateToken;
export declare function PlotUpdateFromJSON(json: any): PlotUpdate;
export declare function PlotUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotUpdate;
export declare function PlotUpdateToJSON(value?: PlotUpdate | null): any;
