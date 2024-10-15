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
import * as runtime from '../runtime';
import type { AutoCreateDataset, CreateDataset, CreateDatasetHandler200Response, Dataset, DatasetListing, MetaDataDefinition, MetaDataSuggestion, OrderBy, Provenances, SuggestMetaData, Symbology, UpdateDataset, Volume, VolumeFileLayersResponse } from '../models/index';
export interface AutoCreateDatasetHandlerRequest {
    autoCreateDataset: AutoCreateDataset;
}
export interface CreateDatasetHandlerRequest {
    createDataset: CreateDataset;
}
export interface DeleteDatasetHandlerRequest {
    dataset: string;
}
export interface GetDatasetHandlerRequest {
    dataset: string;
}
export interface GetLoadingInfoHandlerRequest {
    dataset: string;
}
export interface ListDatasetsHandlerRequest {
    order: OrderBy;
    offset: number;
    limit: number;
    filter?: string | null;
    tags?: Array<string> | null;
}
export interface ListVolumeFileLayersHandlerRequest {
    volumeName: string;
    fileName: string;
}
export interface SuggestMetaDataHandlerRequest {
    suggestMetaData: SuggestMetaData;
}
export interface UpdateDatasetHandlerRequest {
    dataset: string;
    updateDataset: UpdateDataset;
}
export interface UpdateDatasetProvenanceHandlerRequest {
    dataset: string;
    provenances: Provenances;
}
export interface UpdateDatasetSymbologyHandlerRequest {
    dataset: string;
    symbology: Symbology;
}
export interface UpdateLoadingInfoHandlerRequest {
    dataset: string;
    metaDataDefinition: MetaDataDefinition;
}
/**
 *
 */
export declare class DatasetsApi extends runtime.BaseAPI {
    /**
     * The format of the files will be automatically detected when possible.
     * Creates a new dataset using previously uploaded files.
     */
    autoCreateDatasetHandlerRaw(requestParameters: AutoCreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDatasetHandler200Response>>;
    /**
     * The format of the files will be automatically detected when possible.
     * Creates a new dataset using previously uploaded files.
     */
    autoCreateDatasetHandler(requestParameters: AutoCreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDatasetHandler200Response>;
    /**
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     */
    createDatasetHandlerRaw(requestParameters: CreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDatasetHandler200Response>>;
    /**
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     */
    createDatasetHandler(requestParameters: CreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDatasetHandler200Response>;
    /**
     * Delete a dataset
     */
    deleteDatasetHandlerRaw(requestParameters: DeleteDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a dataset
     */
    deleteDatasetHandler(requestParameters: DeleteDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Retrieves details about a dataset using the internal name.
     */
    getDatasetHandlerRaw(requestParameters: GetDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Dataset>>;
    /**
     * Retrieves details about a dataset using the internal name.
     */
    getDatasetHandler(requestParameters: GetDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Dataset>;
    /**
     * Retrieves the loading information of a dataset
     */
    getLoadingInfoHandlerRaw(requestParameters: GetLoadingInfoHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetaDataDefinition>>;
    /**
     * Retrieves the loading information of a dataset
     */
    getLoadingInfoHandler(requestParameters: GetLoadingInfoHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetaDataDefinition>;
    /**
     * Lists available datasets.
     */
    listDatasetsHandlerRaw(requestParameters: ListDatasetsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DatasetListing>>>;
    /**
     * Lists available datasets.
     */
    listDatasetsHandler(requestParameters: ListDatasetsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DatasetListing>>;
    /**
     * List the layers of on uploaded file.
     */
    listVolumeFileLayersHandlerRaw(requestParameters: ListVolumeFileLayersHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VolumeFileLayersResponse>>;
    /**
     * List the layers of on uploaded file.
     */
    listVolumeFileLayersHandler(requestParameters: ListVolumeFileLayersHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VolumeFileLayersResponse>;
    /**
     * Lists available volumes.
     */
    listVolumesHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Volume>>>;
    /**
     * Lists available volumes.
     */
    listVolumesHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Volume>>;
    /**
     * Tries to automatically detect the main file and layer name if not specified.
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it.
     */
    suggestMetaDataHandlerRaw(requestParameters: SuggestMetaDataHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetaDataSuggestion>>;
    /**
     * Tries to automatically detect the main file and layer name if not specified.
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it.
     */
    suggestMetaDataHandler(requestParameters: SuggestMetaDataHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetaDataSuggestion>;
    /**
     * Update details about a dataset using the internal name.
     */
    updateDatasetHandlerRaw(requestParameters: UpdateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update details about a dataset using the internal name.
     */
    updateDatasetHandler(requestParameters: UpdateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    updateDatasetProvenanceHandlerRaw(requestParameters: UpdateDatasetProvenanceHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    updateDatasetProvenanceHandler(requestParameters: UpdateDatasetProvenanceHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Updates the dataset\'s symbology
     */
    updateDatasetSymbologyHandlerRaw(requestParameters: UpdateDatasetSymbologyHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Updates the dataset\'s symbology
     */
    updateDatasetSymbologyHandler(requestParameters: UpdateDatasetSymbologyHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Updates the dataset\'s loading info
     */
    updateLoadingInfoHandlerRaw(requestParameters: UpdateLoadingInfoHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Updates the dataset\'s loading info
     */
    updateLoadingInfoHandler(requestParameters: UpdateLoadingInfoHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
