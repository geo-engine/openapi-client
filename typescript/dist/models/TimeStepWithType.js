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
exports.TimeStepWithTypeToJSON = exports.TimeStepWithTypeFromJSONTyped = exports.TimeStepWithTypeFromJSON = exports.instanceOfTimeStepWithType = exports.TimeStepWithTypeTypeEnum = void 0;
const TimeGranularity_1 = require("./TimeGranularity");
/**
 * @export
 */
exports.TimeStepWithTypeTypeEnum = {
    Value: 'value'
};
/**
 * Check if a given object implements the TimeStepWithType interface.
 */
function instanceOfTimeStepWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "granularity" in value;
    isInstance = isInstance && "step" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfTimeStepWithType = instanceOfTimeStepWithType;
function TimeStepWithTypeFromJSON(json) {
    return TimeStepWithTypeFromJSONTyped(json, false);
}
exports.TimeStepWithTypeFromJSON = TimeStepWithTypeFromJSON;
function TimeStepWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'granularity': (0, TimeGranularity_1.TimeGranularityFromJSON)(json['granularity']),
        'step': json['step'],
        'type': json['type'],
    };
}
exports.TimeStepWithTypeFromJSONTyped = TimeStepWithTypeFromJSONTyped;
function TimeStepWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'granularity': (0, TimeGranularity_1.TimeGranularityToJSON)(value.granularity),
        'step': value.step,
        'type': value.type,
    };
}
exports.TimeStepWithTypeToJSON = TimeStepWithTypeToJSON;