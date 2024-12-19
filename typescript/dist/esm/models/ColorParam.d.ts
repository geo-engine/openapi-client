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
import { ColorParamStatic } from './ColorParamStatic';
import { DerivedColor } from './DerivedColor';
/**
 * @type ColorParam
 *
 * @export
 */
export type ColorParam = {
    type: 'derived';
} & DerivedColor | {
    type: 'static';
} & ColorParamStatic;
export declare function ColorParamFromJSON(json: any): ColorParam;
export declare function ColorParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorParam;
export declare function ColorParamToJSON(value?: ColorParam | null): any;
