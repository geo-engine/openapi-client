"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class UserApi extends runtime.BaseAPI {
    /**
     * Add a new role. Requires admin privilige.
     */
    addRoleHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.addRole === null || requestParameters.addRole === undefined) {
                throw new runtime.RequiredError('addRole', 'Required parameter requestParameters.addRole was null or undefined when calling addRoleHandler.');
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
                path: `/roles`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.AddRoleToJSON)(requestParameters.addRole),
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Add a new role. Requires admin privilige.
     */
    addRoleHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.addRoleHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Assign a role to a user. Requires admin privilige.
     */
    assignRoleHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.user === null || requestParameters.user === undefined) {
                throw new runtime.RequiredError('user', 'Required parameter requestParameters.user was null or undefined when calling assignRoleHandler.');
            }
            if (requestParameters.role === null || requestParameters.role === undefined) {
                throw new runtime.RequiredError('role', 'Required parameter requestParameters.role was null or undefined when calling assignRoleHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/users/{user}/roles/{role}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))).replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Assign a role to a user. Requires admin privilige.
     */
    assignRoleHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.assignRoleHandlerRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Retrieves the quota used by computations
     */
    computationsQuotaHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling computationsQuotaHandler.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling computationsQuotaHandler.');
            }
            const queryParameters = {};
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
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
                path: `/quota/computations`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.ComputationQuotaFromJSON));
        });
    }
    /**
     * Retrieves the quota used by computations
     */
    computationsQuotaHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.computationsQuotaHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get role by name
     */
    getRoleByNameHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling getRoleByNameHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/roles/byName/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AddCollection200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get role by name
     */
    getRoleByNameHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRoleByNameHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Query roles for the current user.
     */
    getRoleDescriptionsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/user/roles/descriptions`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.RoleDescriptionFromJSON));
        });
    }
    /**
     * Query roles for the current user.
     */
    getRoleDescriptions(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRoleDescriptionsRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves the available and used quota of a specific user.
     */
    getUserQuotaHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.user === null || requestParameters.user === undefined) {
                throw new runtime.RequiredError('user', 'Required parameter requestParameters.user was null or undefined when calling getUserQuotaHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/quotas/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QuotaFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves the available and used quota of a specific user.
     */
    getUserQuotaHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUserQuotaHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves the available and used quota of the current user.
     */
    quotaHandlerRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/quota`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QuotaFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves the available and used quota of the current user.
     */
    quotaHandler(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.quotaHandlerRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Remove a role. Requires admin privilige.
     */
    removeRoleHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.role === null || requestParameters.role === undefined) {
                throw new runtime.RequiredError('role', 'Required parameter requestParameters.role was null or undefined when calling removeRoleHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Remove a role. Requires admin privilige.
     */
    removeRoleHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeRoleHandlerRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Revoke a role from a user. Requires admin privilige.
     */
    revokeRoleHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.user === null || requestParameters.user === undefined) {
                throw new runtime.RequiredError('user', 'Required parameter requestParameters.user was null or undefined when calling revokeRoleHandler.');
            }
            if (requestParameters.role === null || requestParameters.role === undefined) {
                throw new runtime.RequiredError('role', 'Required parameter requestParameters.role was null or undefined when calling revokeRoleHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/users/{user}/roles/{role}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))).replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Revoke a role from a user. Requires admin privilige.
     */
    revokeRoleHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.revokeRoleHandlerRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Update the available quota of a specific user.
     */
    updateUserQuotaHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.user === null || requestParameters.user === undefined) {
                throw new runtime.RequiredError('user', 'Required parameter requestParameters.user was null or undefined when calling updateUserQuotaHandler.');
            }
            if (requestParameters.updateQuota === null || requestParameters.updateQuota === undefined) {
                throw new runtime.RequiredError('updateQuota', 'Required parameter requestParameters.updateQuota was null or undefined when calling updateUserQuotaHandler.');
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
                path: `/quotas/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.UpdateQuotaToJSON)(requestParameters.updateQuota),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update the available quota of a specific user.
     */
    updateUserQuotaHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateUserQuotaHandlerRaw(requestParameters, initOverrides);
        });
    }
}
exports.UserApi = UserApi;
