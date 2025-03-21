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
 * An enum that contains all possible vector data types
 * @export
 */
export const VectorDataType = {
    Data: 'Data',
    MultiPoint: 'MultiPoint',
    MultiLineString: 'MultiLineString',
    MultiPolygon: 'MultiPolygon'
};
export function instanceOfVectorDataType(value) {
    for (const key in VectorDataType) {
        if (Object.prototype.hasOwnProperty.call(VectorDataType, key)) {
            if (VectorDataType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function VectorDataTypeFromJSON(json) {
    return VectorDataTypeFromJSONTyped(json, false);
}
export function VectorDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function VectorDataTypeToJSON(value) {
    return value;
}
export function VectorDataTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
