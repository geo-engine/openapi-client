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
 * @interface Volume
 */
export interface Volume {
    /**
     * 
     * @type {string}
     * @memberof Volume
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Volume
     */
    path: string;
}

/**
 * Check if a given object implements the Volume interface.
 */
export function instanceOfVolume(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function VolumeFromJSON(json: any): Volume {
    return VolumeFromJSONTyped(json, false);
}

export function VolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Volume {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'path': json['path'],
    };
}

export function VolumeToJSON(value?: Volume | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'path': value.path,
    };
}

