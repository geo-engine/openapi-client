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

import { exists, mapValues } from '../runtime';
import type { Coordinate2D } from './Coordinate2D';
import {
    Coordinate2DFromJSON,
    Coordinate2DFromJSONTyped,
    Coordinate2DToJSON,
} from './Coordinate2D';

/**
 * 
 * @export
 * @interface MockDatasetDataSourceLoadingInfo
 */
export interface MockDatasetDataSourceLoadingInfo {
    /**
     * 
     * @type {Array<Coordinate2D>}
     * @memberof MockDatasetDataSourceLoadingInfo
     */
    points: Array<Coordinate2D>;
}

/**
 * Check if a given object implements the MockDatasetDataSourceLoadingInfo interface.
 */
export function instanceOfMockDatasetDataSourceLoadingInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "points" in value;

    return isInstance;
}

export function MockDatasetDataSourceLoadingInfoFromJSON(json: any): MockDatasetDataSourceLoadingInfo {
    return MockDatasetDataSourceLoadingInfoFromJSONTyped(json, false);
}

export function MockDatasetDataSourceLoadingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MockDatasetDataSourceLoadingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'points': ((json['points'] as Array<any>).map(Coordinate2DFromJSON)),
    };
}

export function MockDatasetDataSourceLoadingInfoToJSON(value?: MockDatasetDataSourceLoadingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'points': ((value.points as Array<any>).map(Coordinate2DToJSON)),
    };
}
