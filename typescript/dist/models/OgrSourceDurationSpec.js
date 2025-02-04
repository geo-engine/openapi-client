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
exports.OgrSourceDurationSpecToJSON = exports.OgrSourceDurationSpecFromJSONTyped = exports.OgrSourceDurationSpecFromJSON = void 0;
const OgrSourceDurationSpecInfinite_1 = require("./OgrSourceDurationSpecInfinite");
const OgrSourceDurationSpecValue_1 = require("./OgrSourceDurationSpecValue");
const OgrSourceDurationSpecZero_1 = require("./OgrSourceDurationSpecZero");
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
            return Object.assign(Object.assign({}, (0, OgrSourceDurationSpecInfinite_1.OgrSourceDurationSpecInfiniteFromJSONTyped)(json, true)), { type: 'infinite' });
        case 'value':
            return Object.assign(Object.assign({}, (0, OgrSourceDurationSpecValue_1.OgrSourceDurationSpecValueFromJSONTyped)(json, true)), { type: 'value' });
        case 'zero':
            return Object.assign(Object.assign({}, (0, OgrSourceDurationSpecZero_1.OgrSourceDurationSpecZeroFromJSONTyped)(json, true)), { type: 'zero' });
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
            return (0, OgrSourceDurationSpecInfinite_1.OgrSourceDurationSpecInfiniteToJSON)(value);
        case 'value':
            return (0, OgrSourceDurationSpecValue_1.OgrSourceDurationSpecValueToJSON)(value);
        case 'zero':
            return (0, OgrSourceDurationSpecZero_1.OgrSourceDurationSpecZeroToJSON)(value);
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${value['type']}'`);
    }
}
exports.OgrSourceDurationSpecToJSON = OgrSourceDurationSpecToJSON;
