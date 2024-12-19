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


import * as runtime from '../runtime';
import type {
  AddCollection200Response,
  AddRole,
  ComputationQuota,
  DataUsage,
  DataUsageSummary,
  OperatorQuota,
  Quota,
  RoleDescription,
  UpdateQuota,
  UsageSummaryGranularity,
} from '../models/index';
import {
    AddCollection200ResponseFromJSON,
    AddCollection200ResponseToJSON,
    AddRoleFromJSON,
    AddRoleToJSON,
    ComputationQuotaFromJSON,
    ComputationQuotaToJSON,
    DataUsageFromJSON,
    DataUsageToJSON,
    DataUsageSummaryFromJSON,
    DataUsageSummaryToJSON,
    OperatorQuotaFromJSON,
    OperatorQuotaToJSON,
    QuotaFromJSON,
    QuotaToJSON,
    RoleDescriptionFromJSON,
    RoleDescriptionToJSON,
    UpdateQuotaFromJSON,
    UpdateQuotaToJSON,
    UsageSummaryGranularityFromJSON,
    UsageSummaryGranularityToJSON,
} from '../models/index';

export interface AddRoleHandlerRequest {
    addRole: AddRole;
}

export interface AssignRoleHandlerRequest {
    user: string;
    role: string;
}

export interface ComputationQuotaHandlerRequest {
    computation: string;
}

export interface ComputationsQuotaHandlerRequest {
    offset: number;
    limit: number;
}

export interface DataUsageHandlerRequest {
    offset: number;
    limit: number;
}

export interface DataUsageSummaryHandlerRequest {
    granularity: UsageSummaryGranularity;
    offset: number;
    limit: number;
    dataset?: string | null;
}

export interface GetRoleByNameHandlerRequest {
    name: string;
}

export interface GetUserQuotaHandlerRequest {
    user: string;
}

export interface RemoveRoleHandlerRequest {
    role: string;
}

export interface RevokeRoleHandlerRequest {
    user: string;
    role: string;
}

