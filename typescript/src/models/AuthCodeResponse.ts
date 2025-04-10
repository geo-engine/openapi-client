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
 * @interface AuthCodeResponse
 */
export interface AuthCodeResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthCodeResponse
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof AuthCodeResponse
     */
    sessionState: string;
    /**
     * 
     * @type {string}
     * @memberof AuthCodeResponse
     */
    state: string;
}

/**
 * Check if a given object implements the AuthCodeResponse interface.
 */
export function instanceOfAuthCodeResponse(value: object): value is AuthCodeResponse {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('sessionState' in value) || value['sessionState'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function AuthCodeResponseFromJSON(json: any): AuthCodeResponse {
    return AuthCodeResponseFromJSONTyped(json, false);
}

export function AuthCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthCodeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'sessionState': json['sessionState'],
        'state': json['state'],
    };
}

export function AuthCodeResponseToJSON(json: any): AuthCodeResponse {
    return AuthCodeResponseToJSONTyped(json, false);
}

export function AuthCodeResponseToJSONTyped(value?: AuthCodeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'sessionState': value['sessionState'],
        'state': value['state'],
    };
}

