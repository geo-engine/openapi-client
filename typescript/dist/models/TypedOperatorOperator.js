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
exports.TypedOperatorOperatorToJSON = exports.TypedOperatorOperatorFromJSONTyped = exports.TypedOperatorOperatorFromJSON = exports.instanceOfTypedOperatorOperator = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TypedOperatorOperator interface.
 */
function instanceOfTypedOperatorOperator(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfTypedOperatorOperator = instanceOfTypedOperatorOperator;
function TypedOperatorOperatorFromJSON(json) {
    return TypedOperatorOperatorFromJSONTyped(json, false);
}
exports.TypedOperatorOperatorFromJSON = TypedOperatorOperatorFromJSON;
function TypedOperatorOperatorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'params': !(0, runtime_1.exists)(json, 'params') ? undefined : json['params'],
        'sources': !(0, runtime_1.exists)(json, 'sources') ? undefined : json['sources'],
        'type': json['type'],
    };
}
exports.TypedOperatorOperatorFromJSONTyped = TypedOperatorOperatorFromJSONTyped;
function TypedOperatorOperatorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'params': value.params,
        'sources': value.sources,
        'type': value.type,
    };
}
exports.TypedOperatorOperatorToJSON = TypedOperatorOperatorToJSON;
