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
 * Check if a given object implements the GeoTransform interface.
 */
export function instanceOfGeoTransform(value) {
    let isInstance = true;
    isInstance = isInstance && "originCoordinate" in value;
    isInstance = isInstance && "xPixelSize" in value;
    isInstance = isInstance && "yPixelSize" in value;
    return isInstance;
}
export function GeoTransformFromJSON(json) {
    return GeoTransformFromJSONTyped(json, false);
}
export function GeoTransformFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'originCoordinate': Coordinate2DFromJSON(json['originCoordinate']),
        'xPixelSize': json['xPixelSize'],
        'yPixelSize': json['yPixelSize'],
    };
}
export function GeoTransformToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'originCoordinate': Coordinate2DToJSON(value.originCoordinate),
        'xPixelSize': value.xPixelSize,
        'yPixelSize': value.yPixelSize,
    };
}
