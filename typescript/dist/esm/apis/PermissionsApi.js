/* tslint:disable */
/* eslint-disable */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { PermissionListingFromJSON, PermissionRequestToJSON, } from '../models/index';
/**
 *
 */
export class PermissionsApi extends runtime.BaseAPI {
    /**
     * Adds a new permission.
     * Adds a new permission.
     */
    addPermissionHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.permissionRequest === null || requestParameters.permissionRequest === undefined) {
                throw new runtime.RequiredError('permissionRequest', 'Required parameter requestParameters.permissionRequest was null or undefined when calling addPermissionHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/permissions`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: PermissionRequestToJSON(requestParameters.permissionRequest),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Adds a new permission.
     * Adds a new permission.
     */
    addPermissionHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addPermissionHandlerRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Lists permission for a given resource.
     * Lists permission for a given resource.
     */
    getResourcePermissionsHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.resourceType === null || requestParameters.resourceType === undefined) {
                throw new runtime.RequiredError('resourceType', 'Required parameter requestParameters.resourceType was null or undefined when calling getResourcePermissionsHandler.');
            }
            if (requestParameters.resourceId === null || requestParameters.resourceId === undefined) {
                throw new runtime.RequiredError('resourceId', 'Required parameter requestParameters.resourceId was null or undefined when calling getResourcePermissionsHandler.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling getResourcePermissionsHandler.');
            }
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling getResourcePermissionsHandler.');
            }
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/permissions/resources/{resource_type}/{resource_id}`.replace(`{${"resource_type"}}`, encodeURIComponent(String(requestParameters.resourceType))).replace(`{${"resource_id"}}`, encodeURIComponent(String(requestParameters.resourceId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PermissionListingFromJSON));
        });
    }
    /**
     * Lists permission for a given resource.
     * Lists permission for a given resource.
     */
    getResourcePermissionsHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getResourcePermissionsHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Removes an existing permission.
     * Removes an existing permission.
     */
    removePermissionHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.permissionRequest === null || requestParameters.permissionRequest === undefined) {
                throw new runtime.RequiredError('permissionRequest', 'Required parameter requestParameters.permissionRequest was null or undefined when calling removePermissionHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/permissions`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: PermissionRequestToJSON(requestParameters.permissionRequest),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Removes an existing permission.
     * Removes an existing permission.
     */
    removePermissionHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removePermissionHandlerRaw(requestParameters, initOverrides);
        });
    }
}
