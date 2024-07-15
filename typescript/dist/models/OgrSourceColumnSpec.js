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
exports.OgrSourceColumnSpecToJSON = exports.OgrSourceColumnSpecFromJSONTyped = exports.OgrSourceColumnSpecFromJSON = exports.instanceOfOgrSourceColumnSpec = void 0;
const runtime_1 = require("../runtime");
const FormatSpecifics_1 = require("./FormatSpecifics");
/**
 * Check if a given object implements the OgrSourceColumnSpec interface.
 */
function instanceOfOgrSourceColumnSpec(value) {
    let isInstance = true;
    isInstance = isInstance && "x" in value;
    return isInstance;
}
exports.instanceOfOgrSourceColumnSpec = instanceOfOgrSourceColumnSpec;
function OgrSourceColumnSpecFromJSON(json) {
    return OgrSourceColumnSpecFromJSONTyped(json, false);
}
exports.OgrSourceColumnSpecFromJSON = OgrSourceColumnSpecFromJSON;
function OgrSourceColumnSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bool': !(0, runtime_1.exists)(json, 'bool') ? undefined : json['bool'],
        'datetime': !(0, runtime_1.exists)(json, 'datetime') ? undefined : json['datetime'],
        '_float': !(0, runtime_1.exists)(json, 'float') ? undefined : json['float'],
        'formatSpecifics': !(0, runtime_1.exists)(json, 'formatSpecifics') ? undefined : (0, FormatSpecifics_1.FormatSpecificsFromJSON)(json['formatSpecifics']),
        '_int': !(0, runtime_1.exists)(json, 'int') ? undefined : json['int'],
        'rename': !(0, runtime_1.exists)(json, 'rename') ? undefined : json['rename'],
        'text': !(0, runtime_1.exists)(json, 'text') ? undefined : json['text'],
        'x': json['x'],
        'y': !(0, runtime_1.exists)(json, 'y') ? undefined : json['y'],
    };
}
exports.OgrSourceColumnSpecFromJSONTyped = OgrSourceColumnSpecFromJSONTyped;
function OgrSourceColumnSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bool': value.bool,
        'datetime': value.datetime,
        'float': value._float,
        'formatSpecifics': (0, FormatSpecifics_1.FormatSpecificsToJSON)(value.formatSpecifics),
        'int': value._int,
        'rename': value.rename,
        'text': value.text,
        'x': value.x,
        'y': value.y,
    };
}
exports.OgrSourceColumnSpecToJSON = OgrSourceColumnSpecToJSON;
