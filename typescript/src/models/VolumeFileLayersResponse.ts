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
 * @interface VolumeFileLayersResponse
 */
export interface VolumeFileLayersResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof VolumeFileLayersResponse
     */
    layers: Array<string>;
}

/**
 * Check if a given object implements the VolumeFileLayersResponse interface.
 */
export function instanceOfVolumeFileLayersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "layers" in value;

    return isInstance;
}

export function VolumeFileLayersResponseFromJSON(json: any): VolumeFileLayersResponse {
    return VolumeFileLayersResponseFromJSONTyped(json, false);
}

export function VolumeFileLayersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VolumeFileLayersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'layers': json['layers'],
    };
}

export function VolumeFileLayersResponseToJSON(value?: VolumeFileLayersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'layers': value.layers,
    };
}

