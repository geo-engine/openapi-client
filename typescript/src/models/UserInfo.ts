/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
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
export function instanceOfUserInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UserInfoFromJSON(json: any): UserInfo {
    return UserInfoFromJSONTyped(json, false);
}

export function UserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'id': json['id'],
        'realName': !exists(json, 'realName') ? undefined : json['realName'],
    };
}

export function UserInfoToJSON(value?: UserInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'id': value.id,
        'realName': value.realName,
    };
}
