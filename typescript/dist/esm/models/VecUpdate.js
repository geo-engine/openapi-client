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
import { instanceOfPlot, PlotFromJSONTyped, PlotToJSON, } from './Plot';
import { instanceOfProjectUpdateToken, ProjectUpdateTokenFromJSONTyped, ProjectUpdateTokenToJSON, } from './ProjectUpdateToken';
export function VecUpdateFromJSON(json) {
    return VecUpdateFromJSONTyped(json, false);
}
export function VecUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if (instanceOfPlot(json)) {
        return PlotFromJSONTyped(json, true);
    }
    if (instanceOfProjectUpdateToken(json)) {
        return ProjectUpdateTokenFromJSONTyped(json, true);
    }
    return {};
}
export function VecUpdateToJSON(json) {
    return VecUpdateToJSONTyped(json, false);
}
export function VecUpdateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    if (typeof value === 'object' && instanceOfPlot(value)) {
        return PlotToJSON(value);
    }
    if (instanceOfProjectUpdateToken(value)) {
        return ProjectUpdateTokenToJSON(value);
    }
    return {};
}
