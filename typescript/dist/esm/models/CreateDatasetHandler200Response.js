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
/**
 * Check if a given object implements the CreateDatasetHandler200Response interface.
 */
export function instanceOfCreateDatasetHandler200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "datasetName" in value;
    return isInstance;
}
export function CreateDatasetHandler200ResponseFromJSON(json) {
    return CreateDatasetHandler200ResponseFromJSONTyped(json, false);
}
export function CreateDatasetHandler200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'datasetName': json['datasetName'],
    };
}
export function CreateDatasetHandler200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'datasetName': value.datasetName,
    };
}
