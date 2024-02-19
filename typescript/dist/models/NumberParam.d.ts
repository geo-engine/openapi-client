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
import { DerivedNumberWithType } from './DerivedNumberWithType';
import { StaticNumberParam } from './StaticNumberParam';
/**
 * @type NumberParam
 *
 * @export
 */
export type NumberParam = {
    type: 'derived';
} & DerivedNumberWithType | {
    type: 'static';
} & StaticNumberParam;
export declare function NumberParamFromJSON(json: any): NumberParam;
export declare function NumberParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumberParam;
export declare function NumberParamToJSON(value?: NumberParam | null): any;