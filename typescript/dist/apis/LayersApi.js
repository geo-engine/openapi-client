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
exports.LayersApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class LayersApi extends runtime.BaseAPI {
    /**
     * Add a new collection to an existing collection
     * Add a new collection to an existing collection
     */
    addCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling addCollection.');
            }
            if (requestParameters.addLayerCollection === null || requestParameters.addLayerCollection === undefined) {
                throw new runtime.RequiredError('addLayerCollection', 'Required parameter requestParameters.addLayerCollection was null or undefined when calling addCollection.');
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
                path: `/layerDb/collections/{collection}/collections`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.AddLayerCollectionToJSON)(requestParameters.addLayerCollection),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AddCollection200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Add a new collection to an existing collection
     * Add a new collection to an existing collection
     */
    addCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.addCollectionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Add an existing collection to a collection
     * Add an existing collection to a collection
     */
    addExistingCollectionToCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.parent === null || requestParameters.parent === undefined) {
                throw new runtime.RequiredError('parent', 'Required parameter requestParameters.parent was null or undefined when calling addExistingCollectionToCollection.');
            }
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling addExistingCollectionToCollection.');
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
                path: `/layerDb/collections/{parent}/collections/{collection}`.replace(`{${"parent"}}`, encodeURIComponent(String(requestParameters.parent))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Add an existing collection to a collection
     * Add an existing collection to a collection
     */
    addExistingCollectionToCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addExistingCollectionToCollectionRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Add an existing layer to a collection
     * Add an existing layer to a collection
     */
    addExistingLayerToCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling addExistingLayerToCollection.');
            }
            if (requestParameters.layer === null || requestParameters.layer === undefined) {
                throw new runtime.RequiredError('layer', 'Required parameter requestParameters.layer was null or undefined when calling addExistingLayerToCollection.');
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
                path: `/layerDb/collections/{collection}/layers/{layer}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"layer"}}`, encodeURIComponent(String(requestParameters.layer))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Add an existing layer to a collection
     * Add an existing layer to a collection
     */
    addExistingLayerToCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addExistingLayerToCollectionRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Add a new layer to a collection
     * Add a new layer to a collection
     */
    addLayerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling addLayer.');
            }
            if (requestParameters.addLayer === null || requestParameters.addLayer === undefined) {
                throw new runtime.RequiredError('addLayer', 'Required parameter requestParameters.addLayer was null or undefined when calling addLayer.');
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
                path: `/layerDb/collections/{collection}/layers`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.AddLayerToJSON)(requestParameters.addLayer),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AddCollection200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Add a new layer to a collection
     * Add a new layer to a collection
     */
    addLayer(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.addLayerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Autocompletes the search on the contents of the collection of the given provider
     * Autocompletes the search on the contents of the collection of the given provider
     */
    autocompleteHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.provider === null || requestParameters.provider === undefined) {
                throw new runtime.RequiredError('provider', 'Required parameter requestParameters.provider was null or undefined when calling autocompleteHandler.');
            }
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling autocompleteHandler.');
            }
            if (requestParameters.searchType === null || requestParameters.searchType === undefined) {
                throw new runtime.RequiredError('searchType', 'Required parameter requestParameters.searchType was null or undefined when calling autocompleteHandler.');
            }
            if (requestParameters.searchString === null || requestParameters.searchString === undefined) {
                throw new runtime.RequiredError('searchString', 'Required parameter requestParameters.searchString was null or undefined when calling autocompleteHandler.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling autocompleteHandler.');
            }
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling autocompleteHandler.');
            }
            const queryParameters = {};
            if (requestParameters.searchType !== undefined) {
                queryParameters['searchType'] = requestParameters.searchType;
            }
            if (requestParameters.searchString !== undefined) {
                queryParameters['searchString'] = requestParameters.searchString;
            }
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
                path: `/layers/collections/search/autocomplete/{provider}/{collection}`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters.provider))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Autocompletes the search on the contents of the collection of the given provider
     * Autocompletes the search on the contents of the collection of the given provider
     */
    autocompleteHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.autocompleteHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves the layer of the given provider
     * Retrieves the layer of the given provider
     */
    layerHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.provider === null || requestParameters.provider === undefined) {
                throw new runtime.RequiredError('provider', 'Required parameter requestParameters.provider was null or undefined when calling layerHandler.');
            }
            if (requestParameters.layer === null || requestParameters.layer === undefined) {
                throw new runtime.RequiredError('layer', 'Required parameter requestParameters.layer was null or undefined when calling layerHandler.');
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
                path: `/layers/{provider}/{layer}`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters.provider))).replace(`{${"layer"}}`, encodeURIComponent(String(requestParameters.layer))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LayerFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves the layer of the given provider
     * Retrieves the layer of the given provider
     */
    layerHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.layerHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Persist a raster layer from a provider as a dataset.
     * Persist a raster layer from a provider as a dataset.
     */
    layerToDatasetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.provider === null || requestParameters.provider === undefined) {
                throw new runtime.RequiredError('provider', 'Required parameter requestParameters.provider was null or undefined when calling layerToDataset.');
            }
            if (requestParameters.layer === null || requestParameters.layer === undefined) {
                throw new runtime.RequiredError('layer', 'Required parameter requestParameters.layer was null or undefined when calling layerToDataset.');
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
                path: `/layers/{provider}/{layer}/dataset`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters.provider))).replace(`{${"layer"}}`, encodeURIComponent(String(requestParameters.layer))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TaskResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Persist a raster layer from a provider as a dataset.
     * Persist a raster layer from a provider as a dataset.
     */
    layerToDataset(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.layerToDatasetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Registers a layer from a provider as a workflow and returns the workflow id
     * Registers a layer from a provider as a workflow and returns the workflow id
     */
    layerToWorkflowIdHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.provider === null || requestParameters.provider === undefined) {
                throw new runtime.RequiredError('provider', 'Required parameter requestParameters.provider was null or undefined when calling layerToWorkflowIdHandler.');
            }
            if (requestParameters.layer === null || requestParameters.layer === undefined) {
                throw new runtime.RequiredError('layer', 'Required parameter requestParameters.layer was null or undefined when calling layerToWorkflowIdHandler.');
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
                path: `/layers/{provider}/{layer}/workflowId`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters.provider))).replace(`{${"layer"}}`, encodeURIComponent(String(requestParameters.layer))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AddCollection200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Registers a layer from a provider as a workflow and returns the workflow id
     * Registers a layer from a provider as a workflow and returns the workflow id
     */
    layerToWorkflowIdHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.layerToWorkflowIdHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * List the contents of the collection of the given provider
     * List the contents of the collection of the given provider
     */
    listCollectionHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.provider === null || requestParameters.provider === undefined) {
                throw new runtime.RequiredError('provider', 'Required parameter requestParameters.provider was null or undefined when calling listCollectionHandler.');
            }
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling listCollectionHandler.');
            }
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling listCollectionHandler.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling listCollectionHandler.');
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
                path: `/layers/collections/{provider}/{collection}`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters.provider))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LayerCollectionFromJSON)(jsonValue));
        });
    }
    /**
     * List the contents of the collection of the given provider
     * List the contents of the collection of the given provider
     */
    listCollectionHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listCollectionHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * List all layer collections
     * List all layer collections
     */
    listRootCollectionsHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling listRootCollectionsHandler.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling listRootCollectionsHandler.');
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
                path: `/layers/collections`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LayerCollectionFromJSON)(jsonValue));
        });
    }
    /**
     * List all layer collections
     * List all layer collections
     */
    listRootCollectionsHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listRootCollectionsHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    providerCapabilitiesHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.provider === null || requestParameters.provider === undefined) {
                throw new runtime.RequiredError('provider', 'Required parameter requestParameters.provider was null or undefined when calling providerCapabilitiesHandler.');
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
                path: `/layers/{provider}/capabilities`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters.provider))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ProviderCapabilitiesFromJSON)(jsonValue));
        });
    }
    /**
     */
    providerCapabilitiesHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.providerCapabilitiesHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Remove a collection
     * Remove a collection
     */
    removeCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling removeCollection.');
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
                path: `/layerDb/collections/{collection}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Remove a collection
     * Remove a collection
     */
    removeCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeCollectionRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Delete a collection from a collection
     * Delete a collection from a collection
     */
    removeCollectionFromCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.parent === null || requestParameters.parent === undefined) {
                throw new runtime.RequiredError('parent', 'Required parameter requestParameters.parent was null or undefined when calling removeCollectionFromCollection.');
            }
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling removeCollectionFromCollection.');
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
                path: `/layerDb/collections/{parent}/collections/{collection}`.replace(`{${"parent"}}`, encodeURIComponent(String(requestParameters.parent))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a collection from a collection
     * Delete a collection from a collection
     */
    removeCollectionFromCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeCollectionFromCollectionRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Remove a layer from a collection
     * Remove a layer from a collection
     */
    removeLayerFromCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling removeLayerFromCollection.');
            }
            if (requestParameters.layer === null || requestParameters.layer === undefined) {
                throw new runtime.RequiredError('layer', 'Required parameter requestParameters.layer was null or undefined when calling removeLayerFromCollection.');
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
                path: `/layerDb/collections/{collection}/layers/{layer}`.replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))).replace(`{${"layer"}}`, encodeURIComponent(String(requestParameters.layer))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Remove a layer from a collection
     * Remove a layer from a collection
     */
    removeLayerFromCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeLayerFromCollectionRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Searches the contents of the collection of the given provider
     * Searches the contents of the collection of the given provider
     */
    searchHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.provider === null || requestParameters.provider === undefined) {
                throw new runtime.RequiredError('provider', 'Required parameter requestParameters.provider was null or undefined when calling searchHandler.');
            }
            if (requestParameters.collection === null || requestParameters.collection === undefined) {
                throw new runtime.RequiredError('collection', 'Required parameter requestParameters.collection was null or undefined when calling searchHandler.');
            }
            if (requestParameters.searchType === null || requestParameters.searchType === undefined) {
                throw new runtime.RequiredError('searchType', 'Required parameter requestParameters.searchType was null or undefined when calling searchHandler.');
            }
            if (requestParameters.searchString === null || requestParameters.searchString === undefined) {
                throw new runtime.RequiredError('searchString', 'Required parameter requestParameters.searchString was null or undefined when calling searchHandler.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling searchHandler.');
            }
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling searchHandler.');
            }
            const queryParameters = {};
            if (requestParameters.searchType !== undefined) {
                queryParameters['searchType'] = requestParameters.searchType;
            }
            if (requestParameters.searchString !== undefined) {
                queryParameters['searchString'] = requestParameters.searchString;
            }
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
                path: `/layers/collections/search/{provider}/{collection}`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters.provider))).replace(`{${"collection"}}`, encodeURIComponent(String(requestParameters.collection))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LayerCollectionFromJSON)(jsonValue));
        });
    }
    /**
     * Searches the contents of the collection of the given provider
     * Searches the contents of the collection of the given provider
     */
    searchHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.LayersApi = LayersApi;