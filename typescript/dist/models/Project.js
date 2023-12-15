"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectToJSON = exports.ProjectFromJSONTyped = exports.ProjectFromJSON = exports.instanceOfProject = void 0;
const Plot_1 = require("./Plot");
const ProjectLayer_1 = require("./ProjectLayer");
const ProjectVersion_1 = require("./ProjectVersion");
const STRectangle_1 = require("./STRectangle");
const TimeStep_1 = require("./TimeStep");
/**
 * Check if a given object implements the Project interface.
 */
function instanceOfProject(value) {
    let isInstance = true;
    isInstance = isInstance && "bounds" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "layers" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "plots" in value;
    isInstance = isInstance && "timeStep" in value;
    isInstance = isInstance && "version" in value;
    return isInstance;
}
exports.instanceOfProject = instanceOfProject;
function ProjectFromJSON(json) {
    return ProjectFromJSONTyped(json, false);
}
exports.ProjectFromJSON = ProjectFromJSON;
function ProjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bounds': (0, STRectangle_1.STRectangleFromJSON)(json['bounds']),
        'description': json['description'],
        'id': json['id'],
        'layers': (json['layers'].map(ProjectLayer_1.ProjectLayerFromJSON)),
        'name': json['name'],
        'plots': (json['plots'].map(Plot_1.PlotFromJSON)),
        'timeStep': (0, TimeStep_1.TimeStepFromJSON)(json['timeStep']),
        'version': (0, ProjectVersion_1.ProjectVersionFromJSON)(json['version']),
    };
}
exports.ProjectFromJSONTyped = ProjectFromJSONTyped;
function ProjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bounds': (0, STRectangle_1.STRectangleToJSON)(value.bounds),
        'description': value.description,
        'id': value.id,
        'layers': (value.layers.map(ProjectLayer_1.ProjectLayerToJSON)),
        'name': value.name,
        'plots': (value.plots.map(Plot_1.PlotToJSON)),
        'timeStep': (0, TimeStep_1.TimeStepToJSON)(value.timeStep),
        'version': (0, ProjectVersion_1.ProjectVersionToJSON)(value.version),
    };
}
exports.ProjectToJSON = ProjectToJSON;
