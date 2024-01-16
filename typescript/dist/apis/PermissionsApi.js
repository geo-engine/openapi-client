"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class PermissionsApi extends runtime.BaseAPI {
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
                body: (0, index_1.PermissionRequestToJSON)(requestParameters.permissionRequest),
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
                body: (0, index_1.PermissionRequestToJSON)(requestParameters.permissionRequest),
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
exports.PermissionsApi = PermissionsApi;
