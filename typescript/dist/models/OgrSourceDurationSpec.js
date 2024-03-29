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
exports.OgrSourceDurationSpecToJSON = exports.OgrSourceDurationSpecFromJSONTyped = exports.OgrSourceDurationSpecFromJSON = void 0;
const InfiniteOgrSourceDurationSpec_1 = require("./InfiniteOgrSourceDurationSpec");
const TimeStepWithType_1 = require("./TimeStepWithType");
const ZeroOgrSourceDurationSpec_1 = require("./ZeroOgrSourceDurationSpec");
function OgrSourceDurationSpecFromJSON(json) {
    return OgrSourceDurationSpecFromJSONTyped(json, false);
}
exports.OgrSourceDurationSpecFromJSON = OgrSourceDurationSpecFromJSON;
function OgrSourceDurationSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'infinite':
            return Object.assign(Object.assign({}, (0, InfiniteOgrSourceDurationSpec_1.InfiniteOgrSourceDurationSpecFromJSONTyped)(json, true)), { type: 'infinite' });
        case 'value':
            return Object.assign(Object.assign({}, (0, TimeStepWithType_1.TimeStepWithTypeFromJSONTyped)(json, true)), { type: 'value' });
        case 'zero':
            return Object.assign(Object.assign({}, (0, ZeroOgrSourceDurationSpec_1.ZeroOgrSourceDurationSpecFromJSONTyped)(json, true)), { type: 'zero' });
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${json['type']}'`);
    }
}
exports.OgrSourceDurationSpecFromJSONTyped = OgrSourceDurationSpecFromJSONTyped;
function OgrSourceDurationSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'infinite':
            return (0, InfiniteOgrSourceDurationSpec_1.InfiniteOgrSourceDurationSpecToJSON)(value);
        case 'value':
            return (0, TimeStepWithType_1.TimeStepWithTypeToJSON)(value);
        case 'zero':
            return (0, ZeroOgrSourceDurationSpec_1.ZeroOgrSourceDurationSpecToJSON)(value);
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${value['type']}'`);
    }
}
exports.OgrSourceDurationSpecToJSON = OgrSourceDurationSpecToJSON;
