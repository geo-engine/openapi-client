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
/**
 *
 * @export
 * @interface UserRegistration
 */
export interface UserRegistration {
    /**
     *
     * @type {string}
     * @memberof UserRegistration
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof UserRegistration
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof UserRegistration
     */
    realName: string;
}
/**
 * Check if a given object implements the UserRegistration interface.
 */
export declare function instanceOfUserRegistration(value: object): boolean;
export declare function UserRegistrationFromJSON(json: any): UserRegistration;
export declare function UserRegistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRegistration;
export declare function UserRegistrationToJSON(value?: UserRegistration | null): any;
