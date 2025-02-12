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
import { NumberParamFromJSON, NumberParamToJSON, } from './NumberParam';
import { ColorParamFromJSON, ColorParamToJSON, } from './ColorParam';
/**
 * Check if a given object implements the StrokeParam interface.
 */
export function instanceOfStrokeParam(value) {
    if (!('color' in value) || value['color'] === undefined)
        return false;
    if (!('width' in value) || value['width'] === undefined)
        return false;
    return true;
}
export function StrokeParamFromJSON(json) {
    return StrokeParamFromJSONTyped(json, false);
}
export function StrokeParamFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'color': ColorParamFromJSON(json['color']),
        'width': NumberParamFromJSON(json['width']),
    };
}
export function StrokeParamToJSON(json) {
    return StrokeParamToJSONTyped(json, false);
}
export function StrokeParamToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'color': ColorParamToJSON(value['color']),
        'width': NumberParamToJSON(value['width']),
    };
}
