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
exports.StaticNumberParamToJSON = exports.StaticNumberParamFromJSONTyped = exports.StaticNumberParamFromJSON = exports.instanceOfStaticNumberParam = exports.StaticNumberParamTypeEnum = void 0;
/**
 * @export
 */
exports.StaticNumberParamTypeEnum = {
    Static: 'static',
    Derived: 'derived'
};
/**
 * Check if a given object implements the StaticNumberParam interface.
 */
function instanceOfStaticNumberParam(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfStaticNumberParam = instanceOfStaticNumberParam;
function StaticNumberParamFromJSON(json) {
    return StaticNumberParamFromJSONTyped(json, false);
}
exports.StaticNumberParamFromJSON = StaticNumberParamFromJSON;
function StaticNumberParamFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'value': json['value'],
    };
}
exports.StaticNumberParamFromJSONTyped = StaticNumberParamFromJSONTyped;
function StaticNumberParamToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'value': value.value,
    };
}
exports.StaticNumberParamToJSON = StaticNumberParamToJSON;
