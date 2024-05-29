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
exports.ResourceToJSON = exports.ResourceFromJSONTyped = exports.ResourceFromJSON = void 0;
const ResourceDataset_1 = require("./ResourceDataset");
const ResourceLayer_1 = require("./ResourceLayer");
const ResourceLayerCollection_1 = require("./ResourceLayerCollection");
const ResourceProject_1 = require("./ResourceProject");
function ResourceFromJSON(json) {
    return ResourceFromJSONTyped(json, false);
}
exports.ResourceFromJSON = ResourceFromJSON;
function ResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'dataset':
            return Object.assign(Object.assign({}, (0, ResourceDataset_1.ResourceDatasetFromJSONTyped)(json, true)), { type: 'dataset' });
        case 'layer':
            return Object.assign(Object.assign({}, (0, ResourceLayer_1.ResourceLayerFromJSONTyped)(json, true)), { type: 'layer' });
        case 'layerCollection':
            return Object.assign(Object.assign({}, (0, ResourceLayerCollection_1.ResourceLayerCollectionFromJSONTyped)(json, true)), { type: 'layerCollection' });
        case 'project':
            return Object.assign(Object.assign({}, (0, ResourceProject_1.ResourceProjectFromJSONTyped)(json, true)), { type: 'project' });
        default:
            throw new Error(`No variant of Resource exists with 'type=${json['type']}'`);
    }
}
exports.ResourceFromJSONTyped = ResourceFromJSONTyped;
function ResourceToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'dataset':
            return (0, ResourceDataset_1.ResourceDatasetToJSON)(value);
        case 'layer':
            return (0, ResourceLayer_1.ResourceLayerToJSON)(value);
        case 'layerCollection':
            return (0, ResourceLayerCollection_1.ResourceLayerCollectionToJSON)(value);
        case 'project':
            return (0, ResourceProject_1.ResourceProjectToJSON)(value);
        default:
            throw new Error(`No variant of Resource exists with 'type=${value['type']}'`);
    }
}
exports.ResourceToJSON = ResourceToJSON;
