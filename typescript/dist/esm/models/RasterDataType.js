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
 *
 * @export
 */
export const RasterDataType = {
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
export function instanceOfRasterDataType(value) {
    for (const key in RasterDataType) {
        if (Object.prototype.hasOwnProperty.call(RasterDataType, key)) {
            if (RasterDataType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function RasterDataTypeFromJSON(json) {
    return RasterDataTypeFromJSONTyped(json, false);
}
export function RasterDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function RasterDataTypeToJSON(value) {
    return value;
}
export function RasterDataTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
