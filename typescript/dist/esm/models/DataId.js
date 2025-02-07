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
import { ExternalDataIdFromJSONTyped, ExternalDataIdToJSON, } from './ExternalDataId';
import { InternalDataIdFromJSONTyped, InternalDataIdToJSON, } from './InternalDataId';
export function DataIdFromJSON(json) {
    return DataIdFromJSONTyped(json, false);
}
export function DataIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'external':
            return Object.assign(Object.assign({}, ExternalDataIdFromJSONTyped(json, true)), { type: 'external' });
        case 'internal':
            return Object.assign(Object.assign({}, InternalDataIdFromJSONTyped(json, true)), { type: 'internal' });
        default:
            throw new Error(`No variant of DataId exists with 'type=${json['type']}'`);
    }
}
export function DataIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
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
