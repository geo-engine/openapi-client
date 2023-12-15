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
exports.DatasetsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class DatasetsApi extends runtime.BaseAPI {
    /**
     * Creates a new dataset using previously uploaded files. The format of the files will be automatically detected when possible.
     * Creates a new dataset using previously uploaded files.
     */
    autoCreateDatasetHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.autoCreateDataset === null || requestParameters.autoCreateDataset === undefined) {
                throw new runtime.RequiredError('autoCreateDataset', 'Required parameter requestParameters.autoCreateDataset was null or undefined when calling autoCreateDatasetHandler.');
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
                path: `/dataset/auto`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.AutoCreateDatasetToJSON)(requestParameters.autoCreateDataset),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreateDatasetHandler200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a new dataset using previously uploaded files. The format of the files will be automatically detected when possible.
     * Creates a new dataset using previously uploaded files.
     */
    autoCreateDatasetHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.autoCreateDatasetHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     */
    createDatasetHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.createDataset === null || requestParameters.createDataset === undefined) {
                throw new runtime.RequiredError('createDataset', 'Required parameter requestParameters.createDataset was null or undefined when calling createDatasetHandler.');
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
                path: `/dataset`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.CreateDatasetToJSON)(requestParameters.createDataset),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreateDatasetHandler200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     */
    createDatasetHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createDatasetHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete a dataset
     * Delete a dataset
     */
    deleteDatasetHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
                throw new runtime.RequiredError('dataset', 'Required parameter requestParameters.dataset was null or undefined when calling deleteDatasetHandler.');
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
                path: `/dataset/{dataset}`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a dataset
     * Delete a dataset
     */
    deleteDatasetHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteDatasetHandlerRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Retrieves details about a dataset using the internal name.
     * Retrieves details about a dataset using the internal name.
     */
    getDatasetHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
                throw new runtime.RequiredError('dataset', 'Required parameter requestParameters.dataset was null or undefined when calling getDatasetHandler.');
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
                path: `/dataset/{dataset}`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.DatasetFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves details about a dataset using the internal name.
     * Retrieves details about a dataset using the internal name.
     */
    getDatasetHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDatasetHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists available datasets.
     * Lists available datasets.
     */
    listDatasetsHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.order === null || requestParameters.order === undefined) {
                throw new runtime.RequiredError('order', 'Required parameter requestParameters.order was null or undefined when calling listDatasetsHandler.');
            }
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling listDatasetsHandler.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling listDatasetsHandler.');
            }
            const queryParameters = {};
            if (requestParameters.filter !== undefined) {
                queryParameters['filter'] = requestParameters.filter;
            }
            if (requestParameters.order !== undefined) {
                queryParameters['order'] = requestParameters.order;
            }
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
                path: `/datasets`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.DatasetListingFromJSON));
        });
    }
    /**
     * Lists available datasets.
     * Lists available datasets.
     */
    listDatasetsHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listDatasetsHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists available volumes.
     * Lists available volumes.
     */
    listVolumesHandlerRaw(initOverrides) {
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
                path: `/dataset/volumes`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.VolumeFromJSON));
        });
    }
    /**
     * Lists available volumes.
     * Lists available volumes.
     */
    listVolumesHandler(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listVolumesHandlerRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it. Tries to automatically detect the main file and layer name if not specified.
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it.
     */
    suggestMetaDataHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.upload === null || requestParameters.upload === undefined) {
                throw new runtime.RequiredError('upload', 'Required parameter requestParameters.upload was null or undefined when calling suggestMetaDataHandler.');
            }
            const queryParameters = {};
            if (requestParameters.upload !== undefined) {
                queryParameters['upload'] = requestParameters.upload;
            }
            if (requestParameters.mainFile !== undefined) {
                queryParameters['mainFile'] = requestParameters.mainFile;
            }
            if (requestParameters.layerName !== undefined) {
                queryParameters['layerName'] = requestParameters.layerName;
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
                path: `/dataset/suggest`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MetaDataSuggestionFromJSON)(jsonValue));
        });
    }
    /**
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it. Tries to automatically detect the main file and layer name if not specified.
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it.
     */
    suggestMetaDataHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.suggestMetaDataHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.DatasetsApi = DatasetsApi;
