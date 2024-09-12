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
import type { GeoTransform } from './GeoTransform';
import {
    GeoTransformFromJSON,
    GeoTransformFromJSONTyped,
    GeoTransformToJSON,
} from './GeoTransform';
import type { GridBoundingBox2D } from './GridBoundingBox2D';
import {
    GridBoundingBox2DFromJSON,
    GridBoundingBox2DFromJSONTyped,
    GridBoundingBox2DToJSON,
} from './GridBoundingBox2D';

/**
 * 
 * @export
 * @interface SpatialGridDefinition
 */
export interface SpatialGridDefinition {
    /**
     * 
     * @type {GeoTransform}
     * @memberof SpatialGridDefinition
     */
    geoTransform: GeoTransform;
    /**
     * 
     * @type {GridBoundingBox2D}
     * @memberof SpatialGridDefinition
     */
    gridBounds: GridBoundingBox2D;
}

/**
 * Check if a given object implements the SpatialGridDefinition interface.
 */
export function instanceOfSpatialGridDefinition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "geoTransform" in value;
    isInstance = isInstance && "gridBounds" in value;

    return isInstance;
}

export function SpatialGridDefinitionFromJSON(json: any): SpatialGridDefinition {
    return SpatialGridDefinitionFromJSONTyped(json, false);
}

export function SpatialGridDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatialGridDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'geoTransform': GeoTransformFromJSON(json['geoTransform']),
        'gridBounds': GridBoundingBox2DFromJSON(json['gridBounds']),
    };
}

export function SpatialGridDefinitionToJSON(value?: SpatialGridDefinition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'geoTransform': GeoTransformToJSON(value.geoTransform),
        'gridBounds': GridBoundingBox2DToJSON(value.gridBounds),
    };
}

