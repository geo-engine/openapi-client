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
 * @interface UserInfo
 */
export interface UserInfo {
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserInfo
     */
    realName?: string | null;
}

/**
 * Check if a given object implements the UserInfo interface.
 */
export function instanceOfUserInfo(value: object): value is UserInfo {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function UserInfoFromJSON(json: any): UserInfo {
    return UserInfoFromJSONTyped(json, false);
}

export function UserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'id': json['id'],
        'realName': json['realName'] == null ? undefined : json['realName'],
    };
}

export function UserInfoToJSON(json: any): UserInfo {
    return UserInfoToJSONTyped(json, false);
}

export function UserInfoToJSONTyped(value?: UserInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'id': value['id'],
        'realName': value['realName'],
    };
}

