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
exports.VolumeToJSON = exports.VolumeFromJSONTyped = exports.VolumeFromJSON = exports.instanceOfVolume = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Volume interface.
 */
function instanceOfVolume(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfVolume = instanceOfVolume;
function VolumeFromJSON(json) {
    return VolumeFromJSONTyped(json, false);
}
exports.VolumeFromJSON = VolumeFromJSON;
function VolumeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'path': !(0, runtime_1.exists)(json, 'path') ? undefined : json['path'],
    };
}
exports.VolumeFromJSONTyped = VolumeFromJSONTyped;
function VolumeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'path': value.path,
    };
}
exports.VolumeToJSON = VolumeToJSON;
