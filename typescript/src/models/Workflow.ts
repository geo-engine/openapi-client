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
import type { TypedOperatorOperator } from './TypedOperatorOperator';
import {
    TypedOperatorOperatorFromJSON,
    TypedOperatorOperatorFromJSONTyped,
    TypedOperatorOperatorToJSON,
} from './TypedOperatorOperator';

/**
 * 
 * @export
 * @interface Workflow
 */
export interface Workflow {
    /**
     * 
     * @type {TypedOperatorOperator}
     * @memberof Workflow
     */
    operator: TypedOperatorOperator;
    /**
     * 
     * @type {string}
     * @memberof Workflow
     */
    type: WorkflowTypeEnum;
}


/**
 * @export
 */
export const WorkflowTypeEnum = {
    Vector: 'Vector',
    Raster: 'Raster',
    Plot: 'Plot'
} as const;
export type WorkflowTypeEnum = typeof WorkflowTypeEnum[keyof typeof WorkflowTypeEnum];


/**
 * Check if a given object implements the Workflow interface.
 */
export function instanceOfWorkflow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "operator" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function WorkflowFromJSON(json: any): Workflow {
    return WorkflowFromJSONTyped(json, false);
}

export function WorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Workflow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'operator': TypedOperatorOperatorFromJSON(json['operator']),
        'type': json['type'],
    };
}

export function WorkflowToJSON(value?: Workflow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'operator': TypedOperatorOperatorToJSON(value.operator),
        'type': value.type,
    };
}

