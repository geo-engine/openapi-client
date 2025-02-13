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
import { TypedPlotResultDescriptorFromJSONTyped, TypedPlotResultDescriptorToJSON, } from './TypedPlotResultDescriptor';
import { TypedRasterResultDescriptorFromJSONTyped, TypedRasterResultDescriptorToJSON, } from './TypedRasterResultDescriptor';
import { TypedVectorResultDescriptorFromJSONTyped, TypedVectorResultDescriptorToJSON, } from './TypedVectorResultDescriptor';
export function TypedResultDescriptorFromJSON(json) {
    return TypedResultDescriptorFromJSONTyped(json, false);
}
export function TypedResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'plot':
            return Object.assign({}, TypedPlotResultDescriptorFromJSONTyped(json, true), { type: 'plot' });
        case 'raster':
            return Object.assign({}, TypedRasterResultDescriptorFromJSONTyped(json, true), { type: 'raster' });
        case 'vector':
            return Object.assign({}, TypedVectorResultDescriptorFromJSONTyped(json, true), { type: 'vector' });
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${json['type']}'`);
    }
}
export function TypedResultDescriptorToJSON(json) {
    return TypedResultDescriptorToJSONTyped(json, false);
}
export function TypedResultDescriptorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'plot':
            return Object.assign({}, TypedPlotResultDescriptorToJSON(value), { type: 'plot' });
        case 'raster':
            return Object.assign({}, TypedRasterResultDescriptorToJSON(value), { type: 'raster' });
        case 'vector':
            return Object.assign({}, TypedVectorResultDescriptorToJSON(value), { type: 'vector' });
        default:
            throw new Error(`No variant of TypedResultDescriptor exists with 'type=${value['type']}'`);
    }
}
