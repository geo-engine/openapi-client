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
export const OrderBy = {
    NameAsc: 'NameAsc',
    NameDesc: 'NameDesc'
};
export function instanceOfOrderBy(value) {
    for (const key in OrderBy) {
        if (Object.prototype.hasOwnProperty.call(OrderBy, key)) {
            if (OrderBy[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function OrderByFromJSON(json) {
    return OrderByFromJSONTyped(json, false);
}
export function OrderByFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function OrderByToJSON(value) {
    return value;
}
export function OrderByToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
