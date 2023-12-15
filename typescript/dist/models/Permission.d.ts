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
/**
 *
 * @export
 */
export declare const Permission: {
    readonly Read: "Read";
    readonly Owner: "Owner";
};
export type Permission = typeof Permission[keyof typeof Permission];
export declare function PermissionFromJSON(json: any): Permission;
export declare function PermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Permission;
export declare function PermissionToJSON(value?: Permission | null): any;
