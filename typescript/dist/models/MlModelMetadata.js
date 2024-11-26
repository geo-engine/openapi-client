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
exports.MlModelMetadataToJSON = exports.MlModelMetadataFromJSONTyped = exports.MlModelMetadataFromJSON = exports.instanceOfMlModelMetadata = void 0;
const RasterDataType_1 = require("./RasterDataType");
const TensorShape3D_1 = require("./TensorShape3D");
/**
 * Check if a given object implements the MlModelMetadata interface.
 */
function instanceOfMlModelMetadata(value) {
    let isInstance = true;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "inputShape" in value;
    isInstance = isInstance && "inputType" in value;
    isInstance = isInstance && "outputShape" in value;
    isInstance = isInstance && "outputType" in value;
    return isInstance;
}
exports.instanceOfMlModelMetadata = instanceOfMlModelMetadata;
function MlModelMetadataFromJSON(json) {
    return MlModelMetadataFromJSONTyped(json, false);
}
exports.MlModelMetadataFromJSON = MlModelMetadataFromJSON;
function MlModelMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fileName': json['fileName'],
        'inputShape': (0, TensorShape3D_1.TensorShape3DFromJSON)(json['inputShape']),
        'inputType': (0, RasterDataType_1.RasterDataTypeFromJSON)(json['inputType']),
        'outputShape': (0, TensorShape3D_1.TensorShape3DFromJSON)(json['outputShape']),
        'outputType': (0, RasterDataType_1.RasterDataTypeFromJSON)(json['outputType']),
    };
}
exports.MlModelMetadataFromJSONTyped = MlModelMetadataFromJSONTyped;
function MlModelMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fileName': value.fileName,
        'inputShape': (0, TensorShape3D_1.TensorShape3DToJSON)(value.inputShape),
        'inputType': (0, RasterDataType_1.RasterDataTypeToJSON)(value.inputType),
        'outputShape': (0, TensorShape3D_1.TensorShape3DToJSON)(value.outputShape),
        'outputType': (0, RasterDataType_1.RasterDataTypeToJSON)(value.outputType),
    };
}
exports.MlModelMetadataToJSON = MlModelMetadataToJSON;
