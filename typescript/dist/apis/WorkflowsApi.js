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
exports.WorkflowsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class WorkflowsApi extends runtime.BaseAPI {
    /**
     * Create a task for creating a new dataset from the result of the workflow given by its `id` and the dataset parameters in the request body. Returns the id of the created task
     */
    datasetFromWorkflowHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling datasetFromWorkflowHandler().');
            }
            if (requestParameters['rasterDatasetFromWorkflow'] == null) {
                throw new runtime.RequiredError('rasterDatasetFromWorkflow', 'Required parameter "rasterDatasetFromWorkflow" was null or undefined when calling datasetFromWorkflowHandler().');
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
                path: `/datasetFromWorkflow/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.RasterDatasetFromWorkflowToJSON)(requestParameters['rasterDatasetFromWorkflow']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TaskResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Create a task for creating a new dataset from the result of the workflow given by its `id` and the dataset parameters in the request body. Returns the id of the created task
     */
    datasetFromWorkflowHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.datasetFromWorkflowHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets a ZIP archive of the worklow, its provenance and the output metadata.
     */
    getWorkflowAllMetadataZipHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling getWorkflowAllMetadataZipHandler().');
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
                path: `/workflow/{id}/allMetadata/zip`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.BlobApiResponse(response);
        });
    }
    /**
     * Gets a ZIP archive of the worklow, its provenance and the output metadata.
     */
    getWorkflowAllMetadataZipHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWorkflowAllMetadataZipHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets the metadata of a workflow
     */
    getWorkflowMetadataHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling getWorkflowMetadataHandler().');
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
                path: `/workflow/{id}/metadata`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TypedResultDescriptorFromJSON)(jsonValue));
        });
    }
    /**
     * Gets the metadata of a workflow
     */
    getWorkflowMetadataHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWorkflowMetadataHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets the provenance of all datasets used in a workflow.
     */
    getWorkflowProvenanceHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling getWorkflowProvenanceHandler().');
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
                path: `/workflow/{id}/provenance`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.ProvenanceEntryFromJSON));
        });
    }
    /**
     * Gets the provenance of all datasets used in a workflow.
     */
    getWorkflowProvenanceHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWorkflowProvenanceHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves an existing Workflow.
     */
    loadWorkflowHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling loadWorkflowHandler().');
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
                path: `/workflow/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.WorkflowFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves an existing Workflow.
     */
    loadWorkflowHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.loadWorkflowHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Query a workflow raster result as a stream of tiles via a websocket connection.
     */
    rasterStreamWebsocketRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling rasterStreamWebsocket().');
            }
            if (requestParameters['spatialBounds'] == null) {
                throw new runtime.RequiredError('spatialBounds', 'Required parameter "spatialBounds" was null or undefined when calling rasterStreamWebsocket().');
            }
            if (requestParameters['timeInterval'] == null) {
                throw new runtime.RequiredError('timeInterval', 'Required parameter "timeInterval" was null or undefined when calling rasterStreamWebsocket().');
            }
            if (requestParameters['spatialResolution'] == null) {
                throw new runtime.RequiredError('spatialResolution', 'Required parameter "spatialResolution" was null or undefined when calling rasterStreamWebsocket().');
            }
            if (requestParameters['attributes'] == null) {
                throw new runtime.RequiredError('attributes', 'Required parameter "attributes" was null or undefined when calling rasterStreamWebsocket().');
            }
            if (requestParameters['resultType'] == null) {
                throw new runtime.RequiredError('resultType', 'Required parameter "resultType" was null or undefined when calling rasterStreamWebsocket().');
            }
            const queryParameters = {};
            if (requestParameters['spatialBounds'] != null) {
                queryParameters['spatialBounds'] = requestParameters['spatialBounds'];
            }
            if (requestParameters['timeInterval'] != null) {
                queryParameters['timeInterval'] = requestParameters['timeInterval'];
            }
            if (requestParameters['spatialResolution'] != null) {
                queryParameters['spatialResolution'] = requestParameters['spatialResolution'];
            }
            if (requestParameters['attributes'] != null) {
                queryParameters['attributes'] = requestParameters['attributes'];
            }
            if (requestParameters['resultType'] != null) {
                queryParameters['resultType'] = requestParameters['resultType'];
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
                path: `/workflow/{id}/rasterStream`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Query a workflow raster result as a stream of tiles via a websocket connection.
     */
    rasterStreamWebsocket(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.rasterStreamWebsocketRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Registers a new Workflow.
     */
    registerWorkflowHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling registerWorkflowHandler().');
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
                path: `/workflow`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.WorkflowToJSON)(requestParameters['workflow']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.IdResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Registers a new Workflow.
     */
    registerWorkflowHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.registerWorkflowHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.WorkflowsApi = WorkflowsApi;
