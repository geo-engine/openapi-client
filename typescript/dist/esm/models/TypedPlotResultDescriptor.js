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
import { PlotResultDescriptorFromJSONTyped, PlotResultDescriptorToJSONTyped, } from './PlotResultDescriptor';
/**
 * @export
 */
export const TypedPlotResultDescriptorTypeEnum = {
    Plot: 'plot'
};
/**
 * Check if a given object implements the TypedPlotResultDescriptor interface.
 */
export function instanceOfTypedPlotResultDescriptor(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
export function TypedPlotResultDescriptorFromJSON(json) {
    return TypedPlotResultDescriptorFromJSONTyped(json, false);
}
export function TypedPlotResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, PlotResultDescriptorFromJSONTyped(json, true)), { 'type': json['type'] });
}
export function TypedPlotResultDescriptorToJSON(json) {
    return TypedPlotResultDescriptorToJSONTyped(json, false);
}
export function TypedPlotResultDescriptorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, PlotResultDescriptorToJSONTyped(value, true)), { 'type': value['type'] });
}
