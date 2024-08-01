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
exports.ExternalDataIdToJSON = exports.ExternalDataIdFromJSONTyped = exports.ExternalDataIdFromJSON = exports.instanceOfExternalDataId = exports.ExternalDataIdTypeEnum = void 0;
/**
 * @export
 */
exports.ExternalDataIdTypeEnum = {
    External: 'external'
};
/**
 * Check if a given object implements the ExternalDataId interface.
 */
function instanceOfExternalDataId(value) {
    let isInstance = true;
    isInstance = isInstance && "layerId" in value;
    isInstance = isInstance && "providerId" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfExternalDataId = instanceOfExternalDataId;
function ExternalDataIdFromJSON(json) {
    return ExternalDataIdFromJSONTyped(json, false);
}
exports.ExternalDataIdFromJSON = ExternalDataIdFromJSON;
function ExternalDataIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'layerId': json['layerId'],
        'providerId': json['providerId'],
        'type': json['type'],
    };
}
exports.ExternalDataIdFromJSONTyped = ExternalDataIdFromJSONTyped;
function ExternalDataIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'layerId': value.layerId,
        'providerId': value.providerId,
        'type': value.type,
    };
}
exports.ExternalDataIdToJSON = ExternalDataIdToJSON;
