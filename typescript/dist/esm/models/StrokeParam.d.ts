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
import type { ColorParam } from './ColorParam';
import type { NumberParam } from './NumberParam';
/**
 *
 * @export
 * @interface StrokeParam
 */
export interface StrokeParam {
    /**
     *
     * @type {ColorParam}
     * @memberof StrokeParam
     */
    color: ColorParam;
    /**
     *
     * @type {NumberParam}
     * @memberof StrokeParam
     */
    width: NumberParam;
}
/**
 * Check if a given object implements the StrokeParam interface.
 */
export declare function instanceOfStrokeParam(value: object): boolean;
export declare function StrokeParamFromJSON(json: any): StrokeParam;
export declare function StrokeParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrokeParam;
export declare function StrokeParamToJSON(value?: StrokeParam | null): any;
