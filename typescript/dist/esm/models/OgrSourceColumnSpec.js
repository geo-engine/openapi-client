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
import { FormatSpecificsFromJSON, FormatSpecificsToJSON, } from './FormatSpecifics';
/**
 * Check if a given object implements the OgrSourceColumnSpec interface.
 */
export function instanceOfOgrSourceColumnSpec(value) {
    if (!('x' in value) || value['x'] === undefined)
        return false;
    return true;
}
export function OgrSourceColumnSpecFromJSON(json) {
    return OgrSourceColumnSpecFromJSONTyped(json, false);
}
export function OgrSourceColumnSpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bool': json['bool'] == null ? undefined : json['bool'],
        'datetime': json['datetime'] == null ? undefined : json['datetime'],
        '_float': json['float'] == null ? undefined : json['float'],
        'formatSpecifics': json['formatSpecifics'] == null ? undefined : FormatSpecificsFromJSON(json['formatSpecifics']),
        '_int': json['int'] == null ? undefined : json['int'],
        'rename': json['rename'] == null ? undefined : json['rename'],
        'text': json['text'] == null ? undefined : json['text'],
        'x': json['x'],
        'y': json['y'] == null ? undefined : json['y'],
    };
}
export function OgrSourceColumnSpecToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bool': value['bool'],
        'datetime': value['datetime'],
        'float': value['_float'],
        'formatSpecifics': FormatSpecificsToJSON(value['formatSpecifics']),
        'int': value['_int'],
        'rename': value['rename'],
        'text': value['text'],
        'x': value['x'],
        'y': value['y'],
    };
}
