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
export const WfsVersion = {
    _200: '2.0.0'
};
export function instanceOfWfsVersion(value) {
    for (const key in WfsVersion) {
        if (Object.prototype.hasOwnProperty.call(WfsVersion, key)) {
            if (WfsVersion[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function WfsVersionFromJSON(json) {
    return WfsVersionFromJSONTyped(json, false);
}
export function WfsVersionFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function WfsVersionToJSON(value) {
    return value;
}
export function WfsVersionToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
