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
  ServerInfo,
} from '../models/index';
import {
    ServerInfoFromJSON,
    ServerInfoToJSON,
} from '../models/index';

/**
 * 
 */
export class GeneralApi extends runtime.BaseAPI {

    /**
     * Server availablity check.
     */
    async availableHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/available`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Server availablity check.
     */
    async availableHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.availableHandlerRaw(initOverrides);
    }

    /**
     * Shows information about the server software version.
     */
    async serverInfoHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServerInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServerInfoFromJSON(jsonValue));
    }

    /**
     * Shows information about the server software version.
     */
    async serverInfoHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServerInfo> {
        const response = await this.serverInfoHandlerRaw(initOverrides);
        return await response.value();
    }

}
