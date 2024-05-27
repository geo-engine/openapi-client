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
exports.RasterDataTypeToJSON = exports.RasterDataTypeFromJSONTyped = exports.RasterDataTypeFromJSON = exports.instanceOfRasterDataType = exports.RasterDataType = void 0;
/**
 *
 * @export
 */
exports.RasterDataType = {
    U8: 'U8',
    U16: 'U16',
    U32: 'U32',
    U64: 'U64',
    I8: 'I8',
    I16: 'I16',
    I32: 'I32',
    I64: 'I64',
    F32: 'F32',
    F64: 'F64'
};
function instanceOfRasterDataType(value) {
    for (const key in exports.RasterDataType) {
        if (Object.prototype.hasOwnProperty.call(exports.RasterDataType, key)) {
            if (exports.RasterDataType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
exports.instanceOfRasterDataType = instanceOfRasterDataType;
function RasterDataTypeFromJSON(json) {
    return RasterDataTypeFromJSONTyped(json, false);
}
exports.RasterDataTypeFromJSON = RasterDataTypeFromJSON;
function RasterDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RasterDataTypeFromJSONTyped = RasterDataTypeFromJSONTyped;
function RasterDataTypeToJSON(value) {
    return value;
}
exports.RasterDataTypeToJSON = RasterDataTypeToJSON;
