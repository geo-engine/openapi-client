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
import { OgrSourceDurationSpecInfiniteFromJSONTyped, OgrSourceDurationSpecInfiniteToJSON, } from './OgrSourceDurationSpecInfinite';
import { OgrSourceDurationSpecValueFromJSONTyped, OgrSourceDurationSpecValueToJSON, } from './OgrSourceDurationSpecValue';
import { OgrSourceDurationSpecZeroFromJSONTyped, OgrSourceDurationSpecZeroToJSON, } from './OgrSourceDurationSpecZero';
export function OgrSourceDurationSpecFromJSON(json) {
    return OgrSourceDurationSpecFromJSONTyped(json, false);
}
export function OgrSourceDurationSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'infinite':
            return Object.assign(Object.assign({}, OgrSourceDurationSpecInfiniteFromJSONTyped(json, true)), { type: 'infinite' });
        case 'value':
            return Object.assign(Object.assign({}, OgrSourceDurationSpecValueFromJSONTyped(json, true)), { type: 'value' });
        case 'zero':
            return Object.assign(Object.assign({}, OgrSourceDurationSpecZeroFromJSONTyped(json, true)), { type: 'zero' });
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${json['type']}'`);
    }
}
export function OgrSourceDurationSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'infinite':
            return OgrSourceDurationSpecInfiniteToJSON(value);
        case 'value':
            return OgrSourceDurationSpecValueToJSON(value);
        case 'zero':
            return OgrSourceDurationSpecZeroToJSON(value);
        default:
            throw new Error(`No variant of OgrSourceDurationSpec exists with 'type=${value['type']}'`);
    }
}
