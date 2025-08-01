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
import type { AddLayer, AddLayerCollection, IdResponse, Layer, LayerCollection, LayerProviderListing, ProviderCapabilities, SearchType, TaskResponse, TypedDataProviderDefinition, UpdateLayer, UpdateLayerCollection } from '../models/index';
export interface AddCollectionRequest {
    collection: string;
    addLayerCollection: AddLayerCollection;
}
export interface AddExistingCollectionToCollectionRequest {
    parent: string;
    collection: string;
}
export interface AddExistingLayerToCollectionRequest {
    collection: string;
    layer: string;
}
export interface AddLayerRequest {
    collection: string;
    addLayer: AddLayer;
}
export interface AddProviderRequest {
    typedDataProviderDefinition: TypedDataProviderDefinition;
}
export interface AutocompleteHandlerRequest {
    provider: string;
    collection: string;
    searchType: SearchType;
    searchString: string;
    limit: number;
    offset: number;
}
export interface DeleteProviderRequest {
    provider: string;
}
export interface GetProviderDefinitionRequest {
    provider: string;
}
export interface LayerHandlerRequest {
    provider: string;
    layer: string;
}
export interface LayerToDatasetRequest {
    provider: string;
    layer: string;
}
export interface LayerToWorkflowIdHandlerRequest {
    provider: string;
    layer: string;
}
export interface ListCollectionHandlerRequest {
    provider: string;
    collection: string;
    offset: number;
    limit: number;
}
export interface ListProvidersRequest {
    offset: number;
    limit: number;
}
export interface ListRootCollectionsHandlerRequest {
    offset: number;
    limit: number;
}
export interface ProviderCapabilitiesHandlerRequest {
    provider: string;
}
export interface RemoveCollectionRequest {
    collection: string;
}
export interface RemoveCollectionFromCollectionRequest {
    parent: string;
    collection: string;
}
export interface RemoveLayerRequest {
    layer: string;
}
export interface RemoveLayerFromCollectionRequest {
    collection: string;
    layer: string;
}
export interface SearchHandlerRequest {
    provider: string;
    collection: string;
    searchType: SearchType;
    searchString: string;
    limit: number;
    offset: number;
}
export interface UpdateCollectionRequest {
    collection: string;
    updateLayerCollection: UpdateLayerCollection;
}
export interface UpdateLayerRequest {
    layer: string;
    updateLayer: UpdateLayer;
}
export interface UpdateProviderDefinitionRequest {
    provider: string;
    typedDataProviderDefinition: TypedDataProviderDefinition;
}
/**
 *
 */
