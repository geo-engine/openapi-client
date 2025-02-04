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
exports.MetaDataDefinitionToJSON = exports.MetaDataDefinitionFromJSONTyped = exports.MetaDataDefinitionFromJSON = void 0;
const GdalMetaDataList_1 = require("./GdalMetaDataList");
const GdalMetaDataRegular_1 = require("./GdalMetaDataRegular");
const GdalMetaDataStatic_1 = require("./GdalMetaDataStatic");
const GdalMetadataNetCdfCf_1 = require("./GdalMetadataNetCdfCf");
const MockMetaData_1 = require("./MockMetaData");
const OgrMetaData_1 = require("./OgrMetaData");
function MetaDataDefinitionFromJSON(json) {
    return MetaDataDefinitionFromJSONTyped(json, false);
}
exports.MetaDataDefinitionFromJSON = MetaDataDefinitionFromJSON;
function MetaDataDefinitionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'GdalMetaDataList':
            return Object.assign(Object.assign({}, (0, GdalMetaDataList_1.GdalMetaDataListFromJSONTyped)(json, true)), { type: 'GdalMetaDataList' });
        case 'GdalMetaDataRegular':
            return Object.assign(Object.assign({}, (0, GdalMetaDataRegular_1.GdalMetaDataRegularFromJSONTyped)(json, true)), { type: 'GdalMetaDataRegular' });
        case 'GdalMetadataNetCdfCf':
            return Object.assign(Object.assign({}, (0, GdalMetadataNetCdfCf_1.GdalMetadataNetCdfCfFromJSONTyped)(json, true)), { type: 'GdalMetadataNetCdfCf' });
        case 'GdalStatic':
            return Object.assign(Object.assign({}, (0, GdalMetaDataStatic_1.GdalMetaDataStaticFromJSONTyped)(json, true)), { type: 'GdalStatic' });
        case 'MockMetaData':
            return Object.assign(Object.assign({}, (0, MockMetaData_1.MockMetaDataFromJSONTyped)(json, true)), { type: 'MockMetaData' });
        case 'OgrMetaData':
            return Object.assign(Object.assign({}, (0, OgrMetaData_1.OgrMetaDataFromJSONTyped)(json, true)), { type: 'OgrMetaData' });
        default:
            throw new Error(`No variant of MetaDataDefinition exists with 'type=${json['type']}'`);
    }
}
exports.MetaDataDefinitionFromJSONTyped = MetaDataDefinitionFromJSONTyped;
function MetaDataDefinitionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'GdalMetaDataList':
            return (0, GdalMetaDataList_1.GdalMetaDataListToJSON)(value);
        case 'GdalMetaDataRegular':
            return (0, GdalMetaDataRegular_1.GdalMetaDataRegularToJSON)(value);
        case 'GdalMetadataNetCdfCf':
            return (0, GdalMetadataNetCdfCf_1.GdalMetadataNetCdfCfToJSON)(value);
        case 'GdalStatic':
            return (0, GdalMetaDataStatic_1.GdalMetaDataStaticToJSON)(value);
        case 'MockMetaData':
            return (0, MockMetaData_1.MockMetaDataToJSON)(value);
        case 'OgrMetaData':
            return (0, OgrMetaData_1.OgrMetaDataToJSON)(value);
        default:
            throw new Error(`No variant of MetaDataDefinition exists with 'type=${value['type']}'`);
    }
}
exports.MetaDataDefinitionToJSON = MetaDataDefinitionToJSON;
