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
 * @interface AddRole
 */
export interface AddRole {
    /**
     *
     * @type {string}
     * @memberof AddRole
     */
    name: string;
}
/**
 * Check if a given object implements the AddRole interface.
 */
export declare function instanceOfAddRole(value: object): value is AddRole;
export declare function AddRoleFromJSON(json: any): AddRole;
export declare function AddRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddRole;
export declare function AddRoleToJSON(json: any): AddRole;
export declare function AddRoleToJSONTyped(value?: AddRole | null, ignoreDiscriminator?: boolean): any;
