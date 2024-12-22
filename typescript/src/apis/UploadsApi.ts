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
  AddCollection200Response,
  UploadFileLayersResponse,
  UploadFilesResponse,
} from '../models/index';
import {
    AddCollection200ResponseFromJSON,
    AddCollection200ResponseToJSON,
    UploadFileLayersResponseFromJSON,
    UploadFileLayersResponseToJSON,
    UploadFilesResponseFromJSON,
    UploadFilesResponseToJSON,
} from '../models/index';

export interface ListUploadFileLayersHandlerRequest {
    uploadId: string;
    fileName: string;
}

export interface ListUploadFilesHandlerRequest {
    uploadId: string;
}

export interface UploadHandlerRequest {
    files: Array<Blob>;
}

/**
 * 
 */
export class UploadsApi extends runtime.BaseAPI {

    /**
     * List the layers of on uploaded file.
     */
    async listUploadFileLayersHandlerRaw(requestParameters: ListUploadFileLayersHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UploadFileLayersResponse>> {
        if (requestParameters.uploadId === null || requestParameters.uploadId === undefined) {
            throw new runtime.RequiredError('uploadId','Required parameter requestParameters.uploadId was null or undefined when calling listUploadFileLayersHandler.');
        }

        if (requestParameters.fileName === null || requestParameters.fileName === undefined) {
            throw new runtime.RequiredError('fileName','Required parameter requestParameters.fileName was null or undefined when calling listUploadFileLayersHandler.');
        }

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
            path: `/uploads/{upload_id}/files/{file_name}/layers`.replace(`{${"upload_id"}}`, encodeURIComponent(String(requestParameters.uploadId))).replace(`{${"file_name"}}`, encodeURIComponent(String(requestParameters.fileName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UploadFileLayersResponseFromJSON(jsonValue));
    }

    /**
     * List the layers of on uploaded file.
     */
    async listUploadFileLayersHandler(requestParameters: ListUploadFileLayersHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UploadFileLayersResponse> {
        const response = await this.listUploadFileLayersHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the files of on upload.
     */
    async listUploadFilesHandlerRaw(requestParameters: ListUploadFilesHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UploadFilesResponse>> {
        if (requestParameters.uploadId === null || requestParameters.uploadId === undefined) {
            throw new runtime.RequiredError('uploadId','Required parameter requestParameters.uploadId was null or undefined when calling listUploadFilesHandler.');
        }

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
            path: `/uploads/{upload_id}/files`.replace(`{${"upload_id"}}`, encodeURIComponent(String(requestParameters.uploadId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UploadFilesResponseFromJSON(jsonValue));
    }

    /**
     * List the files of on upload.
     */
    async listUploadFilesHandler(requestParameters: ListUploadFilesHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UploadFilesResponse> {
        const response = await this.listUploadFilesHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uploads files.
     */
    async uploadHandlerRaw(requestParameters: UploadHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddCollection200Response>> {
        if (requestParameters.files === null || requestParameters.files === undefined) {
            throw new runtime.RequiredError('files','Required parameter requestParameters.files was null or undefined when calling uploadHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.files) {
            requestParameters.files.forEach((element) => {
                formParams.append('files[]', element as any);
            })
        }

        const response = await this.request({
            path: `/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddCollection200ResponseFromJSON(jsonValue));
    }

    /**
     * Uploads files.
     */
    async uploadHandler(requestParameters: UploadHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddCollection200Response> {
        const response = await this.uploadHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
