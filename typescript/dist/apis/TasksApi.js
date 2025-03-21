"use strict";
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
exports.TasksApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class TasksApi extends runtime.BaseAPI {
    /**
     * # Parameters  * `force` - If true, the task will be aborted without clean-up.             You can abort a task that is already in the process of aborting.
     * Abort a running task.
     */
    abortHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling abortHandler().');
            }
            const queryParameters = {};
            if (requestParameters['force'] != null) {
                queryParameters['force'] = requestParameters['force'];
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
                path: `/tasks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * # Parameters  * `force` - If true, the task will be aborted without clean-up.             You can abort a task that is already in the process of aborting.
     * Abort a running task.
     */
    abortHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.abortHandlerRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Retrieve the status of all tasks.
     */
    listHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['filter'] == null) {
                throw new runtime.RequiredError('filter', 'Required parameter "filter" was null or undefined when calling listHandler().');
            }
            if (requestParameters['offset'] == null) {
                throw new runtime.RequiredError('offset', 'Required parameter "offset" was null or undefined when calling listHandler().');
            }
            if (requestParameters['limit'] == null) {
                throw new runtime.RequiredError('limit', 'Required parameter "limit" was null or undefined when calling listHandler().');
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
                path: `/tasks/list`.replace(`{${"filter"}}`, encodeURIComponent(String(requestParameters['filter']))).replace(`{${"offset"}}`, encodeURIComponent(String(requestParameters['offset']))).replace(`{${"limit"}}`, encodeURIComponent(String(requestParameters['limit']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.TaskStatusWithIdFromJSON));
        });
    }
    /**
     * Retrieve the status of all tasks.
     */
    listHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieve the status of a task.
     */
    statusHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling statusHandler().');
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
                path: `/tasks/{id}/status`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TaskStatusFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieve the status of a task.
     */
    statusHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.statusHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.TasksApi = TasksApi;
