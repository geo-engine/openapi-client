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
exports.DataPathToJSON = exports.DataPathFromJSONTyped = exports.DataPathFromJSON = void 0;
const DataPathOneOf_1 = require("./DataPathOneOf");
const DataPathOneOf1_1 = require("./DataPathOneOf1");
function DataPathFromJSON(json) {
    return DataPathFromJSONTyped(json, false);
}
exports.DataPathFromJSON = DataPathFromJSON;
function DataPathFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, DataPathOneOf_1.DataPathOneOfFromJSONTyped)(json, true)), (0, DataPathOneOf1_1.DataPathOneOf1FromJSONTyped)(json, true));
}
exports.DataPathFromJSONTyped = DataPathFromJSONTyped;
function DataPathToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, DataPathOneOf_1.instanceOfDataPathOneOf)(value)) {
        return (0, DataPathOneOf_1.DataPathOneOfToJSON)(value);
    }
    if ((0, DataPathOneOf1_1.instanceOfDataPathOneOf1)(value)) {
        return (0, DataPathOneOf1_1.DataPathOneOf1ToJSON)(value);
    }
    return {};
}
exports.DataPathToJSON = DataPathToJSON;
