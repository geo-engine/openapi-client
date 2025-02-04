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

import {
    ProjectLayer,
    instanceOfProjectLayer,
    ProjectLayerFromJSON,
    ProjectLayerFromJSONTyped,
    ProjectLayerToJSON,
} from './ProjectLayer';
import {
    ProjectUpdateToken,
    instanceOfProjectUpdateToken,
    ProjectUpdateTokenFromJSON,
    ProjectUpdateTokenFromJSONTyped,
    ProjectUpdateTokenToJSON,
} from './ProjectUpdateToken';

/**
 * @type LayerUpdate
 * 
 * @export
 */
export type LayerUpdate = ProjectLayer | ProjectUpdateToken;

export function LayerUpdateFromJSON(json: any): LayerUpdate {
    return LayerUpdateFromJSONTyped(json, false);
}

export function LayerUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (json === ProjectUpdateToken.None) {
        return ProjectUpdateToken.None;
    } else if (json === ProjectUpdateToken.Delete) {
        return ProjectUpdateToken.Delete;
    } else {
        return { ...ProjectLayerFromJSONTyped(json, true) };
    }
}

export function LayerUpdateToJSON(value?: LayerUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (typeof value === 'object' && instanceOfProjectLayer(value)) {
        return ProjectLayerToJSON(value as ProjectLayer);
    }
    if (instanceOfProjectUpdateToken(value)) {
        return ProjectUpdateTokenToJSON(value as ProjectUpdateToken);
    }

    return {};
}

