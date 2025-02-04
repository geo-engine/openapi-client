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
import type { STRectangle } from './STRectangle';
import {
    STRectangleFromJSON,
    STRectangleFromJSONTyped,
    STRectangleToJSON,
} from './STRectangle';
import type { TimeStep } from './TimeStep';
import {
    TimeStepFromJSON,
    TimeStepFromJSONTyped,
    TimeStepToJSON,
} from './TimeStep';

/**
 * 
 * @export
 * @interface CreateProject
 */
export interface CreateProject {
    /**
     * 
     * @type {STRectangle}
     * @memberof CreateProject
     */
    bounds: STRectangle;
    /**
     * 
     * @type {string}
     * @memberof CreateProject
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProject
     */
    name: string;
    /**
     * 
     * @type {TimeStep}
     * @memberof CreateProject
     */
    timeStep?: TimeStep | null;
}

/**
 * Check if a given object implements the CreateProject interface.
 */
export function instanceOfCreateProject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bounds" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CreateProjectFromJSON(json: any): CreateProject {
    return CreateProjectFromJSONTyped(json, false);
}

export function CreateProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bounds': STRectangleFromJSON(json['bounds']),
        'description': json['description'],
        'name': json['name'],
        'timeStep': !exists(json, 'timeStep') ? undefined : TimeStepFromJSON(json['timeStep']),
    };
}

export function CreateProjectToJSON(value?: CreateProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bounds': STRectangleToJSON(value.bounds),
        'description': value.description,
        'name': value.name,
        'timeStep': TimeStepToJSON(value.timeStep),
    };
}

