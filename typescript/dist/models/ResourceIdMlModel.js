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
exports.ResourceIdMlModelToJSON = exports.ResourceIdMlModelFromJSONTyped = exports.ResourceIdMlModelFromJSON = exports.instanceOfResourceIdMlModel = exports.ResourceIdMlModelTypeEnum = void 0;
/**
 * @export
 */
exports.ResourceIdMlModelTypeEnum = {
    MlModel: 'MlModel'
};
/**
 * Check if a given object implements the ResourceIdMlModel interface.
 */
function instanceOfResourceIdMlModel(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfResourceIdMlModel = instanceOfResourceIdMlModel;
function ResourceIdMlModelFromJSON(json) {
    return ResourceIdMlModelFromJSONTyped(json, false);
}
exports.ResourceIdMlModelFromJSON = ResourceIdMlModelFromJSON;
function ResourceIdMlModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
exports.ResourceIdMlModelFromJSONTyped = ResourceIdMlModelFromJSONTyped;
function ResourceIdMlModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': value.type,
    };
}
exports.ResourceIdMlModelToJSON = ResourceIdMlModelToJSON;
