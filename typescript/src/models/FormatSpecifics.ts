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

import type { FormatSpecificsOneOf } from './FormatSpecificsOneOf';
import {
    instanceOfFormatSpecificsOneOf,
    FormatSpecificsOneOfFromJSON,
    FormatSpecificsOneOfFromJSONTyped,
    FormatSpecificsOneOfToJSON,
} from './FormatSpecificsOneOf';

/**
 * @type FormatSpecifics
 * 
 * @export
 */
export type FormatSpecifics = FormatSpecificsOneOf;

export function FormatSpecificsFromJSON(json: any): FormatSpecifics {
    return FormatSpecificsFromJSONTyped(json, false);
}

export function FormatSpecificsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatSpecifics {
    if (json == null) {
        return json;
    }
    if (instanceOfFormatSpecificsOneOf(json)) {
        return FormatSpecificsOneOfFromJSONTyped(json, true);
    }
}

export function FormatSpecificsToJSON(value?: FormatSpecifics | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfFormatSpecificsOneOf(value)) {
        return FormatSpecificsOneOfToJSON(value as FormatSpecificsOneOf);
    }

    return {};
}

