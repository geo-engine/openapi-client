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
exports.DatasetResourceToJSON = exports.DatasetResourceFromJSONTyped = exports.DatasetResourceFromJSON = exports.instanceOfDatasetResource = exports.DatasetResourceTypeEnum = void 0;
/**
 * @export
 */
exports.DatasetResourceTypeEnum = {
    Dataset: 'dataset'
};
/**
 * Check if a given object implements the DatasetResource interface.
 */
function instanceOfDatasetResource(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfDatasetResource = instanceOfDatasetResource;
function DatasetResourceFromJSON(json) {
    return DatasetResourceFromJSONTyped(json, false);
}
exports.DatasetResourceFromJSON = DatasetResourceFromJSON;
function DatasetResourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
exports.DatasetResourceFromJSONTyped = DatasetResourceFromJSONTyped;
function DatasetResourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': value.type,
    };
}
exports.DatasetResourceToJSON = DatasetResourceToJSON;
