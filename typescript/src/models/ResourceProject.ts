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
/**
 * 
 * @export
 * @interface ResourceProject
 */
export interface ResourceProject {
    /**
     * 
     * @type {string}
     * @memberof ResourceProject
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceProject
     */
    type: ResourceProjectTypeEnum;
}


/**
 * @export
 */
export const ResourceProjectTypeEnum = {
    Project: 'project'
} as const;
export type ResourceProjectTypeEnum = typeof ResourceProjectTypeEnum[keyof typeof ResourceProjectTypeEnum];


/**
 * Check if a given object implements the ResourceProject interface.
 */
export function instanceOfResourceProject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ResourceProjectFromJSON(json: any): ResourceProject {
    return ResourceProjectFromJSONTyped(json, false);
}

export function ResourceProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ResourceProjectToJSON(value?: ResourceProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
    };
}

