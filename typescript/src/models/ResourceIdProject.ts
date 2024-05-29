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
 * @interface ResourceIdProject
 */
export interface ResourceIdProject {
    /**
     * 
     * @type {string}
     * @memberof ResourceIdProject
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceIdProject
     */
    type: ResourceIdProjectTypeEnum;
}


/**
 * @export
 */
export const ResourceIdProjectTypeEnum = {
    Project: 'Project'
} as const;
export type ResourceIdProjectTypeEnum = typeof ResourceIdProjectTypeEnum[keyof typeof ResourceIdProjectTypeEnum];


/**
 * Check if a given object implements the ResourceIdProject interface.
 */
export function instanceOfResourceIdProject(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ResourceIdProjectFromJSON(json: any): ResourceIdProject {
    return ResourceIdProjectFromJSONTyped(json, false);
}

export function ResourceIdProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdProject {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ResourceIdProjectToJSON(value?: ResourceIdProject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': value['type'],
    };
}

