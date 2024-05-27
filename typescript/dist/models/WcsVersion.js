"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WcsVersionToJSON = exports.WcsVersionFromJSONTyped = exports.WcsVersionFromJSON = exports.instanceOfWcsVersion = exports.WcsVersion = void 0;
/**
 *
 * @export
 */
exports.WcsVersion = {
    _0: '1.1.0',
    _1: '1.1.1'
};
function instanceOfWcsVersion(value) {
    for (const key in exports.WcsVersion) {
        if (Object.prototype.hasOwnProperty.call(exports.WcsVersion, key)) {
            if (exports.WcsVersion[key] === value) {
                return true;
            }
        }
    }
    return false;
}
exports.instanceOfWcsVersion = instanceOfWcsVersion;
function WcsVersionFromJSON(json) {
    return WcsVersionFromJSONTyped(json, false);
}
exports.WcsVersionFromJSON = WcsVersionFromJSON;
function WcsVersionFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.WcsVersionFromJSONTyped = WcsVersionFromJSONTyped;
function WcsVersionToJSON(value) {
    return value;
}
exports.WcsVersionToJSON = WcsVersionToJSON;
