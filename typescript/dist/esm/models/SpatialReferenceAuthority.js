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
 * A spatial reference authority that is part of a spatial reference definition
 * @export
 */
export const SpatialReferenceAuthority = {
    Epsg: 'EPSG',
    SrOrg: 'SR-ORG',
    Iau2000: 'IAU2000',
    Esri: 'ESRI'
};
export function instanceOfSpatialReferenceAuthority(value) {
    for (const key in SpatialReferenceAuthority) {
        if (Object.prototype.hasOwnProperty.call(SpatialReferenceAuthority, key)) {
            if (SpatialReferenceAuthority[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function SpatialReferenceAuthorityFromJSON(json) {
    return SpatialReferenceAuthorityFromJSONTyped(json, false);
}
export function SpatialReferenceAuthorityFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function SpatialReferenceAuthorityToJSON(value) {
    return value;
}
export function SpatialReferenceAuthorityToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
