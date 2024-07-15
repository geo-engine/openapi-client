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
import { TypedGeometryOneOf } from './TypedGeometryOneOf';
import { TypedGeometryOneOf1 } from './TypedGeometryOneOf1';
import { TypedGeometryOneOf2 } from './TypedGeometryOneOf2';
import { TypedGeometryOneOf3 } from './TypedGeometryOneOf3';
/**
 * @type TypedGeometry
 *
 * @export
 */
export type TypedGeometry = TypedGeometryOneOf | TypedGeometryOneOf1 | TypedGeometryOneOf2 | TypedGeometryOneOf3;
export declare function TypedGeometryFromJSON(json: any): TypedGeometry;
export declare function TypedGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedGeometry;
export declare function TypedGeometryToJSON(value?: TypedGeometry | null): any;
