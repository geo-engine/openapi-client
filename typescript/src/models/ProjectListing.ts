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
/**
 * 
 * @export
 * @interface ProjectListing
 */
export interface ProjectListing {
    /**
     * 
     * @type {Date}
     * @memberof ProjectListing
     */
    changed: Date;
    /**
     * 
     * @type {string}
     * @memberof ProjectListing
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectListing
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectListing
     */
    layerNames: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProjectListing
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectListing
     */
    plotNames: Array<string>;
}

/**
 * Check if a given object implements the ProjectListing interface.
 */
export function instanceOfProjectListing(value: object): boolean {
    if (!('changed' in value)) return false;
    if (!('description' in value)) return false;
    if (!('id' in value)) return false;
    if (!('layerNames' in value)) return false;
    if (!('name' in value)) return false;
    if (!('plotNames' in value)) return false;
    return true;
}

export function ProjectListingFromJSON(json: any): ProjectListing {
    return ProjectListingFromJSONTyped(json, false);
}

export function ProjectListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectListing {
    if (json == null) {
        return json;
    }
    return {
        
        'changed': (new Date(json['changed'])),
        'description': json['description'],
        'id': json['id'],
        'layerNames': json['layerNames'],
        'name': json['name'],
        'plotNames': json['plotNames'],
    };
}

export function ProjectListingToJSON(value?: ProjectListing | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'changed': ((value['changed']).toISOString()),
        'description': value['description'],
        'id': value['id'],
        'layerNames': value['layerNames'],
        'name': value['name'],
        'plotNames': value['plotNames'],
    };
}

