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
 * @interface UpdateLayerCollection
 */
export interface UpdateLayerCollection {
    /**
     * 
     * @type {string}
     * @memberof UpdateLayerCollection
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateLayerCollection
     */
    name: string;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof UpdateLayerCollection
     */
    properties?: Array<Array<string>>;
}

/**
 * Check if a given object implements the UpdateLayerCollection interface.
 */
export function instanceOfUpdateLayerCollection(value: object): value is UpdateLayerCollection {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function UpdateLayerCollectionFromJSON(json: any): UpdateLayerCollection {
    return UpdateLayerCollectionFromJSONTyped(json, false);
}

export function UpdateLayerCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLayerCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'name': json['name'],
        'properties': json['properties'] == null ? undefined : json['properties'],
    };
}

export function UpdateLayerCollectionToJSON(json: any): UpdateLayerCollection {
    return UpdateLayerCollectionToJSONTyped(json, false);
}

export function UpdateLayerCollectionToJSONTyped(value?: UpdateLayerCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'name': value['name'],
        'properties': value['properties'],
    };
}

