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
export const GetMapExceptionFormat = {
    Xml: 'XML',
    Json: 'JSON'
};
export function instanceOfGetMapExceptionFormat(value) {
    for (const key in GetMapExceptionFormat) {
        if (Object.prototype.hasOwnProperty.call(GetMapExceptionFormat, key)) {
            if (GetMapExceptionFormat[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function GetMapExceptionFormatFromJSON(json) {
    return GetMapExceptionFormatFromJSONTyped(json, false);
}
export function GetMapExceptionFormatFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function GetMapExceptionFormatToJSON(value) {
    return value;
}
export function GetMapExceptionFormatToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
