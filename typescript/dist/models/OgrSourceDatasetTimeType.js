"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OgrSourceDatasetTimeTypeToJSON = exports.OgrSourceDatasetTimeTypeFromJSONTyped = exports.OgrSourceDatasetTimeTypeFromJSON = void 0;
const NoneOgrSourceDatasetTimeType_1 = require("./NoneOgrSourceDatasetTimeType");
const StartDurationOgrSourceDatasetTimeType_1 = require("./StartDurationOgrSourceDatasetTimeType");
const StartEndOgrSourceDatasetTimeType_1 = require("./StartEndOgrSourceDatasetTimeType");
const StartOgrSourceDatasetTimeType_1 = require("./StartOgrSourceDatasetTimeType");
function OgrSourceDatasetTimeTypeFromJSON(json) {
    return OgrSourceDatasetTimeTypeFromJSONTyped(json, false);
}
exports.OgrSourceDatasetTimeTypeFromJSON = OgrSourceDatasetTimeTypeFromJSON;
function OgrSourceDatasetTimeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'none':
            return Object.assign(Object.assign({}, (0, NoneOgrSourceDatasetTimeType_1.NoneOgrSourceDatasetTimeTypeFromJSONTyped)(json, true)), { type: 'none' });
        case 'start':
            return Object.assign(Object.assign({}, (0, StartOgrSourceDatasetTimeType_1.StartOgrSourceDatasetTimeTypeFromJSONTyped)(json, true)), { type: 'start' });
        case 'startDuration':
            return Object.assign(Object.assign({}, (0, StartDurationOgrSourceDatasetTimeType_1.StartDurationOgrSourceDatasetTimeTypeFromJSONTyped)(json, true)), { type: 'startDuration' });
        case 'startEnd':
            return Object.assign(Object.assign({}, (0, StartEndOgrSourceDatasetTimeType_1.StartEndOgrSourceDatasetTimeTypeFromJSONTyped)(json, true)), { type: 'startEnd' });
        default:
            throw new Error(`No variant of OgrSourceDatasetTimeType exists with 'type=${json['type']}'`);
    }
}
exports.OgrSourceDatasetTimeTypeFromJSONTyped = OgrSourceDatasetTimeTypeFromJSONTyped;
function OgrSourceDatasetTimeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'none':
            return (0, NoneOgrSourceDatasetTimeType_1.NoneOgrSourceDatasetTimeTypeToJSON)(value);
        case 'start':
            return (0, StartOgrSourceDatasetTimeType_1.StartOgrSourceDatasetTimeTypeToJSON)(value);
        case 'startDuration':
            return (0, StartDurationOgrSourceDatasetTimeType_1.StartDurationOgrSourceDatasetTimeTypeToJSON)(value);
        case 'startEnd':
            return (0, StartEndOgrSourceDatasetTimeType_1.StartEndOgrSourceDatasetTimeTypeToJSON)(value);
        default:
            throw new Error(`No variant of OgrSourceDatasetTimeType exists with 'type=${value['type']}'`);
    }
}
exports.OgrSourceDatasetTimeTypeToJSON = OgrSourceDatasetTimeTypeToJSON;
