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
import type { STRectangle } from './STRectangle';
import {
    STRectangleFromJSON,
    STRectangleFromJSONTyped,
    STRectangleToJSON,
    STRectangleToJSONTyped,
} from './STRectangle';
import type { UserInfo } from './UserInfo';
import {
    UserInfoFromJSON,
    UserInfoFromJSONTyped,
    UserInfoToJSON,
    UserInfoToJSONTyped,
} from './UserInfo';

/**
 * 
 * @export
 * @interface UserSession
 */
export interface UserSession {
    /**
     * 
     * @type {Date}
     * @memberof UserSession
     */
    created: Date;
    /**
     * 
     * @type {string}
     * @memberof UserSession
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserSession
     */
    project?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserSession
     */
    roles: Array<string>;
    /**
     * 
     * @type {UserInfo}
     * @memberof UserSession
     */
    user: UserInfo;
    /**
     * 
     * @type {Date}
     * @memberof UserSession
     */
    validUntil: Date;
    /**
     * 
     * @type {STRectangle}
     * @memberof UserSession
     */
    view?: STRectangle | null;
}

/**
 * Check if a given object implements the UserSession interface.
 */
export function instanceOfUserSession(value: object): value is UserSession {
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('roles' in value) || value['roles'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('validUntil' in value) || value['validUntil'] === undefined) return false;
    return true;
}

export function UserSessionFromJSON(json: any): UserSession {
    return UserSessionFromJSONTyped(json, false);
}

export function UserSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSession {
    if (json == null) {
        return json;
    }
    return {
        
        'created': (new Date(json['created'])),
        'id': json['id'],
        'project': json['project'] == null ? undefined : json['project'],
        'roles': json['roles'],
        'user': UserInfoFromJSON(json['user']),
        'validUntil': (new Date(json['validUntil'])),
        'view': json['view'] == null ? undefined : STRectangleFromJSON(json['view']),
    };
}

export function UserSessionToJSON(json: any): UserSession {
    return UserSessionToJSONTyped(json, false);
}

export function UserSessionToJSONTyped(value?: UserSession | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created': ((value['created']).toISOString()),
        'id': value['id'],
        'project': value['project'],
        'roles': value['roles'],
        'user': UserInfoToJSON(value['user']),
        'validUntil': ((value['validUntil']).toISOString()),
        'view': STRectangleToJSON(value['view']),
    };
}

