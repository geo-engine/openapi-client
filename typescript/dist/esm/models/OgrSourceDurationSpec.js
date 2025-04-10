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
import { OgrSourceDurationSpecInfiniteFromJSONTyped, OgrSourceDurationSpecInfiniteToJSON, } from './OgrSourceDurationSpecInfinite';
import { OgrSourceDurationSpecValueFromJSONTyped, OgrSourceDurationSpecValueToJSON, } from './OgrSourceDurationSpecValue';
import { OgrSourceDurationSpecZeroFromJSONTyped, OgrSourceDurationSpecZeroToJSON, } from './OgrSourceDurationSpecZero';
export function OgrSourceDurationSpecFromJSON(json) {
    return OgrSourceDurationSpecFromJSONTyped(json, false);
}
export function OgrSourceDurationSpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'infinite':
            return Object.assign({}, OgrSourceDurationSpecInfiniteFromJSONTyped(json, true), { type: 'infinite' });
        case 'value':
            return Object.assign({}, OgrSourceDurationSpecValueFromJSONTyped(json, true), { type: 'value' });
        case 'zero':
            return Object.assign({}, OgrSourceDurationSpecZeroFromJSONTyped(json, true), { type: 'zero' });
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${json['type']}'`);
    }
}
export function OgrSourceDurationSpecToJSON(json) {
    return OgrSourceDurationSpecToJSONTyped(json, false);
}
export function OgrSourceDurationSpecToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'infinite':
            return Object.assign({}, OgrSourceDurationSpecInfiniteToJSON(value), { type: 'infinite' });
        case 'value':
            return Object.assign({}, OgrSourceDurationSpecValueToJSON(value), { type: 'value' });
        case 'zero':
            return Object.assign({}, OgrSourceDurationSpecZeroToJSON(value), { type: 'zero' });
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${value['type']}'`);
    }
}
