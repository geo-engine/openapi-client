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
import type { TextSymbology } from './TextSymbology';
import type { StrokeParam } from './StrokeParam';
/**
 *
 * @export
 * @interface LineSymbology
 */
export interface LineSymbology {
    /**
     *
     * @type {boolean}
     * @memberof LineSymbology
     */
    autoSimplified: boolean;
    /**
     *
     * @type {StrokeParam}
     * @memberof LineSymbology
     */
    stroke: StrokeParam;
    /**
     *
     * @type {TextSymbology}
     * @memberof LineSymbology
     */
    text?: TextSymbology;
}
/**
 * Check if a given object implements the LineSymbology interface.
 */
export declare function instanceOfLineSymbology(value: object): value is LineSymbology;
export declare function LineSymbologyFromJSON(json: any): LineSymbology;
export declare function LineSymbologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineSymbology;
export declare function LineSymbologyToJSON(value?: LineSymbology | null): any;
