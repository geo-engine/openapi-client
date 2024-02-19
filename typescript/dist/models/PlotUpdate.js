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
exports.PlotUpdateToJSON = exports.PlotUpdateFromJSONTyped = exports.PlotUpdateFromJSON = void 0;
const Plot_1 = require("./Plot");
const ProjectUpdateToken_1 = require("./ProjectUpdateToken");
function PlotUpdateFromJSON(json) {
    return PlotUpdateFromJSONTyped(json, false);
}
exports.PlotUpdateFromJSON = PlotUpdateFromJSON;
function PlotUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (json === ProjectUpdateToken_1.ProjectUpdateToken.None) {
        return ProjectUpdateToken_1.ProjectUpdateToken.None;
    }
    else if (json === ProjectUpdateToken_1.ProjectUpdateToken.Delete) {
        return ProjectUpdateToken_1.ProjectUpdateToken.Delete;
    }
    else {
        return Object.assign({}, (0, Plot_1.PlotFromJSONTyped)(json, true));
    }
}
exports.PlotUpdateFromJSONTyped = PlotUpdateFromJSONTyped;
function PlotUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (typeof value === 'object' && (0, Plot_1.instanceOfPlot)(value)) {
        return (0, Plot_1.PlotToJSON)(value);
    }
    if ((0, ProjectUpdateToken_1.instanceOfProjectUpdateToken)(value)) {
        return (0, ProjectUpdateToken_1.ProjectUpdateTokenToJSON)(value);
    }
    return {};
}
exports.PlotUpdateToJSON = PlotUpdateToJSON;