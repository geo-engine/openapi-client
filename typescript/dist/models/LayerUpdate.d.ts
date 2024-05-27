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
import type { ProjectLayer } from './ProjectLayer';
import type { ProjectUpdateToken } from './ProjectUpdateToken';
/**
 * @type LayerUpdate
 *
 * @export
 */
export type LayerUpdate = ProjectLayer | ProjectUpdateToken;
export declare function LayerUpdateFromJSON(json: any): LayerUpdate;
export declare function LayerUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerUpdate;
export declare function LayerUpdateToJSON(value?: LayerUpdate | null): any;
