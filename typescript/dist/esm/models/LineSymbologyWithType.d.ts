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
import type { StrokeParam } from './StrokeParam';
import type { TextSymbology } from './TextSymbology';
/**
 *
 * @export
 * @interface LineSymbologyWithType
 */
export interface LineSymbologyWithType {
    /**
     *
     * @type {boolean}
     * @memberof LineSymbologyWithType
     */
    autoSimplified: boolean;
    /**
     *
     * @type {StrokeParam}
     * @memberof LineSymbologyWithType
     */
    stroke: StrokeParam;
    /**
     *
     * @type {TextSymbology}
     * @memberof LineSymbologyWithType
     */
    text?: TextSymbology | null;
    /**
     *
     * @type {string}
     * @memberof LineSymbologyWithType
     */
    type: LineSymbologyWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const LineSymbologyWithTypeTypeEnum: {
    readonly Line: "line";
};
export type LineSymbologyWithTypeTypeEnum = typeof LineSymbologyWithTypeTypeEnum[keyof typeof LineSymbologyWithTypeTypeEnum];
/**
 * Check if a given object implements the LineSymbologyWithType interface.
 */
export declare function instanceOfLineSymbologyWithType(value: object): boolean;
export declare function LineSymbologyWithTypeFromJSON(json: any): LineSymbologyWithType;
export declare function LineSymbologyWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineSymbologyWithType;
export declare function LineSymbologyWithTypeToJSON(value?: LineSymbologyWithType | null): any;
