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
exports.DerivedColorWithTypeToJSON = exports.DerivedColorWithTypeFromJSONTyped = exports.DerivedColorWithTypeFromJSON = exports.instanceOfDerivedColorWithType = exports.DerivedColorWithTypeTypeEnum = void 0;
const Colorizer_1 = require("./Colorizer");
/**
 * @export
 */
exports.DerivedColorWithTypeTypeEnum = {
    Derived: 'derived'
};
/**
 * Check if a given object implements the DerivedColorWithType interface.
 */
function instanceOfDerivedColorWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;
    isInstance = isInstance && "colorizer" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfDerivedColorWithType = instanceOfDerivedColorWithType;
function DerivedColorWithTypeFromJSON(json) {
    return DerivedColorWithTypeFromJSONTyped(json, false);
}
exports.DerivedColorWithTypeFromJSON = DerivedColorWithTypeFromJSON;
function DerivedColorWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attribute': json['attribute'],
        'colorizer': (0, Colorizer_1.ColorizerFromJSON)(json['colorizer']),
        'type': json['type'],
    };
}
exports.DerivedColorWithTypeFromJSONTyped = DerivedColorWithTypeFromJSONTyped;
function DerivedColorWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attribute': value.attribute,
        'colorizer': (0, Colorizer_1.ColorizerToJSON)(value.colorizer),
        'type': value.type,
    };
}
exports.DerivedColorWithTypeToJSON = DerivedColorWithTypeToJSON;