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
import { Coordinate2DFromJSON, Coordinate2DToJSON, } from './Coordinate2D';
/**
 * Check if a given object implements the MockDatasetDataSourceLoadingInfo interface.
 */
export function instanceOfMockDatasetDataSourceLoadingInfo(value) {
    let isInstance = true;
    isInstance = isInstance && "points" in value;
    return isInstance;
}
export function MockDatasetDataSourceLoadingInfoFromJSON(json) {
    return MockDatasetDataSourceLoadingInfoFromJSONTyped(json, false);
}
export function MockDatasetDataSourceLoadingInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'points': (json['points'].map(Coordinate2DFromJSON)),
    };
}
export function MockDatasetDataSourceLoadingInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'points': (value.points.map(Coordinate2DToJSON)),
    };
}
