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

import type { ExternalDataId } from './ExternalDataId';
import {
    instanceOfExternalDataId,
    ExternalDataIdFromJSON,
    ExternalDataIdFromJSONTyped,
    ExternalDataIdToJSON,
} from './ExternalDataId';
import type { InternalDataId } from './InternalDataId';
import {
    instanceOfInternalDataId,
    InternalDataIdFromJSON,
    InternalDataIdFromJSONTyped,
    InternalDataIdToJSON,
} from './InternalDataId';

/**
 * @type DataId
 * The identifier for loadable data. It is used in the source operators to get the loading info (aka parametrization)
 * for accessing the data. Internal data is loaded from datasets, external from `DataProvider`s.
 * @export
 */
export type DataId = { type: 'external' } & ExternalDataId | { type: 'internal' } & InternalDataId;

export function DataIdFromJSON(json: any): DataId {
    return DataIdFromJSONTyped(json, false);
}

export function DataIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataId {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'external':
            return Object.assign({}, ExternalDataIdFromJSONTyped(json, true), { type: 'external' } as const);
        case 'internal':
            return Object.assign({}, InternalDataIdFromJSONTyped(json, true), { type: 'internal' } as const);
        default:
            throw new Error(`No variant of DataId exists with 'type=${json['type']}'`);
    }
}

export function DataIdToJSON(json: any): any {
    return DataIdToJSONTyped(json, false);
}

export function DataIdToJSONTyped(value?: DataId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'external':
            return Object.assign({}, ExternalDataIdToJSON(value), { type: 'external' } as const);
        case 'internal':
            return Object.assign({}, InternalDataIdToJSON(value), { type: 'internal' } as const);
        default:
            throw new Error(`No variant of DataId exists with 'type=${value['type']}'`);
    }

}

