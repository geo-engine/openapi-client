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
 * 
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
            return {...ExternalDataIdFromJSONTyped(json, true), type: 'external'};
        case 'internal':
            return {...InternalDataIdFromJSONTyped(json, true), type: 'internal'};
        default:
            throw new Error(`No variant of DataId exists with 'type=${json['type']}'`);
    }
}

export function DataIdToJSON(value?: DataId | null): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'external':
            return ExternalDataIdToJSON(value);
        case 'internal':
            return InternalDataIdToJSON(value);
        default:
            throw new Error(`No variant of DataId exists with 'type=${value['type']}'`);
    }

}

