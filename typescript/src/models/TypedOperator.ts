/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { TypedOperatorOperator } from './TypedOperatorOperator';
import {
    TypedOperatorOperatorFromJSON,
    TypedOperatorOperatorFromJSONTyped,
    TypedOperatorOperatorToJSON,
    TypedOperatorOperatorToJSONTyped,
} from './TypedOperatorOperator';

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
export const TypedOperatorTypeEnum = {
    Vector: 'Vector',
    Raster: 'Raster',
    Plot: 'Plot'
} as const;
export type TypedOperatorTypeEnum = typeof TypedOperatorTypeEnum[keyof typeof TypedOperatorTypeEnum];


/**
 * Check if a given object implements the TypedOperator interface.
 */
export function instanceOfTypedOperator(value: object): value is TypedOperator {
    if (!('operator' in value) || value['operator'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TypedOperatorFromJSON(json: any): TypedOperator {
    return TypedOperatorFromJSONTyped(json, false);
}

export function TypedOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedOperator {
    if (json == null) {
        return json;
    }
    return {
        
        'operator': TypedOperatorOperatorFromJSON(json['operator']),
        'type': json['type'],
    };
}

export function TypedOperatorToJSON(json: any): TypedOperator {
    return TypedOperatorToJSONTyped(json, false);
}

export function TypedOperatorToJSONTyped(value?: TypedOperator | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'operator': TypedOperatorOperatorToJSON(value['operator']),
        'type': value['type'],
    };
}

