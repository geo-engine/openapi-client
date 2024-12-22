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
exports.DerivedColorToJSON = exports.DerivedColorFromJSONTyped = exports.DerivedColorFromJSON = exports.instanceOfDerivedColor = exports.DerivedColorTypeEnum = void 0;
const Colorizer_1 = require("./Colorizer");
/**
 * @export
 */
exports.DerivedColorTypeEnum = {
    Derived: 'derived'
};
/**
 * Check if a given object implements the DerivedColor interface.
 */
function instanceOfDerivedColor(value) {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;
    isInstance = isInstance && "colorizer" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfDerivedColor = instanceOfDerivedColor;
function DerivedColorFromJSON(json) {
    return DerivedColorFromJSONTyped(json, false);
}
exports.DerivedColorFromJSON = DerivedColorFromJSON;
function DerivedColorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attribute': json['attribute'],
        'colorizer': (0, Colorizer_1.ColorizerFromJSON)(json['colorizer']),
        'type': json['type'],
    };
}
exports.DerivedColorFromJSONTyped = DerivedColorFromJSONTyped;
function DerivedColorToJSON(value) {
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
exports.DerivedColorToJSON = DerivedColorToJSON;
