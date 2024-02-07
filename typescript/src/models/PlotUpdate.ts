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

import {
    Plot,
    instanceOfPlot,
    PlotFromJSON,
    PlotFromJSONTyped,
    PlotToJSON,
} from './Plot';
import {
    ProjectUpdateToken,
    instanceOfProjectUpdateToken,
    ProjectUpdateTokenFromJSON,
    ProjectUpdateTokenFromJSONTyped,
    ProjectUpdateTokenToJSON,
} from './ProjectUpdateToken';

/**
 * @type PlotUpdate
 * 
 * @export
 */
export type PlotUpdate = Plot | ProjectUpdateToken;

export function PlotUpdateFromJSON(json: any): PlotUpdate {
    return PlotUpdateFromJSONTyped(json, false);
}

export function PlotUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (json === ProjectUpdateToken.None) {
        return ProjectUpdateToken.None;
    } else if (json === ProjectUpdateToken.Delete) {
        return ProjectUpdateToken.Delete;
    } else {
        return { ...PlotFromJSONTyped(json, true) };
    }
}

export function PlotUpdateToJSON(value?: PlotUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (typeof value === 'object' && instanceOfPlot(value)) {
        return PlotToJSON(value as Plot);
    }
    if (instanceOfProjectUpdateToken(value)) {
        return ProjectUpdateTokenToJSON(value as ProjectUpdateToken);
    }

    return {};
}

