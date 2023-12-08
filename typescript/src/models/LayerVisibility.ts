/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LayerVisibility
 */
export interface LayerVisibility {
    /**
     * 
     * @type {boolean}
     * @memberof LayerVisibility
     */
    data: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LayerVisibility
     */
    legend: boolean;
}

/**
 * Check if a given object implements the LayerVisibility interface.
 */
export function instanceOfLayerVisibility(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "legend" in value;

    return isInstance;
}

export function LayerVisibilityFromJSON(json: any): LayerVisibility {
    return LayerVisibilityFromJSONTyped(json, false);
}

export function LayerVisibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerVisibility {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': json['data'],
        'legend': json['legend'],
    };
}

export function LayerVisibilityToJSON(value?: LayerVisibility | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'legend': value.legend,
    };
}
