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
import { PlotOutputFormatFromJSON, PlotOutputFormatToJSON, } from './PlotOutputFormat';
/**
 * Check if a given object implements the WrappedPlotOutput interface.
 */
export function instanceOfWrappedPlotOutput(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    if (!('outputFormat' in value) || value['outputFormat'] === undefined)
        return false;
    if (!('plotType' in value) || value['plotType'] === undefined)
        return false;
    return true;
}
export function WrappedPlotOutputFromJSON(json) {
    return WrappedPlotOutputFromJSONTyped(json, false);
}
export function WrappedPlotOutputFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'],
        'outputFormat': PlotOutputFormatFromJSON(json['outputFormat']),
        'plotType': json['plotType'],
    };
}
export function WrappedPlotOutputToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
        'outputFormat': PlotOutputFormatToJSON(value['outputFormat']),
        'plotType': value['plotType'],
    };
}
