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
 *
 * @export
 */
export const WcsVersion = {
    _0: '1.1.0',
    _1: '1.1.1'
};
export function instanceOfWcsVersion(value) {
    for (const key in WcsVersion) {
        if (Object.prototype.hasOwnProperty.call(WcsVersion, key)) {
            if (WcsVersion[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function WcsVersionFromJSON(json) {
    return WcsVersionFromJSONTyped(json, false);
}
export function WcsVersionFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function WcsVersionToJSON(value) {
    return value;
}
