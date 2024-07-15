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
exports.DataIdToJSON = exports.DataIdFromJSONTyped = exports.DataIdFromJSON = void 0;
const ExternalDataIdWithType_1 = require("./ExternalDataIdWithType");
const InternalDataId_1 = require("./InternalDataId");
function DataIdFromJSON(json) {
    return DataIdFromJSONTyped(json, false);
}
exports.DataIdFromJSON = DataIdFromJSON;
function DataIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'external':
            return Object.assign(Object.assign({}, (0, ExternalDataIdWithType_1.ExternalDataIdWithTypeFromJSONTyped)(json, true)), { type: 'external' });
        case 'internal':
            return Object.assign(Object.assign({}, (0, InternalDataId_1.InternalDataIdFromJSONTyped)(json, true)), { type: 'internal' });
        default:
            throw new Error(`No variant of DataId exists with 'type=${json['type']}'`);
    }
}
exports.DataIdFromJSONTyped = DataIdFromJSONTyped;
function DataIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'external':
            return (0, ExternalDataIdWithType_1.ExternalDataIdWithTypeToJSON)(value);
        case 'internal':
            return (0, InternalDataId_1.InternalDataIdToJSON)(value);
        default:
            throw new Error(`No variant of DataId exists with 'type=${value['type']}'`);
    }
}
exports.DataIdToJSON = DataIdToJSON;
