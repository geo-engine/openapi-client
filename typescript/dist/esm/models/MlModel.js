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
import { MlModelMetadataFromJSON, MlModelMetadataToJSON, } from './MlModelMetadata';
/**
 * Check if a given object implements the MlModel interface.
 */
export function instanceOfMlModel(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "upload" in value;
    return isInstance;
}
export function MlModelFromJSON(json) {
    return MlModelFromJSONTyped(json, false);
}
export function MlModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'displayName': json['displayName'],
        'metadata': MlModelMetadataFromJSON(json['metadata']),
        'name': json['name'],
        'upload': json['upload'],
    };
}
export function MlModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'displayName': value.displayName,
        'metadata': MlModelMetadataToJSON(value.metadata),
        'name': value.name,
        'upload': value.upload,
    };
}
