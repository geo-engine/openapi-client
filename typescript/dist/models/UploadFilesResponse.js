"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFilesResponseToJSON = exports.UploadFilesResponseFromJSONTyped = exports.UploadFilesResponseFromJSON = exports.instanceOfUploadFilesResponse = void 0;
/**
 * Check if a given object implements the UploadFilesResponse interface.
 */
function instanceOfUploadFilesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "files" in value;
    return isInstance;
}
exports.instanceOfUploadFilesResponse = instanceOfUploadFilesResponse;
function UploadFilesResponseFromJSON(json) {
    return UploadFilesResponseFromJSONTyped(json, false);
}
exports.UploadFilesResponseFromJSON = UploadFilesResponseFromJSON;
function UploadFilesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'files': json['files'],
    };
}
exports.UploadFilesResponseFromJSONTyped = UploadFilesResponseFromJSONTyped;
function UploadFilesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'files': value.files,
    };
}
exports.UploadFilesResponseToJSON = UploadFilesResponseToJSON;
