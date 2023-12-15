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
import type { Breakpoint } from './Breakpoint';
/**
 *
 * @export
 * @interface LogarithmicGradientWithType
 */
export interface LogarithmicGradientWithType {
    /**
     *
     * @type {Array<Breakpoint>}
     * @memberof LogarithmicGradientWithType
     */
    breakpoints: Array<Breakpoint>;
    /**
     *
     * @type {Array<number>}
     * @memberof LogarithmicGradientWithType
     */
    noDataColor: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof LogarithmicGradientWithType
     */
    overColor: Array<number>;
    /**
     *
     * @type {string}
     * @memberof LogarithmicGradientWithType
     */
    type: LogarithmicGradientWithTypeTypeEnum;
    /**
     *
     * @type {Array<number>}
     * @memberof LogarithmicGradientWithType
     */
    underColor: Array<number>;
}
/**
 * @export
 */
export declare const LogarithmicGradientWithTypeTypeEnum: {
    readonly LogarithmicGradient: "logarithmicGradient";
};
export type LogarithmicGradientWithTypeTypeEnum = typeof LogarithmicGradientWithTypeTypeEnum[keyof typeof LogarithmicGradientWithTypeTypeEnum];
/**
 * Check if a given object implements the LogarithmicGradientWithType interface.
 */
export declare function instanceOfLogarithmicGradientWithType(value: object): boolean;
export declare function LogarithmicGradientWithTypeFromJSON(json: any): LogarithmicGradientWithType;
export declare function LogarithmicGradientWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogarithmicGradientWithType;
export declare function LogarithmicGradientWithTypeToJSON(value?: LogarithmicGradientWithType | null): any;
