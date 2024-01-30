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
import * as runtime from '../runtime';
import type { AddCollection200Response, ProvenanceEntry, RasterDatasetFromWorkflow, RasterStreamWebsocketResultType, SpatialPartition2D, SpatialResolution, TaskResponse, TypedResultDescriptor, Workflow } from '../models/index';
export interface DatasetFromWorkflowHandlerRequest {
    id: string;
    rasterDatasetFromWorkflow: RasterDatasetFromWorkflow;
}
export interface GetWorkflowAllMetadataZipHandlerRequest {
    id: string;
}
export interface GetWorkflowMetadataHandlerRequest {
    id: string;
}
export interface GetWorkflowProvenanceHandlerRequest {
    id: string;
}
export interface LoadWorkflowHandlerRequest {
    id: string;
}
export interface RasterStreamWebsocketRequest {
    id: string;
    spatialBounds: SpatialPartition2D;
    timeInterval: string;
    spatialResolution: SpatialResolution;
    attributes: string;
    resultType: RasterStreamWebsocketResultType;
}
export interface RegisterWorkflowHandlerRequest {
    workflow: Workflow;
}
/**
 *
 */
export declare class WorkflowsApi extends runtime.BaseAPI {
    /**
     * Create a task for creating a new dataset from the result of the workflow given by its `id` and the dataset parameters in the request body. Returns the id of the created task
     * Create a task for creating a new dataset from the result of the workflow given by its `id` and the dataset parameters in the request body.
     */
    datasetFromWorkflowHandlerRaw(requestParameters: DatasetFromWorkflowHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskResponse>>;
    /**
     * Create a task for creating a new dataset from the result of the workflow given by its `id` and the dataset parameters in the request body. Returns the id of the created task
     * Create a task for creating a new dataset from the result of the workflow given by its `id` and the dataset parameters in the request body.
     */
    datasetFromWorkflowHandler(requestParameters: DatasetFromWorkflowHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskResponse>;
    /**
     * Gets a ZIP archive of the worklow, its provenance and the output metadata.
     * Gets a ZIP archive of the worklow, its provenance and the output metadata.
     */
    getWorkflowAllMetadataZipHandlerRaw(requestParameters: GetWorkflowAllMetadataZipHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>>;
    /**
     * Gets a ZIP archive of the worklow, its provenance and the output metadata.
     * Gets a ZIP archive of the worklow, its provenance and the output metadata.
     */
    getWorkflowAllMetadataZipHandler(requestParameters: GetWorkflowAllMetadataZipHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob>;
    /**
     * Gets the metadata of a workflow
     * Gets the metadata of a workflow
     */
    getWorkflowMetadataHandlerRaw(requestParameters: GetWorkflowMetadataHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TypedResultDescriptor>>;
    /**
     * Gets the metadata of a workflow
     * Gets the metadata of a workflow
     */
    getWorkflowMetadataHandler(requestParameters: GetWorkflowMetadataHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TypedResultDescriptor>;
    /**
     * Gets the provenance of all datasets used in a workflow.
     * Gets the provenance of all datasets used in a workflow.
     */
    getWorkflowProvenanceHandlerRaw(requestParameters: GetWorkflowProvenanceHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProvenanceEntry>>>;
    /**
     * Gets the provenance of all datasets used in a workflow.
     * Gets the provenance of all datasets used in a workflow.
     */
    getWorkflowProvenanceHandler(requestParameters: GetWorkflowProvenanceHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProvenanceEntry>>;
    /**
     * Retrieves an existing Workflow.
     * Retrieves an existing Workflow.
     */
    loadWorkflowHandlerRaw(requestParameters: LoadWorkflowHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Workflow>>;
    /**
     * Retrieves an existing Workflow.
     * Retrieves an existing Workflow.
     */
    loadWorkflowHandler(requestParameters: LoadWorkflowHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Workflow>;
    /**
     * Query a workflow raster result as a stream of tiles via a websocket connection.
     * Query a workflow raster result as a stream of tiles via a websocket connection.
     */
    rasterStreamWebsocketRaw(requestParameters: RasterStreamWebsocketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Query a workflow raster result as a stream of tiles via a websocket connection.
     * Query a workflow raster result as a stream of tiles via a websocket connection.
     */
    rasterStreamWebsocket(requestParameters: RasterStreamWebsocketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Registers a new Workflow.
     * Registers a new Workflow.
     */
    registerWorkflowHandlerRaw(requestParameters: RegisterWorkflowHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddCollection200Response>>;
    /**
     * Registers a new Workflow.
     * Registers a new Workflow.
     */
    registerWorkflowHandler(requestParameters: RegisterWorkflowHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddCollection200Response>;
}
