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
import { DatasetResource } from './DatasetResource';
import { LayerCollectionResource } from './LayerCollectionResource';
import { LayerResource } from './LayerResource';
import { ProjectResource } from './ProjectResource';
/**
 * @type Resource
 *
 * @export
 */
export type Resource = {
    type: 'dataset';
} & DatasetResource | {
    type: 'layer';
} & LayerResource | {
    type: 'layerCollection';
} & LayerCollectionResource | {
    type: 'project';
} & ProjectResource;
export declare function ResourceFromJSON(json: any): Resource;
export declare function ResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resource;
export declare function ResourceToJSON(value?: Resource | null): any;
