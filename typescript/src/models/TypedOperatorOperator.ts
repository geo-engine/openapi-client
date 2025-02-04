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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TypedOperatorOperator
 */
export interface TypedOperatorOperator {
    /**
     * 
     * @type {object}
     * @memberof TypedOperatorOperator
     */
    params?: object;
    /**
     * 
     * @type {object}
     * @memberof TypedOperatorOperator
     */
    sources?: object;
    /**
     * 
     * @type {string}
     * @memberof TypedOperatorOperator
     */
    type: string;
}

/**
 * Check if a given object implements the TypedOperatorOperator interface.
 */
export function instanceOfTypedOperatorOperator(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TypedOperatorOperatorFromJSON(json: any): TypedOperatorOperator {
    return TypedOperatorOperatorFromJSONTyped(json, false);
}

export function TypedOperatorOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedOperatorOperator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'params': !exists(json, 'params') ? undefined : json['params'],
        'sources': !exists(json, 'sources') ? undefined : json['sources'],
        'type': json['type'],
    };
}

export function TypedOperatorOperatorToJSON(value?: TypedOperatorOperator | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'params': value.params,
        'sources': value.sources,
        'type': value.type,
    };
}

