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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UploadFilesResponse
 */
export interface UploadFilesResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof UploadFilesResponse
     */
    files: Array<string>;
}

/**
 * Check if a given object implements the UploadFilesResponse interface.
 */
export function instanceOfUploadFilesResponse(value: object): value is UploadFilesResponse {
    if (!('files' in value) || value['files'] === undefined) return false;
    return true;
}

export function UploadFilesResponseFromJSON(json: any): UploadFilesResponse {
    return UploadFilesResponseFromJSONTyped(json, false);
}

export function UploadFilesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFilesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'files': json['files'],
    };
}

export function UploadFilesResponseToJSON(json: any): UploadFilesResponse {
    return UploadFilesResponseToJSONTyped(json, false);
}

export function UploadFilesResponseToJSONTyped(value?: UploadFilesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'files': value['files'],
    };
}

