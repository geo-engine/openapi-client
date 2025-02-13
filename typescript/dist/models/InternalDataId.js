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
exports.InternalDataIdTypeEnum = void 0;
exports.instanceOfInternalDataId = instanceOfInternalDataId;
exports.InternalDataIdFromJSON = InternalDataIdFromJSON;
exports.InternalDataIdFromJSONTyped = InternalDataIdFromJSONTyped;
exports.InternalDataIdToJSON = InternalDataIdToJSON;
exports.InternalDataIdToJSONTyped = InternalDataIdToJSONTyped;
/**
 * @export
 */
exports.InternalDataIdTypeEnum = {
    Internal: 'internal'
};
/**
 * Check if a given object implements the InternalDataId interface.
 */
function instanceOfInternalDataId(value) {
    if (!('datasetId' in value) || value['datasetId'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function InternalDataIdFromJSON(json) {
    return InternalDataIdFromJSONTyped(json, false);
}
function InternalDataIdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'datasetId': json['datasetId'],
        'type': json['type'],
    };
}
function InternalDataIdToJSON(json) {
    return InternalDataIdToJSONTyped(json, false);
}
function InternalDataIdToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'datasetId': value['datasetId'],
        'type': value['type'],
    };
}
