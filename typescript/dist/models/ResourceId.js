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
exports.ResourceIdToJSON = exports.ResourceIdFromJSONTyped = exports.ResourceIdFromJSON = void 0;
const ResourceIdDatasetId_1 = require("./ResourceIdDatasetId");
const ResourceIdLayer_1 = require("./ResourceIdLayer");
const ResourceIdLayerCollection_1 = require("./ResourceIdLayerCollection");
const ResourceIdModelId_1 = require("./ResourceIdModelId");
const ResourceIdProject_1 = require("./ResourceIdProject");
function ResourceIdFromJSON(json) {
    return ResourceIdFromJSONTyped(json, false);
}
exports.ResourceIdFromJSON = ResourceIdFromJSON;
function ResourceIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'DatasetId':
            return Object.assign(Object.assign({}, (0, ResourceIdDatasetId_1.ResourceIdDatasetIdFromJSONTyped)(json, true)), { type: 'DatasetId' });
        case 'Layer':
            return Object.assign(Object.assign({}, (0, ResourceIdLayer_1.ResourceIdLayerFromJSONTyped)(json, true)), { type: 'Layer' });
        case 'LayerCollection':
            return Object.assign(Object.assign({}, (0, ResourceIdLayerCollection_1.ResourceIdLayerCollectionFromJSONTyped)(json, true)), { type: 'LayerCollection' });
        case 'ModelId':
            return Object.assign(Object.assign({}, (0, ResourceIdModelId_1.ResourceIdModelIdFromJSONTyped)(json, true)), { type: 'ModelId' });
        case 'Project':
            return Object.assign(Object.assign({}, (0, ResourceIdProject_1.ResourceIdProjectFromJSONTyped)(json, true)), { type: 'Project' });
        default:
            throw new Error(`No variant of ResourceId exists with 'type=${json['type']}'`);
    }
}
exports.ResourceIdFromJSONTyped = ResourceIdFromJSONTyped;
function ResourceIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'DatasetId':
            return (0, ResourceIdDatasetId_1.ResourceIdDatasetIdToJSON)(value);
        case 'Layer':
            return (0, ResourceIdLayer_1.ResourceIdLayerToJSON)(value);
        case 'LayerCollection':
            return (0, ResourceIdLayerCollection_1.ResourceIdLayerCollectionToJSON)(value);
        case 'ModelId':
            return (0, ResourceIdModelId_1.ResourceIdModelIdToJSON)(value);
        case 'Project':
            return (0, ResourceIdProject_1.ResourceIdProjectToJSON)(value);
        default:
            throw new Error(`No variant of ResourceId exists with 'type=${value['type']}'`);
    }
}
exports.ResourceIdToJSON = ResourceIdToJSON;
