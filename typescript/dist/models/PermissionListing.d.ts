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
import type { Role } from './Role';
import type { Permission } from './Permission';
import type { Resource } from './Resource';
/**
 *
 * @export
 * @interface PermissionListing
 */
export interface PermissionListing {
    /**
     *
     * @type {Permission}
     * @memberof PermissionListing
     */
    permission: Permission;
    /**
     *
     * @type {Resource}
     * @memberof PermissionListing
     */
    resource: Resource;
    /**
     *
     * @type {Role}
     * @memberof PermissionListing
     */
    role: Role;
}
/**
 * Check if a given object implements the PermissionListing interface.
 */
export declare function instanceOfPermissionListing(value: object): value is PermissionListing;
export declare function PermissionListingFromJSON(json: any): PermissionListing;
export declare function PermissionListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionListing;
export declare function PermissionListingToJSON(json: any): PermissionListing;
export declare function PermissionListingToJSONTyped(value?: PermissionListing | null, ignoreDiscriminator?: boolean): any;
