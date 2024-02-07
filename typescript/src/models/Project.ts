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

import { exists, mapValues } from '../runtime';
import type { Plot } from './Plot';
import {
    PlotFromJSON,
    PlotFromJSONTyped,
    PlotToJSON,
} from './Plot';
import type { ProjectLayer } from './ProjectLayer';
import {
    ProjectLayerFromJSON,
    ProjectLayerFromJSONTyped,
    ProjectLayerToJSON,
} from './ProjectLayer';
import type { ProjectVersion } from './ProjectVersion';
import {
    ProjectVersionFromJSON,
    ProjectVersionFromJSONTyped,
    ProjectVersionToJSON,
} from './ProjectVersion';
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
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {STRectangle}
     * @memberof Project
     */
    bounds: STRectangle;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    id: string;
    /**
     * 
     * @type {Array<ProjectLayer>}
     * @memberof Project
     */
    layers: Array<ProjectLayer>;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {Array<Plot>}
     * @memberof Project
     */
    plots: Array<Plot>;
    /**
     * 
     * @type {TimeStep}
     * @memberof Project
     */
    timeStep: TimeStep;
    /**
     * 
     * @type {ProjectVersion}
     * @memberof Project
     */
    version: ProjectVersion;
}

/**
 * Check if a given object implements the Project interface.
 */
export function instanceOfProject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bounds" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "layers" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "plots" in value;
    isInstance = isInstance && "timeStep" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bounds': STRectangleFromJSON(json['bounds']),
        'description': json['description'],
        'id': json['id'],
        'layers': ((json['layers'] as Array<any>).map(ProjectLayerFromJSON)),
        'name': json['name'],
        'plots': ((json['plots'] as Array<any>).map(PlotFromJSON)),
        'timeStep': TimeStepFromJSON(json['timeStep']),
        'version': ProjectVersionFromJSON(json['version']),
    };
}

export function ProjectToJSON(value?: Project | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bounds': STRectangleToJSON(value.bounds),
        'description': value.description,
        'id': value.id,
        'layers': ((value.layers as Array<any>).map(ProjectLayerToJSON)),
        'name': value.name,
        'plots': ((value.plots as Array<any>).map(PlotToJSON)),
        'timeStep': TimeStepToJSON(value.timeStep),
        'version': ProjectVersionToJSON(value.version),
    };
}

