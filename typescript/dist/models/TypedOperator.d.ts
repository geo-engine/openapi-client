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
import type { TypedOperatorOperator } from './TypedOperatorOperator';
/**
 * An enum to differentiate between `Operator` variants
 * @export
 * @interface TypedOperator
 */
export interface TypedOperator {
    /**
     *
     * @type {TypedOperatorOperator}
     * @memberof TypedOperator
     */
    operator: TypedOperatorOperator;
    /**
     *
     * @type {string}
     * @memberof TypedOperator
     */
    type: TypedOperatorTypeEnum;
}
/**
 * @export
 */
export declare const TypedOperatorTypeEnum: {
    readonly Vector: "Vector";
    readonly Raster: "Raster";
    readonly Plot: "Plot";
};
export type TypedOperatorTypeEnum = typeof TypedOperatorTypeEnum[keyof typeof TypedOperatorTypeEnum];
/**
 * Check if a given object implements the TypedOperator interface.
 */
export declare function instanceOfTypedOperator(value: object): value is TypedOperator;
export declare function TypedOperatorFromJSON(json: any): TypedOperator;
export declare function TypedOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedOperator;
export declare function TypedOperatorToJSON(value?: TypedOperator | null): any;
