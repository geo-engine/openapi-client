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
import { TimeStepFromJSON, TimeStepToJSON, } from './TimeStep';
import { PlotUpdateFromJSON, PlotUpdateToJSON, } from './PlotUpdate';
import { STRectangleFromJSON, STRectangleToJSON, } from './STRectangle';
import { LayerUpdateFromJSON, LayerUpdateToJSON, } from './LayerUpdate';
/**
 * Check if a given object implements the UpdateProject interface.
 */
export function instanceOfUpdateProject(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
export function UpdateProjectFromJSON(json) {
    return UpdateProjectFromJSONTyped(json, false);
}
export function UpdateProjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bounds': json['bounds'] == null ? undefined : STRectangleFromJSON(json['bounds']),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'],
        'layers': json['layers'] == null ? undefined : (json['layers'].map(LayerUpdateFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'plots': json['plots'] == null ? undefined : (json['plots'].map(PlotUpdateFromJSON)),
        'timeStep': json['timeStep'] == null ? undefined : TimeStepFromJSON(json['timeStep']),
    };
}
export function UpdateProjectToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bounds': STRectangleToJSON(value['bounds']),
        'description': value['description'],
        'id': value['id'],
        'layers': value['layers'] == null ? undefined : (value['layers'].map(LayerUpdateToJSON)),
        'name': value['name'],
        'plots': value['plots'] == null ? undefined : (value['plots'].map(PlotUpdateToJSON)),
        'timeStep': TimeStepToJSON(value['timeStep']),
    };
}
