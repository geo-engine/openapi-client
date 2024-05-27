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
import { Coordinate2DFromJSON, Coordinate2DToJSON, } from './Coordinate2D';
/**
 * Check if a given object implements the GdalDatasetGeoTransform interface.
 */
export function instanceOfGdalDatasetGeoTransform(value) {
    if (!('originCoordinate' in value) || value['originCoordinate'] === undefined)
        return false;
    if (!('xPixelSize' in value) || value['xPixelSize'] === undefined)
        return false;
    if (!('yPixelSize' in value) || value['yPixelSize'] === undefined)
        return false;
    return true;
}
export function GdalDatasetGeoTransformFromJSON(json) {
    return GdalDatasetGeoTransformFromJSONTyped(json, false);
}
export function GdalDatasetGeoTransformFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'originCoordinate': Coordinate2DFromJSON(json['originCoordinate']),
        'xPixelSize': json['xPixelSize'],
        'yPixelSize': json['yPixelSize'],
    };
}
export function GdalDatasetGeoTransformToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'originCoordinate': Coordinate2DToJSON(value['originCoordinate']),
        'xPixelSize': value['xPixelSize'],
        'yPixelSize': value['yPixelSize'],
    };
}
