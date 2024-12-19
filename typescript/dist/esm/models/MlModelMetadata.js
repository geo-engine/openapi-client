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
import { RasterDataTypeFromJSON, RasterDataTypeToJSON, } from './RasterDataType';
/**
 * Check if a given object implements the MlModelMetadata interface.
 */
export function instanceOfMlModelMetadata(value) {
    let isInstance = true;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "inputType" in value;
    isInstance = isInstance && "numInputBands" in value;
    isInstance = isInstance && "outputType" in value;
    return isInstance;
}
export function MlModelMetadataFromJSON(json) {
    return MlModelMetadataFromJSONTyped(json, false);
}
export function MlModelMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fileName': json['fileName'],
        'inputType': RasterDataTypeFromJSON(json['inputType']),
        'numInputBands': json['numInputBands'],
        'outputType': RasterDataTypeFromJSON(json['outputType']),
    };
}
export function MlModelMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fileName': value.fileName,
        'inputType': RasterDataTypeToJSON(value.inputType),
        'numInputBands': value.numInputBands,
        'outputType': RasterDataTypeToJSON(value.outputType),
    };
}
