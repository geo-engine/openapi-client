/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MeasurementFromJSON, MeasurementToJSON, } from './Measurement';
/**
 * Check if a given object implements the RasterBandDescriptor interface.
 */
export function instanceOfRasterBandDescriptor(value) {
    let isInstance = true;
    isInstance = isInstance && "measurement" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function RasterBandDescriptorFromJSON(json) {
    return RasterBandDescriptorFromJSONTyped(json, false);
}
export function RasterBandDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'measurement': MeasurementFromJSON(json['measurement']),
        'name': json['name'],
    };
}
export function RasterBandDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'measurement': MeasurementToJSON(value.measurement),
        'name': value.name,
    };
}
