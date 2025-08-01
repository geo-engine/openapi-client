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
exports.instanceOfMlModelOutputNoDataHandling = instanceOfMlModelOutputNoDataHandling;
exports.MlModelOutputNoDataHandlingFromJSON = MlModelOutputNoDataHandlingFromJSON;
exports.MlModelOutputNoDataHandlingFromJSONTyped = MlModelOutputNoDataHandlingFromJSONTyped;
exports.MlModelOutputNoDataHandlingToJSON = MlModelOutputNoDataHandlingToJSON;
exports.MlModelOutputNoDataHandlingToJSONTyped = MlModelOutputNoDataHandlingToJSONTyped;
const MlModelOutputNoDataHandlingVariant_1 = require("./MlModelOutputNoDataHandlingVariant");
/**
 * Check if a given object implements the MlModelOutputNoDataHandling interface.
 */
function instanceOfMlModelOutputNoDataHandling(value) {
    if (!('variant' in value) || value['variant'] === undefined)
        return false;
    return true;
}
function MlModelOutputNoDataHandlingFromJSON(json) {
    return MlModelOutputNoDataHandlingFromJSONTyped(json, false);
}
function MlModelOutputNoDataHandlingFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'noDataValue': json['noDataValue'] == null ? undefined : json['noDataValue'],
        'variant': (0, MlModelOutputNoDataHandlingVariant_1.MlModelOutputNoDataHandlingVariantFromJSON)(json['variant']),
    };
}
function MlModelOutputNoDataHandlingToJSON(json) {
    return MlModelOutputNoDataHandlingToJSONTyped(json, false);
}
function MlModelOutputNoDataHandlingToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'noDataValue': value['noDataValue'],
        'variant': (0, MlModelOutputNoDataHandlingVariant_1.MlModelOutputNoDataHandlingVariantToJSON)(value['variant']),
    };
}
