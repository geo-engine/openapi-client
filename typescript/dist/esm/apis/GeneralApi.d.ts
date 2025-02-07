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
import type { ServerInfo } from '../models/index';
/**
 *
 */
export declare class GeneralApi extends runtime.BaseAPI {
    /**
     * Server availablity check.
     */
    availableHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Server availablity check.
     */
    availableHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Shows information about the server software version.
     */
    serverInfoHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServerInfo>>;
    /**
     * Shows information about the server software version.
     */
    serverInfoHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServerInfo>;
}
