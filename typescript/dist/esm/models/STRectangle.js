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
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
import { BoundingBox2DFromJSON, BoundingBox2DToJSON, } from './BoundingBox2D';
/**
 * Check if a given object implements the STRectangle interface.
 */
export function instanceOfSTRectangle(value) {
    if (!('boundingBox' in value) || value['boundingBox'] === undefined)
        return false;
    if (!('spatialReference' in value) || value['spatialReference'] === undefined)
        return false;
    if (!('timeInterval' in value) || value['timeInterval'] === undefined)
        return false;
    return true;
}
export function STRectangleFromJSON(json) {
    return STRectangleFromJSONTyped(json, false);
}
export function STRectangleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'boundingBox': BoundingBox2DFromJSON(json['boundingBox']),
        'spatialReference': json['spatialReference'],
        'timeInterval': TimeIntervalFromJSON(json['timeInterval']),
    };
}
export function STRectangleToJSON(json) {
    return STRectangleToJSONTyped(json, false);
}
export function STRectangleToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'boundingBox': BoundingBox2DToJSON(value['boundingBox']),
        'spatialReference': value['spatialReference'],
        'timeInterval': TimeIntervalToJSON(value['timeInterval']),
    };
}
