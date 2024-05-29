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
    email?: string;
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
    realName?: string;
}
/**
 * Check if a given object implements the UserInfo interface.
 */
export declare function instanceOfUserInfo(value: object): boolean;
export declare function UserInfoFromJSON(json: any): UserInfo;
export declare function UserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInfo;
export declare function UserInfoToJSON(value?: UserInfo | null): any;
