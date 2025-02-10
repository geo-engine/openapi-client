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
  AuthCodeRequestURL,
  AuthCodeResponse,
  UserCredentials,
  UserRegistration,
  UserSession,
} from '../models/index';
import {
    AuthCodeRequestURLFromJSON,
    AuthCodeRequestURLToJSON,
    AuthCodeResponseFromJSON,
    AuthCodeResponseToJSON,
    UserCredentialsFromJSON,
    UserCredentialsToJSON,
    UserRegistrationFromJSON,
    UserRegistrationToJSON,
    UserSessionFromJSON,
    UserSessionToJSON,
} from '../models/index';

export interface LoginHandlerRequest {
    userCredentials: UserCredentials;
}

export interface OidcInitRequest {
    redirectUri: string;
}

export interface OidcLoginRequest {
    redirectUri: string;
    authCodeResponse: AuthCodeResponse;
}

export interface RegisterUserHandlerRequest {
    userRegistration: UserRegistration;
}

/**
 * 
 */
export class SessionApi extends runtime.BaseAPI {

    /**
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     */
    async anonymousHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSession>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/anonymous`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSessionFromJSON(jsonValue));
    }

    /**
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     */
    async anonymousHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSession> {
        const response = await this.anonymousHandlerRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     */
    async loginHandlerRaw(requestParameters: LoginHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSession>> {
        if (requestParameters.userCredentials === null || requestParameters.userCredentials === undefined) {
            throw new runtime.RequiredError('userCredentials','Required parameter requestParameters.userCredentials was null or undefined when calling loginHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserCredentialsToJSON(requestParameters.userCredentials),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSessionFromJSON(jsonValue));
    }

    /**
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     */
    async loginHandler(requestParameters: LoginHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSession> {
        const response = await this.loginHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ends a session.
     */
    async logoutHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ends a session.
     */
    async logoutHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logoutHandlerRaw(initOverrides);
    }

    /**
     * # Errors  This call fails if Open ID Connect is disabled, misconfigured or the Id Provider is unreachable. 
     * Initializes the Open Id Connect login procedure by requesting a parametrized url to the configured Id Provider.
     */
    async oidcInitRaw(requestParameters: OidcInitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthCodeRequestURL>> {
        if (requestParameters.redirectUri === null || requestParameters.redirectUri === undefined) {
            throw new runtime.RequiredError('redirectUri','Required parameter requestParameters.redirectUri was null or undefined when calling oidcInit.');
        }

        const queryParameters: any = {};

        if (requestParameters.redirectUri !== undefined) {
            queryParameters['redirectUri'] = requestParameters.redirectUri;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/oidcInit`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthCodeRequestURLFromJSON(jsonValue));
    }

    /**
     * # Errors  This call fails if Open ID Connect is disabled, misconfigured or the Id Provider is unreachable. 
     * Initializes the Open Id Connect login procedure by requesting a parametrized url to the configured Id Provider.
     */
    async oidcInit(requestParameters: OidcInitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthCodeRequestURL> {
        const response = await this.oidcInitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This call must be preceded by a call to oidcInit and match the parameters of that call.  # Errors  This call fails if the [`AuthCodeResponse`] is invalid, if a previous oidcLogin call with the same state was already successfully or unsuccessfully resolved, if the Open Id Connect configuration is invalid, or if the Id Provider is unreachable. 
     * Creates a session for a user via a login with Open Id Connect.
     */
    async oidcLoginRaw(requestParameters: OidcLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSession>> {
        if (requestParameters.redirectUri === null || requestParameters.redirectUri === undefined) {
            throw new runtime.RequiredError('redirectUri','Required parameter requestParameters.redirectUri was null or undefined when calling oidcLogin.');
        }

        if (requestParameters.authCodeResponse === null || requestParameters.authCodeResponse === undefined) {
            throw new runtime.RequiredError('authCodeResponse','Required parameter requestParameters.authCodeResponse was null or undefined when calling oidcLogin.');
        }

        const queryParameters: any = {};

        if (requestParameters.redirectUri !== undefined) {
            queryParameters['redirectUri'] = requestParameters.redirectUri;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/oidcLogin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthCodeResponseToJSON(requestParameters.authCodeResponse),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSessionFromJSON(jsonValue));
    }

    /**
     * This call must be preceded by a call to oidcInit and match the parameters of that call.  # Errors  This call fails if the [`AuthCodeResponse`] is invalid, if a previous oidcLogin call with the same state was already successfully or unsuccessfully resolved, if the Open Id Connect configuration is invalid, or if the Id Provider is unreachable. 
     * Creates a session for a user via a login with Open Id Connect.
     */
    async oidcLogin(requestParameters: OidcLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSession> {
        const response = await this.oidcLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Registers a user.
     */
    async registerUserHandlerRaw(requestParameters: RegisterUserHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.userRegistration === null || requestParameters.userRegistration === undefined) {
            throw new runtime.RequiredError('userRegistration','Required parameter requestParameters.userRegistration was null or undefined when calling registerUserHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserRegistrationToJSON(requestParameters.userRegistration),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Registers a user.
     */
    async registerUserHandler(requestParameters: RegisterUserHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.registerUserHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves details about the current session.
     */
    async sessionHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSession>> {
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
            path: `/session`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSessionFromJSON(jsonValue));
    }

    /**
     * Retrieves details about the current session.
     */
    async sessionHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSession> {
        const response = await this.sessionHandlerRaw(initOverrides);
        return await response.value();
    }

}
