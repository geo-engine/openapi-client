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

import type { DataPathOneOf } from './DataPathOneOf';
import {
    instanceOfDataPathOneOf,
    DataPathOneOfFromJSON,
    DataPathOneOfFromJSONTyped,
    DataPathOneOfToJSON,
} from './DataPathOneOf';
import type { DataPathOneOf1 } from './DataPathOneOf1';
import {
    instanceOfDataPathOneOf1,
    DataPathOneOf1FromJSON,
    DataPathOneOf1FromJSONTyped,
    DataPathOneOf1ToJSON,
} from './DataPathOneOf1';

/**
 * @type DataPath
 * 
 * @export
 */
export type DataPath = DataPathOneOf | DataPathOneOf1;

export function DataPathFromJSON(json: any): DataPath {
    return DataPathFromJSONTyped(json, false);
}

export function DataPathFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataPath {
    if (json == null) {
        return json;
    }
    if (instanceOfDataPathOneOf(json)) {
        return DataPathOneOfFromJSONTyped(json, true);
    }
    if (instanceOfDataPathOneOf1(json)) {
        return DataPathOneOf1FromJSONTyped(json, true);
    }

    return {} as any;
}

export function DataPathToJSON(json: any): any {
    return DataPathToJSONTyped(json, false);
}

export function DataPathToJSONTyped(value?: DataPath | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfDataPathOneOf(value)) {
        return DataPathOneOfToJSON(value as DataPathOneOf);
    }
    if (instanceOfDataPathOneOf1(value)) {
        return DataPathOneOf1ToJSON(value as DataPathOneOf1);
    }

    return {};
}

