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
 * @interface AddCollection200Response
 */
export interface AddCollection200Response {
    /**
     * 
     * @type {string}
     * @memberof AddCollection200Response
     */
    id: string;
}

/**
 * Check if a given object implements the AddCollection200Response interface.
 */
export function instanceOfAddCollection200Response(value: object): value is AddCollection200Response {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AddCollection200ResponseFromJSON(json: any): AddCollection200Response {
    return AddCollection200ResponseFromJSONTyped(json, false);
}

export function AddCollection200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddCollection200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function AddCollection200ResponseToJSON(json: any): AddCollection200Response {
    return AddCollection200ResponseToJSONTyped(json, false);
}

export function AddCollection200ResponseToJSONTyped(value?: AddCollection200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}

