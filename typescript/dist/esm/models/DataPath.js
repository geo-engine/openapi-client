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
import { instanceOfDataPathOneOf, DataPathOneOfFromJSONTyped, DataPathOneOfToJSON, } from './DataPathOneOf';
import { instanceOfDataPathOneOf1, DataPathOneOf1FromJSONTyped, DataPathOneOf1ToJSON, } from './DataPathOneOf1';
export function DataPathFromJSON(json) {
    return DataPathFromJSONTyped(json, false);
}
export function DataPathFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if (instanceOfDataPathOneOf(json)) {
        return DataPathOneOfFromJSONTyped(json, true);
    }
    if (instanceOfDataPathOneOf1(json)) {
        return DataPathOneOf1FromJSONTyped(json, true);
    }
    return {};
}
export function DataPathToJSON(json) {
    return DataPathToJSONTyped(json, false);
}
export function DataPathToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    if (instanceOfDataPathOneOf(value)) {
        return DataPathOneOfToJSON(value);
    }
    if (instanceOfDataPathOneOf1(value)) {
        return DataPathOneOf1ToJSON(value);
    }
    return {};
}
