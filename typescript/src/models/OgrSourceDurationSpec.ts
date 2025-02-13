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

import type { OgrSourceDurationSpecInfinite } from './OgrSourceDurationSpecInfinite';
import {
    instanceOfOgrSourceDurationSpecInfinite,
    OgrSourceDurationSpecInfiniteFromJSON,
    OgrSourceDurationSpecInfiniteFromJSONTyped,
    OgrSourceDurationSpecInfiniteToJSON,
} from './OgrSourceDurationSpecInfinite';
import type { OgrSourceDurationSpecValue } from './OgrSourceDurationSpecValue';
import {
    instanceOfOgrSourceDurationSpecValue,
    OgrSourceDurationSpecValueFromJSON,
    OgrSourceDurationSpecValueFromJSONTyped,
    OgrSourceDurationSpecValueToJSON,
} from './OgrSourceDurationSpecValue';
import type { OgrSourceDurationSpecZero } from './OgrSourceDurationSpecZero';
import {
    instanceOfOgrSourceDurationSpecZero,
    OgrSourceDurationSpecZeroFromJSON,
    OgrSourceDurationSpecZeroFromJSONTyped,
    OgrSourceDurationSpecZeroToJSON,
} from './OgrSourceDurationSpecZero';

/**
 * @type OgrSourceDurationSpec
 * 
 * @export
 */
export type OgrSourceDurationSpec = { type: 'infinite' } & OgrSourceDurationSpecInfinite | { type: 'value' } & OgrSourceDurationSpecValue | { type: 'zero' } & OgrSourceDurationSpecZero;

export function OgrSourceDurationSpecFromJSON(json: any): OgrSourceDurationSpec {
    return OgrSourceDurationSpecFromJSONTyped(json, false);
}

export function OgrSourceDurationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDurationSpec {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'infinite':
            return Object.assign({}, OgrSourceDurationSpecInfiniteFromJSONTyped(json, true), { type: 'infinite' } as const);
        case 'value':
            return Object.assign({}, OgrSourceDurationSpecValueFromJSONTyped(json, true), { type: 'value' } as const);
        case 'zero':
            return Object.assign({}, OgrSourceDurationSpecZeroFromJSONTyped(json, true), { type: 'zero' } as const);
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${json['type']}'`);
    }
}

export function OgrSourceDurationSpecToJSON(json: any): any {
    return OgrSourceDurationSpecToJSONTyped(json, false);
}

export function OgrSourceDurationSpecToJSONTyped(value?: OgrSourceDurationSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'infinite':
            return Object.assign({}, OgrSourceDurationSpecInfiniteToJSON(value), { type: 'infinite' } as const);
        case 'value':
            return Object.assign({}, OgrSourceDurationSpecValueToJSON(value), { type: 'value' } as const);
        case 'zero':
            return Object.assign({}, OgrSourceDurationSpecZeroToJSON(value), { type: 'zero' } as const);
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${value['type']}'`);
    }

}

