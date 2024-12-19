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
import * as runtime from '../runtime';
import type { PermissionListing, PermissionRequest } from '../models/index';
export interface AddPermissionHandlerRequest {
    permissionRequest: PermissionRequest;
}
export interface GetResourcePermissionsHandlerRequest {
    resourceType: string;
    resourceId: string;
    limit: number;
    offset: number;
}
export interface RemovePermissionHandlerRequest {
    permissionRequest: PermissionRequest;
}
/**
 *
 */
export declare class PermissionsApi extends runtime.BaseAPI {
    /**
     * Adds a new permission.
     */
    addPermissionHandlerRaw(requestParameters: AddPermissionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Adds a new permission.
     */
    addPermissionHandler(requestParameters: AddPermissionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Lists permission for a given resource.
     */
    getResourcePermissionsHandlerRaw(requestParameters: GetResourcePermissionsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PermissionListing>>>;
    /**
     * Lists permission for a given resource.
     */
    getResourcePermissionsHandler(requestParameters: GetResourcePermissionsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PermissionListing>>;
    /**
     * Removes an existing permission.
     */
    removePermissionHandlerRaw(requestParameters: RemovePermissionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Removes an existing permission.
     */
    removePermissionHandler(requestParameters: RemovePermissionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
