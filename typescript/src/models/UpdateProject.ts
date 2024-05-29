/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { LayerUpdate } from './LayerUpdate';
import {
    LayerUpdateFromJSON,
    LayerUpdateFromJSONTyped,
    LayerUpdateToJSON,
} from './LayerUpdate';
import type { PlotUpdate } from './PlotUpdate';
import {
    PlotUpdateFromJSON,
    PlotUpdateFromJSONTyped,
    PlotUpdateToJSON,
} from './PlotUpdate';
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
 * @interface UpdateProject
 */
export interface UpdateProject {
    /**
     * 
     * @type {STRectangle}
     * @memberof UpdateProject
     */
    bounds?: STRectangle;
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    id: string;
    /**
     * 
     * @type {Array<LayerUpdate>}
     * @memberof UpdateProject
     */
    layers?: Array<LayerUpdate>;
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    name?: string;
    /**
     * 
     * @type {Array<PlotUpdate>}
     * @memberof UpdateProject
     */
    plots?: Array<PlotUpdate>;
    /**
     * 
     * @type {TimeStep}
     * @memberof UpdateProject
     */
    timeStep?: TimeStep;
}

/**
 * Check if a given object implements the UpdateProject interface.
 */
export function instanceOfUpdateProject(value: object): boolean {
    if (!('id' in value)) return false;
    return true;
}

export function UpdateProjectFromJSON(json: any): UpdateProject {
    return UpdateProjectFromJSONTyped(json, false);
}

export function UpdateProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProject {
    if (json == null) {
        return json;
    }
    return {
        
        'bounds': json['bounds'] == null ? undefined : STRectangleFromJSON(json['bounds']),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'],
        'layers': json['layers'] == null ? undefined : ((json['layers'] as Array<any>).map(LayerUpdateFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'plots': json['plots'] == null ? undefined : ((json['plots'] as Array<any>).map(PlotUpdateFromJSON)),
        'timeStep': json['timeStep'] == null ? undefined : TimeStepFromJSON(json['timeStep']),
    };
}

export function UpdateProjectToJSON(value?: UpdateProject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bounds': STRectangleToJSON(value['bounds']),
        'description': value['description'],
        'id': value['id'],
        'layers': value['layers'] == null ? undefined : ((value['layers'] as Array<any>).map(LayerUpdateToJSON)),
        'name': value['name'],
        'plots': value['plots'] == null ? undefined : ((value['plots'] as Array<any>).map(PlotUpdateToJSON)),
        'timeStep': TimeStepToJSON(value['timeStep']),
    };
}

