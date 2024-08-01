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
exports.InternalDataIdToJSON = exports.InternalDataIdFromJSONTyped = exports.InternalDataIdFromJSON = exports.instanceOfInternalDataId = exports.InternalDataIdTypeEnum = void 0;
/**
 * @export
 */
exports.InternalDataIdTypeEnum = {
    Internal: 'internal',
    External: 'external'
};
/**
 * Check if a given object implements the InternalDataId interface.
 */
function instanceOfInternalDataId(value) {
    let isInstance = true;
    isInstance = isInstance && "datasetId" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfInternalDataId = instanceOfInternalDataId;
function InternalDataIdFromJSON(json) {
    return InternalDataIdFromJSONTyped(json, false);
}
exports.InternalDataIdFromJSON = InternalDataIdFromJSON;
function InternalDataIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'datasetId': json['datasetId'],
        'type': json['type'],
    };
}
exports.InternalDataIdFromJSONTyped = InternalDataIdFromJSONTyped;
function InternalDataIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'datasetId': value.datasetId,
        'type': value.type,
    };
}
exports.InternalDataIdToJSON = InternalDataIdToJSON;
