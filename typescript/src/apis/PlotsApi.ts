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
  WrappedPlotOutput,
} from '../models/index';
import {
    WrappedPlotOutputFromJSON,
    WrappedPlotOutputToJSON,
} from '../models/index';

export interface GetPlotHandlerRequest {
    bbox: string;
    time: string;
    spatialResolution: string;
    id: string;
    crs?: string | null;
}

/**
 * 
 */
export class PlotsApi extends runtime.BaseAPI {

    /**
     * # Example  1. Upload the file `plain_data.csv` with the following content:  ```csv a 1 2 ``` 2. Create a dataset from it using the \"Plain Data\" example at `/dataset`. 3. Create a statistics workflow using the \"Statistics Plot\" example at `/workflow`. 4. Generate the plot with this handler.
     * Generates a plot.
     */
    async getPlotHandlerRaw(requestParameters: GetPlotHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WrappedPlotOutput>> {
        if (requestParameters.bbox === null || requestParameters.bbox === undefined) {
            throw new runtime.RequiredError('bbox','Required parameter requestParameters.bbox was null or undefined when calling getPlotHandler.');
        }

        if (requestParameters.time === null || requestParameters.time === undefined) {
            throw new runtime.RequiredError('time','Required parameter requestParameters.time was null or undefined when calling getPlotHandler.');
        }

        if (requestParameters.spatialResolution === null || requestParameters.spatialResolution === undefined) {
            throw new runtime.RequiredError('spatialResolution','Required parameter requestParameters.spatialResolution was null or undefined when calling getPlotHandler.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPlotHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.bbox !== undefined) {
            queryParameters['bbox'] = requestParameters.bbox;
        }

        if (requestParameters.crs !== undefined) {
            queryParameters['crs'] = requestParameters.crs;
        }

        if (requestParameters.time !== undefined) {
            queryParameters['time'] = requestParameters.time;
        }

        if (requestParameters.spatialResolution !== undefined) {
            queryParameters['spatialResolution'] = requestParameters.spatialResolution;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/plot/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WrappedPlotOutputFromJSON(jsonValue));
    }

    /**
     * # Example  1. Upload the file `plain_data.csv` with the following content:  ```csv a 1 2 ``` 2. Create a dataset from it using the \"Plain Data\" example at `/dataset`. 3. Create a statistics workflow using the \"Statistics Plot\" example at `/workflow`. 4. Generate the plot with this handler.
     * Generates a plot.
     */
    async getPlotHandler(requestParameters: GetPlotHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WrappedPlotOutput> {
        const response = await this.getPlotHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
