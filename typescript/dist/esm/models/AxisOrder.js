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
export const AxisOrder = {
    NorthEast: 'northEast',
    EastNorth: 'eastNorth'
};
export function instanceOfAxisOrder(value) {
    for (const key in AxisOrder) {
        if (Object.prototype.hasOwnProperty.call(AxisOrder, key)) {
            if (AxisOrder[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function AxisOrderFromJSON(json) {
    return AxisOrderFromJSONTyped(json, false);
}
export function AxisOrderFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function AxisOrderToJSON(value) {
    return value;
}
export function AxisOrderToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
