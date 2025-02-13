"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxisOrder = void 0;
exports.instanceOfAxisOrder = instanceOfAxisOrder;
exports.AxisOrderFromJSON = AxisOrderFromJSON;
exports.AxisOrderFromJSONTyped = AxisOrderFromJSONTyped;
exports.AxisOrderToJSON = AxisOrderToJSON;
exports.AxisOrderToJSONTyped = AxisOrderToJSONTyped;
/**
 *
 * @export
 */
exports.AxisOrder = {
    NorthEast: 'northEast',
    EastNorth: 'eastNorth'
};
function instanceOfAxisOrder(value) {
    for (const key in exports.AxisOrder) {
        if (Object.prototype.hasOwnProperty.call(exports.AxisOrder, key)) {
            if (exports.AxisOrder[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function AxisOrderFromJSON(json) {
    return AxisOrderFromJSONTyped(json, false);
}
function AxisOrderFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function AxisOrderToJSON(value) {
    return value;
}
function AxisOrderToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