export interface UpdateUserQuotaHandlerRequest {
    user: string;
    updateQuota: UpdateQuota;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Add a new role. Requires admin privilige.
     */
    async addRoleHandlerRaw(requestParameters: AddRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.addRole === null || requestParameters.addRole === undefined) {
            throw new runtime.RequiredError('addRole','Required parameter requestParameters.addRole was null or undefined when calling addRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/roles`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AddRoleToJSON(requestParameters.addRole),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Add a new role. Requires admin privilige.
     */
    async addRoleHandler(requestParameters: AddRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.addRoleHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to a user. Requires admin privilige.
     */
    async assignRoleHandlerRaw(requestParameters: AssignRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling assignRoleHandler.');
        }

        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling assignRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{user}/roles/{role}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))).replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Assign a role to a user. Requires admin privilige.
     */
    async assignRoleHandler(requestParameters: AssignRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assignRoleHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the quota used by computations
     */
    async computationQuotaHandlerRaw(requestParameters: ComputationQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OperatorQuota>>> {
        if (requestParameters.computation === null || requestParameters.computation === undefined) {
            throw new runtime.RequiredError('computation','Required parameter requestParameters.computation was null or undefined when calling computationQuotaHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quota/computations/{computation}`.replace(`{${"computation"}}`, encodeURIComponent(String(requestParameters.computation))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OperatorQuotaFromJSON));
    }

    /**
     * Retrieves the quota used by computations
     */
    async computationQuotaHandler(requestParameters: ComputationQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OperatorQuota>> {
        const response = await this.computationQuotaHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the quota used by computations
     */
    async computationsQuotaHandlerRaw(requestParameters: ComputationsQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ComputationQuota>>> {
        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling computationsQuotaHandler.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling computationsQuotaHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quota/computations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ComputationQuotaFromJSON));
    }

    /**
     * Retrieves the quota used by computations
     */
    async computationsQuotaHandler(requestParameters: ComputationsQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ComputationQuota>> {
        const response = await this.computationsQuotaHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the quota used on data
     */
    async dataUsageHandlerRaw(requestParameters: DataUsageHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DataUsage>>> {
        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling dataUsageHandler.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling dataUsageHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quota/dataUsage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DataUsageFromJSON));
    }

    /**
     * Retrieves the quota used on data
     */
    async dataUsageHandler(requestParameters: DataUsageHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DataUsage>> {
        const response = await this.dataUsageHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the quota used by computations
     */
    async dataUsageSummaryHandlerRaw(requestParameters: DataUsageSummaryHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DataUsageSummary>>> {
        if (requestParameters.granularity === null || requestParameters.granularity === undefined) {
            throw new runtime.RequiredError('granularity','Required parameter requestParameters.granularity was null or undefined when calling dataUsageSummaryHandler.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling dataUsageSummaryHandler.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling dataUsageSummaryHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.granularity !== undefined) {
            queryParameters['granularity'] = requestParameters.granularity;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.dataset !== undefined) {
            queryParameters['dataset'] = requestParameters.dataset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quota/dataUsage/summary`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DataUsageSummaryFromJSON));
    }

    /**
     * Retrieves the quota used by computations
     */
    async dataUsageSummaryHandler(requestParameters: DataUsageSummaryHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DataUsageSummary>> {
        const response = await this.dataUsageSummaryHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get role by name
     */
    async getRoleByNameHandlerRaw(requestParameters: GetRoleByNameHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddCollection200Response>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getRoleByNameHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/roles/byName/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddCollection200ResponseFromJSON(jsonValue));
    }

    /**
     * Get role by name
     */
    async getRoleByNameHandler(requestParameters: GetRoleByNameHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddCollection200Response> {
        const response = await this.getRoleByNameHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query roles for the current user.
     */
    async getRoleDescriptionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RoleDescription>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/user/roles/descriptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RoleDescriptionFromJSON));
    }

    /**
     * Query roles for the current user.
     */
    async getRoleDescriptions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RoleDescription>> {
        const response = await this.getRoleDescriptionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the available and used quota of a specific user.
     */
    async getUserQuotaHandlerRaw(requestParameters: GetUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Quota>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling getUserQuotaHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quotas/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuotaFromJSON(jsonValue));
    }

    /**
     * Retrieves the available and used quota of a specific user.
     */
    async getUserQuotaHandler(requestParameters: GetUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Quota> {
        const response = await this.getUserQuotaHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the available and used quota of the current user.
     */
    async quotaHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Quota>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quota`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuotaFromJSON(jsonValue));
    }

    /**
     * Retrieves the available and used quota of the current user.
     */
    async quotaHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Quota> {
        const response = await this.quotaHandlerRaw(initOverrides);
        return await response.value();
    }

    /**
     * Remove a role. Requires admin privilige.
     */
    async removeRoleHandlerRaw(requestParameters: RemoveRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling removeRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove a role. Requires admin privilige.
     */
    async removeRoleHandler(requestParameters: RemoveRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeRoleHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Revoke a role from a user. Requires admin privilige.
     */
    async revokeRoleHandlerRaw(requestParameters: RevokeRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling revokeRoleHandler.');
        }

        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling revokeRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{user}/roles/{role}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))).replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Revoke a role from a user. Requires admin privilige.
     */
    async revokeRoleHandler(requestParameters: RevokeRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.revokeRoleHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Update the available quota of a specific user.
     */
    async updateUserQuotaHandlerRaw(requestParameters: UpdateUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUserQuotaHandler.');
        }

        if (requestParameters.updateQuota === null || requestParameters.updateQuota === undefined) {
            throw new runtime.RequiredError('updateQuota','Required parameter requestParameters.updateQuota was null or undefined when calling updateUserQuotaHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quotas/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateQuotaToJSON(requestParameters.updateQuota),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update the available quota of a specific user.
     */
    async updateUserQuotaHandler(requestParameters: UpdateUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateUserQuotaHandlerRaw(requestParameters, initOverrides);
    }

}
