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
exports.TypedVectorResultDescriptorToJSONTyped = exports.TypedVectorResultDescriptorToJSON = exports.TypedVectorResultDescriptorFromJSONTyped = exports.TypedVectorResultDescriptorFromJSON = exports.instanceOfTypedVectorResultDescriptor = exports.TypedVectorResultDescriptorTypeEnum = void 0;
const VectorResultDescriptor_1 = require("./VectorResultDescriptor");
/**
 * @export
 */
exports.TypedVectorResultDescriptorTypeEnum = {
    Vector: 'vector'
};
/**
 * Check if a given object implements the TypedVectorResultDescriptor interface.
 */
function instanceOfTypedVectorResultDescriptor(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfTypedVectorResultDescriptor = instanceOfTypedVectorResultDescriptor;
function TypedVectorResultDescriptorFromJSON(json) {
    return TypedVectorResultDescriptorFromJSONTyped(json, false);
}
exports.TypedVectorResultDescriptorFromJSON = TypedVectorResultDescriptorFromJSON;
function TypedVectorResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, VectorResultDescriptor_1.VectorResultDescriptorFromJSONTyped)(json, true)), { 'type': json['type'] });
}
exports.TypedVectorResultDescriptorFromJSONTyped = TypedVectorResultDescriptorFromJSONTyped;
function TypedVectorResultDescriptorToJSON(json) {
    return TypedVectorResultDescriptorToJSONTyped(json, false);
}
exports.TypedVectorResultDescriptorToJSON = TypedVectorResultDescriptorToJSON;
function TypedVectorResultDescriptorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, VectorResultDescriptor_1.VectorResultDescriptorToJSONTyped)(value, true)), { 'type': value['type'] });
}
exports.TypedVectorResultDescriptorToJSONTyped = TypedVectorResultDescriptorToJSONTyped;
