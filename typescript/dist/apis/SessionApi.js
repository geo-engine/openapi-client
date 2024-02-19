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
exports.SessionApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class SessionApi extends runtime.BaseAPI {
    /**
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     */
    anonymousHandlerRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/anonymous`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UserSessionFromJSON)(jsonValue));
        });
    }
    /**
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     */
    anonymousHandler(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.anonymousHandlerRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     */
    loginHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userCredentials === null || requestParameters.userCredentials === undefined) {
                throw new runtime.RequiredError('userCredentials', 'Required parameter requestParameters.userCredentials was null or undefined when calling loginHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/login`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.UserCredentialsToJSON)(requestParameters.userCredentials),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UserSessionFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     */
    loginHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.loginHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Ends a session.
     * Ends a session.
     */
    logoutHandlerRaw(initOverrides) {
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
                path: `/logout`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Ends a session.
     * Ends a session.
     */
    logoutHandler(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logoutHandlerRaw(initOverrides);
        });
    }
    /**
     * Initializes the Open Id Connect login procedure by requesting a parametrized url to the configured Id Provider.  # Errors  This call fails if Open ID Connect is disabled, misconfigured or the Id Provider is unreachable.
     * Initializes the Open Id Connect login procedure by requesting a parametrized url to the configured Id Provider.
     */
    oidcInitRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/oidcInit`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AuthCodeRequestURLFromJSON)(jsonValue));
        });
    }
    /**
     * Initializes the Open Id Connect login procedure by requesting a parametrized url to the configured Id Provider.  # Errors  This call fails if Open ID Connect is disabled, misconfigured or the Id Provider is unreachable.
     * Initializes the Open Id Connect login procedure by requesting a parametrized url to the configured Id Provider.
     */
    oidcInit(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oidcInitRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates a session for a user via a login with Open Id Connect. This call must be preceded by a call to oidcInit and match the parameters of that call.  # Errors  This call fails if the [`AuthCodeResponse`] is invalid, if a previous oidcLogin call with the same state was already successfully or unsuccessfully resolved, if the Open Id Connect configuration is invalid, or if the Id Provider is unreachable.
     * Creates a session for a user via a login with Open Id Connect.
     */
    oidcLoginRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.authCodeResponse === null || requestParameters.authCodeResponse === undefined) {
                throw new runtime.RequiredError('authCodeResponse', 'Required parameter requestParameters.authCodeResponse was null or undefined when calling oidcLogin.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/oidcLogin`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.AuthCodeResponseToJSON)(requestParameters.authCodeResponse),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UserSessionFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a session for a user via a login with Open Id Connect. This call must be preceded by a call to oidcInit and match the parameters of that call.  # Errors  This call fails if the [`AuthCodeResponse`] is invalid, if a previous oidcLogin call with the same state was already successfully or unsuccessfully resolved, if the Open Id Connect configuration is invalid, or if the Id Provider is unreachable.
     * Creates a session for a user via a login with Open Id Connect.
     */
    oidcLogin(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oidcLoginRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Registers a user.
     * Registers a user.
     */
    registerUserHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userRegistration === null || requestParameters.userRegistration === undefined) {
                throw new runtime.RequiredError('userRegistration', 'Required parameter requestParameters.userRegistration was null or undefined when calling registerUserHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/user`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.UserRegistrationToJSON)(requestParameters.userRegistration),
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
     * Registers a user.
     * Registers a user.
     */
    registerUserHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.registerUserHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves details about the current session.
     * Retrieves details about the current session.
     */
    sessionHandlerRaw(initOverrides) {
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
                path: `/session`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UserSessionFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves details about the current session.
     * Retrieves details about the current session.
     */
    sessionHandler(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sessionHandlerRaw(initOverrides);
            return yield response.value();
        });
    }
}
exports.SessionApi = SessionApi;