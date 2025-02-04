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
import { TypedPlotResultDescriptor } from './TypedPlotResultDescriptor';
import { TypedRasterResultDescriptor } from './TypedRasterResultDescriptor';
import { TypedVectorResultDescriptor } from './TypedVectorResultDescriptor';
/**
 * @type TypedResultDescriptor
 *
 * @export
 */
export type TypedResultDescriptor = {
    type: 'plot';
} & TypedPlotResultDescriptor | {
    type: 'raster';
} & TypedRasterResultDescriptor | {
    type: 'vector';
} & TypedVectorResultDescriptor;
export declare function TypedResultDescriptorFromJSON(json: any): TypedResultDescriptor;
export declare function TypedResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedResultDescriptor;
export declare function TypedResultDescriptorToJSON(value?: TypedResultDescriptor | null): any;
