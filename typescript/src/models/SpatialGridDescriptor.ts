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
import type { SpatialGridDefinition } from './SpatialGridDefinition';
import {
    SpatialGridDefinitionFromJSON,
    SpatialGridDefinitionFromJSONTyped,
    SpatialGridDefinitionToJSON,
} from './SpatialGridDefinition';
import type { SpatialGridDescriptorState } from './SpatialGridDescriptorState';
import {
    SpatialGridDescriptorStateFromJSON,
    SpatialGridDescriptorStateFromJSONTyped,
    SpatialGridDescriptorStateToJSON,
} from './SpatialGridDescriptorState';

/**
 * 
 * @export
 * @interface SpatialGridDescriptor
 */
export interface SpatialGridDescriptor {
    /**
     * 
     * @type {SpatialGridDescriptorState}
     * @memberof SpatialGridDescriptor
     */
    descriptor: SpatialGridDescriptorState;
    /**
     * 
     * @type {SpatialGridDefinition}
     * @memberof SpatialGridDescriptor
     */
    spatialGrid: SpatialGridDefinition;
}

/**
 * Check if a given object implements the SpatialGridDescriptor interface.
 */
export function instanceOfSpatialGridDescriptor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "descriptor" in value;
    isInstance = isInstance && "spatialGrid" in value;

    return isInstance;
}

export function SpatialGridDescriptorFromJSON(json: any): SpatialGridDescriptor {
    return SpatialGridDescriptorFromJSONTyped(json, false);
}

export function SpatialGridDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatialGridDescriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'descriptor': SpatialGridDescriptorStateFromJSON(json['descriptor']),
        'spatialGrid': SpatialGridDefinitionFromJSON(json['spatialGrid']),
    };
}

export function SpatialGridDescriptorToJSON(value?: SpatialGridDescriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'descriptor': SpatialGridDescriptorStateToJSON(value.descriptor),
        'spatialGrid': SpatialGridDefinitionToJSON(value.spatialGrid),
    };
}

