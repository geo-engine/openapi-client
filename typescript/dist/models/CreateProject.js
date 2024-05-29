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
exports.CreateProjectToJSON = exports.CreateProjectFromJSONTyped = exports.CreateProjectFromJSON = exports.instanceOfCreateProject = void 0;
const STRectangle_1 = require("./STRectangle");
const TimeStep_1 = require("./TimeStep");
/**
 * Check if a given object implements the CreateProject interface.
 */
function instanceOfCreateProject(value) {
    if (!('bounds' in value))
        return false;
    if (!('description' in value))
        return false;
    if (!('name' in value))
        return false;
    return true;
}
exports.instanceOfCreateProject = instanceOfCreateProject;
function CreateProjectFromJSON(json) {
    return CreateProjectFromJSONTyped(json, false);
}
exports.CreateProjectFromJSON = CreateProjectFromJSON;
function CreateProjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bounds': (0, STRectangle_1.STRectangleFromJSON)(json['bounds']),
        'description': json['description'],
        'name': json['name'],
        'timeStep': json['timeStep'] == null ? undefined : (0, TimeStep_1.TimeStepFromJSON)(json['timeStep']),
    };
}
exports.CreateProjectFromJSONTyped = CreateProjectFromJSONTyped;
function CreateProjectToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bounds': (0, STRectangle_1.STRectangleToJSON)(value['bounds']),
        'description': value['description'],
        'name': value['name'],
        'timeStep': (0, TimeStep_1.TimeStepToJSON)(value['timeStep']),
    };
}
exports.CreateProjectToJSON = CreateProjectToJSON;
