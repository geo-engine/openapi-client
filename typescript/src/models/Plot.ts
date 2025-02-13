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
/**
 * 
 * @export
 * @interface Plot
 */
export interface Plot {
    /**
     * 
     * @type {string}
     * @memberof Plot
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Plot
     */
    workflow: string;
}

/**
 * Check if a given object implements the Plot interface.
 */
export function instanceOfPlot(value: object): value is Plot {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('workflow' in value) || value['workflow'] === undefined) return false;
    return true;
}

export function PlotFromJSON(json: any): Plot {
    return PlotFromJSONTyped(json, false);
}

export function PlotFromJSONTyped(json: any, ignoreDiscriminator: boolean): Plot {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'workflow': json['workflow'],
    };
}

export function PlotToJSON(json: any): Plot {
    return PlotToJSONTyped(json, false);
}

export function PlotToJSONTyped(value?: Plot | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'workflow': value['workflow'],
    };
}

