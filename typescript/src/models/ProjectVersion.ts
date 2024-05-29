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
 * @interface ProjectVersion
 */
export interface ProjectVersion {
    /**
     * 
     * @type {Date}
     * @memberof ProjectVersion
     */
    changed: Date;
    /**
     * 
     * @type {string}
     * @memberof ProjectVersion
     */
    id: string;
}

/**
 * Check if a given object implements the ProjectVersion interface.
 */
export function instanceOfProjectVersion(value: object): boolean {
    if (!('changed' in value)) return false;
    if (!('id' in value)) return false;
    return true;
}

export function ProjectVersionFromJSON(json: any): ProjectVersion {
    return ProjectVersionFromJSONTyped(json, false);
}

export function ProjectVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'changed': (new Date(json['changed'])),
        'id': json['id'],
    };
}

export function ProjectVersionToJSON(value?: ProjectVersion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'changed': ((value['changed']).toISOString()),
        'id': value['id'],
    };
}

