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
exports.CsvHeader = void 0;
exports.instanceOfCsvHeader = instanceOfCsvHeader;
exports.CsvHeaderFromJSON = CsvHeaderFromJSON;
exports.CsvHeaderFromJSONTyped = CsvHeaderFromJSONTyped;
exports.CsvHeaderToJSON = CsvHeaderToJSON;
exports.CsvHeaderToJSONTyped = CsvHeaderToJSONTyped;
/**
 *
 * @export
 */
exports.CsvHeader = {
    Yes: 'yes',
    No: 'no',
    Auto: 'auto'
};
function instanceOfCsvHeader(value) {
    for (const key in exports.CsvHeader) {
        if (Object.prototype.hasOwnProperty.call(exports.CsvHeader, key)) {
            if (exports.CsvHeader[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function CsvHeaderFromJSON(json) {
    return CsvHeaderFromJSONTyped(json, false);
}
function CsvHeaderFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function CsvHeaderToJSON(value) {
    return value;
}
function CsvHeaderToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
