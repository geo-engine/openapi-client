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
exports.instanceOfMlTensorShape3D = instanceOfMlTensorShape3D;
exports.MlTensorShape3DFromJSON = MlTensorShape3DFromJSON;
exports.MlTensorShape3DFromJSONTyped = MlTensorShape3DFromJSONTyped;
exports.MlTensorShape3DToJSON = MlTensorShape3DToJSON;
exports.MlTensorShape3DToJSONTyped = MlTensorShape3DToJSONTyped;
/**
 * Check if a given object implements the MlTensorShape3D interface.
 */
function instanceOfMlTensorShape3D(value) {
    if (!('bands' in value) || value['bands'] === undefined)
        return false;
    if (!('x' in value) || value['x'] === undefined)
        return false;
    if (!('y' in value) || value['y'] === undefined)
        return false;
    return true;
}
function MlTensorShape3DFromJSON(json) {
    return MlTensorShape3DFromJSONTyped(json, false);
}
function MlTensorShape3DFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bands': json['bands'],
        'x': json['x'],
        'y': json['y'],
    };
}
function MlTensorShape3DToJSON(json) {
    return MlTensorShape3DToJSONTyped(json, false);
}
function MlTensorShape3DToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bands': value['bands'],
        'x': value['x'],
        'y': value['y'],
    };
}
