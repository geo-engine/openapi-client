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
exports.UploadsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class UploadsApi extends runtime.BaseAPI {
    /**
     * List the layers of on uploaded file.
     */
    listUploadFileLayersHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['uploadId'] == null) {
                throw new runtime.RequiredError('uploadId', 'Required parameter "uploadId" was null or undefined when calling listUploadFileLayersHandler().');
            }
            if (requestParameters['fileName'] == null) {
                throw new runtime.RequiredError('fileName', 'Required parameter "fileName" was null or undefined when calling listUploadFileLayersHandler().');
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
                path: `/uploads/{upload_id}/files/{file_name}/layers`.replace(`{${"upload_id"}}`, encodeURIComponent(String(requestParameters['uploadId']))).replace(`{${"file_name"}}`, encodeURIComponent(String(requestParameters['fileName']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UploadFileLayersResponseFromJSON)(jsonValue));
        });
    }
    /**
     * List the layers of on uploaded file.
     */
    listUploadFileLayersHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listUploadFileLayersHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * List the files of on upload.
     */
    listUploadFilesHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['uploadId'] == null) {
                throw new runtime.RequiredError('uploadId', 'Required parameter "uploadId" was null or undefined when calling listUploadFilesHandler().');
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
                path: `/uploads/{upload_id}/files`.replace(`{${"upload_id"}}`, encodeURIComponent(String(requestParameters['uploadId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UploadFilesResponseFromJSON)(jsonValue));
        });
    }
    /**
     * List the files of on upload.
     */
    listUploadFilesHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listUploadFilesHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Uploads files.
     */
    uploadHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['files'] == null) {
                throw new runtime.RequiredError('files', 'Required parameter "files" was null or undefined when calling uploadHandler().');
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
            const consumes = [
                { contentType: 'multipart/form-data' },
            ];
            // @ts-ignore: canConsumeForm may be unused
            const canConsumeForm = runtime.canConsumeForm(consumes);
            let formParams;
            let useForm = false;
            // use FormData to transmit files using content-type "multipart/form-data"
            useForm = canConsumeForm;
            if (useForm) {
                formParams = new FormData();
            }
            else {
                formParams = new URLSearchParams();
            }
            if (requestParameters['files'] != null) {
                requestParameters['files'].forEach((element) => {
                    formParams.append('files[]', element);
                });
            }
            const response = yield this.request({
                path: `/upload`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AddCollection200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Uploads files.
     */
    uploadHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.uploadHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.UploadsApi = UploadsApi;
