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
/**
 * Check if a given object implements the UploadFileLayersResponse interface.
 */
export function instanceOfUploadFileLayersResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "layers" in value;
    return isInstance;
}
export function UploadFileLayersResponseFromJSON(json) {
    return UploadFileLayersResponseFromJSONTyped(json, false);
}
export function UploadFileLayersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'layers': json['layers'],
    };
}
export function UploadFileLayersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'layers': value.layers,
    };
}
