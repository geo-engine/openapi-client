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
 * Check if a given object implements the MultiPoint interface.
 */
export function instanceOfMultiPoint(value) {
    if (!('coordinates' in value) || value['coordinates'] === undefined)
        return false;
    return true;
}
export function MultiPointFromJSON(json) {
    return MultiPointFromJSONTyped(json, false);
}
export function MultiPointFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'coordinates': (json['coordinates'].map(Coordinate2DFromJSON)),
    };
}
export function MultiPointToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'coordinates': (value['coordinates'].map(Coordinate2DToJSON)),
    };
}