export declare class LayersApi extends runtime.BaseAPI {
    /**
     * Add a new collection to an existing collection
     */
    addCollectionRaw(requestParameters: AddCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdResponse>>;
    /**
     * Add a new collection to an existing collection
     */
    addCollection(requestParameters: AddCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdResponse>;
    /**
     * Add an existing collection to a collection
     */
    addExistingCollectionToCollectionRaw(requestParameters: AddExistingCollectionToCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Add an existing collection to a collection
     */
    addExistingCollectionToCollection(requestParameters: AddExistingCollectionToCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Add an existing layer to a collection
     */
    addExistingLayerToCollectionRaw(requestParameters: AddExistingLayerToCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Add an existing layer to a collection
     */
    addExistingLayerToCollection(requestParameters: AddExistingLayerToCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Add a new layer to a collection
     */
    addLayerRaw(requestParameters: AddLayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdResponse>>;
    /**
     * Add a new layer to a collection
     */
    addLayer(requestParameters: AddLayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdResponse>;
    /**
     * Add a new provider
     */
    addProviderRaw(requestParameters: AddProviderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdResponse>>;
    /**
     * Add a new provider
     */
    addProvider(requestParameters: AddProviderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdResponse>;
    /**
     * Autocompletes the search on the contents of the collection of the given provider
     */
    autocompleteHandlerRaw(requestParameters: AutocompleteHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;
    /**
     * Autocompletes the search on the contents of the collection of the given provider
     */
    autocompleteHandler(requestParameters: AutocompleteHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;
    /**
     * Delete an existing provider
     */
    deleteProviderRaw(requestParameters: DeleteProviderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete an existing provider
     */
    deleteProvider(requestParameters: DeleteProviderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get an existing provider\'s definition
     */
    getProviderDefinitionRaw(requestParameters: GetProviderDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TypedDataProviderDefinition>>;
    /**
     * Get an existing provider\'s definition
     */
    getProviderDefinition(requestParameters: GetProviderDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TypedDataProviderDefinition>;
    /**
     * Retrieves the layer of the given provider
     */
    layerHandlerRaw(requestParameters: LayerHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Layer>>;
    /**
     * Retrieves the layer of the given provider
     */
    layerHandler(requestParameters: LayerHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Layer>;
    /**
     * Persist a raster layer from a provider as a dataset.
     */
    layerToDatasetRaw(requestParameters: LayerToDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskResponse>>;
    /**
     * Persist a raster layer from a provider as a dataset.
     */
    layerToDataset(requestParameters: LayerToDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskResponse>;
    /**
     * Registers a layer from a provider as a workflow and returns the workflow id
     */
    layerToWorkflowIdHandlerRaw(requestParameters: LayerToWorkflowIdHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdResponse>>;
    /**
     * Registers a layer from a provider as a workflow and returns the workflow id
     */
    layerToWorkflowIdHandler(requestParameters: LayerToWorkflowIdHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdResponse>;
    /**
     * List the contents of the collection of the given provider
     */
    listCollectionHandlerRaw(requestParameters: ListCollectionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LayerCollection>>;
    /**
     * List the contents of the collection of the given provider
     */
    listCollectionHandler(requestParameters: ListCollectionHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LayerCollection>;
    /**
     * List all providers
     */
    listProvidersRaw(requestParameters: ListProvidersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LayerProviderListing>>>;
    /**
     * List all providers
     */
    listProviders(requestParameters: ListProvidersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LayerProviderListing>>;
    /**
     * List all layer collections
     */
    listRootCollectionsHandlerRaw(requestParameters: ListRootCollectionsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LayerCollection>>;
    /**
     * List all layer collections
     */
    listRootCollectionsHandler(requestParameters: ListRootCollectionsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LayerCollection>;
    /**
     */
    providerCapabilitiesHandlerRaw(requestParameters: ProviderCapabilitiesHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProviderCapabilities>>;
    /**
     */
    providerCapabilitiesHandler(requestParameters: ProviderCapabilitiesHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProviderCapabilities>;
    /**
     * Remove a collection
     */
    removeCollectionRaw(requestParameters: RemoveCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove a collection
     */
    removeCollection(requestParameters: RemoveCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Delete a collection from a collection
     */
    removeCollectionFromCollectionRaw(requestParameters: RemoveCollectionFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a collection from a collection
     */
    removeCollectionFromCollection(requestParameters: RemoveCollectionFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Remove a collection
     */
    removeLayerRaw(requestParameters: RemoveLayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove a collection
     */
    removeLayer(requestParameters: RemoveLayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Remove a layer from a collection
     */
    removeLayerFromCollectionRaw(requestParameters: RemoveLayerFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove a layer from a collection
     */
    removeLayerFromCollection(requestParameters: RemoveLayerFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Searches the contents of the collection of the given provider
     */
    searchHandlerRaw(requestParameters: SearchHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LayerCollection>>;
    /**
     * Searches the contents of the collection of the given provider
     */
    searchHandler(requestParameters: SearchHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LayerCollection>;
    /**
     * Update a collection
     */
    updateCollectionRaw(requestParameters: UpdateCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update a collection
     */
    updateCollection(requestParameters: UpdateCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Update a layer
     */
    updateLayerRaw(requestParameters: UpdateLayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update a layer
     */
    updateLayer(requestParameters: UpdateLayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Update an existing provider\'s definition
     */
    updateProviderDefinitionRaw(requestParameters: UpdateProviderDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update an existing provider\'s definition
     */
    updateProviderDefinition(requestParameters: UpdateProviderDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
