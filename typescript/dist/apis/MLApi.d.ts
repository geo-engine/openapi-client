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
import type { MlModel, MlModelNameResponse } from '../models/index';
export interface AddMlModelRequest {
    mlModel: MlModel;
}
export interface GetMlModelRequest {
    modelName: string;
}
/**
 *
 */
export declare class MLApi extends runtime.BaseAPI {
    /**
     * Create a new ml model.
     */
    addMlModelRaw(requestParameters: AddMlModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MlModelNameResponse>>;
    /**
     * Create a new ml model.
     */
    addMlModel(requestParameters: AddMlModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MlModelNameResponse>;
    /**
     * Get ml model by name.
     */
    getMlModelRaw(requestParameters: GetMlModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MlModel>>;
    /**
     * Get ml model by name.
     */
    getMlModel(requestParameters: GetMlModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MlModel>;
    /**
     * List ml models.
     */
    listMlModelsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MlModel>>>;
    /**
     * List ml models.
     */
    listMlModels(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MlModel>>;
}
