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
import { instanceOfProjectLayer, ProjectLayerFromJSONTyped, ProjectLayerToJSON, } from './ProjectLayer';
import { ProjectUpdateToken, instanceOfProjectUpdateToken, ProjectUpdateTokenToJSON, } from './ProjectUpdateToken';
export function LayerUpdateFromJSON(json) {
    return LayerUpdateFromJSONTyped(json, false);
}
export function LayerUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (json === ProjectUpdateToken.None) {
        return ProjectUpdateToken.None;
    }
    else if (json === ProjectUpdateToken.Delete) {
        return ProjectUpdateToken.Delete;
    }
    else {
        return Object.assign({}, ProjectLayerFromJSONTyped(json, true));
    }
}
export function LayerUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (typeof value === 'object' && instanceOfProjectLayer(value)) {
        return ProjectLayerToJSON(value);
    }
    if (instanceOfProjectUpdateToken(value)) {
        return ProjectUpdateTokenToJSON(value);
    }
    return {};
}
