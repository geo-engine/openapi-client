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
export const SpatialGridDescriptorState = {
    Source: 'source',
    Derived: 'derived'
};
export function instanceOfSpatialGridDescriptorState(value) {
    for (const key in SpatialGridDescriptorState) {
        if (Object.prototype.hasOwnProperty.call(SpatialGridDescriptorState, key)) {
            if (SpatialGridDescriptorState[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function SpatialGridDescriptorStateFromJSON(json) {
    return SpatialGridDescriptorStateFromJSONTyped(json, false);
}
export function SpatialGridDescriptorStateFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function SpatialGridDescriptorStateToJSON(value) {
    return value;
}
export function SpatialGridDescriptorStateToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
